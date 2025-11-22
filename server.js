const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'data.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'MY_PASSWORD';

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const defaultData = { blocks: [], settings: {} };

function ensureDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
  }
}

function readDataFile() {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, 'utf8') || '';
  try {
    return JSON.parse(raw);
  } catch (error) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
}

app.get('/api/data', (req, res) => {
  try {
    const data = readDataFile();
    res.json(data);
  } catch (error) {
    console.error('Error reading data file:', error);
    res.status(500).json({ error: 'Failed to load data' });
  }
});

app.post('/api/save', (req, res) => {
  const pass = req.headers['x-admin-pass'];
  if (pass !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const payload = req.body && typeof req.body === 'object' ? req.body : defaultData;
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving data file:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.use(express.static(path.join(__dirname)));

ensureDataFile();

// Export the app for serverless platforms (e.g., Vercel) while still allowing
// local development with `node server.js`.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
