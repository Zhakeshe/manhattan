const MANHATTAN_STORAGE_KEY = 'manhattanData';

function getDefaultBlocks() {
  return [
    {
      id: 'image-square',
      type: 'square',
      cols: 1,
      rows: 1,
      slot: 'first-image',
      title: '',
      text: '',
      image: '',
      bgColor: '#f2f2f2',
      borderColor: '#0050FF',
      hidden: false
    },
    {
      id: 'info-rect',
      type: 'rect',
      cols: 2,
      rows: 1,
      slot: 'first-info',
      title: 'MANHATTAN',
      text: 'MANHATTAN',
      buttonText: 'MANHATTAN',
      buttonLink: '#',
      bgColor: '#ffffff',
      borderColor: '#0050FF',
      hidden: false
    },
    {
      id: 'wide-pill',
      type: 'pill',
      cols: 3,
      rows: 1,
      slot: 'wide',
      title: '',
      text: '',
      buttonText: '',
      buttonLink: '',
      bgColor: '#ffffff',
      borderColor: '#0050FF',
      hidden: false
    },
    {
      id: 'tall-rect',
      type: 'tall',
      cols: 1,
      rows: 2,
      slot: 'tall',
      title: '',
      text: '',
      bgColor: '#ededed',
      borderColor: '#0050FF',
      hidden: false
    },
    {
      id: 'medium-rect',
      type: 'rect',
      cols: 1,
      rows: 1,
      slot: 'bottom-mid',
      title: '',
      text: '',
      bgColor: '#ededed',
      borderColor: '#0050FF',
      hidden: false
    },
    {
      id: 'bottom-square',
      type: 'square',
      cols: 1,
      rows: 1,
      slot: 'bottom-square',
      title: '',
      text: '',
      bgColor: '#ededed',
      borderColor: '#0050FF',
      hidden: false
    }
  ];
}

function getDefaultData() {
  return {
    settings: {
      title: 'MANHATTAN',
      telegram: 'https://t.me/',
      font: '"Playfair Display", "Inter", serif',
      accent: '#0050FF',
      background: '#f7f7f7',
      favicon: null
    },
    blocks: getDefaultBlocks()
  };
}

function loadManhattanData() {
  const raw = localStorage.getItem(MANHATTAN_STORAGE_KEY);
  if (!raw) {
    const defaults = getDefaultData();
    saveManhattanData(defaults);
    return defaults;
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      settings: { ...getDefaultData().settings, ...(parsed.settings || {}) },
      blocks: Array.isArray(parsed.blocks) && parsed.blocks.length ? parsed.blocks : getDefaultBlocks()
    };
  } catch (e) {
    const defaults = getDefaultData();
    saveManhattanData(defaults);
    return defaults;
  }
}

function saveManhattanData(data) {
  localStorage.setItem(MANHATTAN_STORAGE_KEY, JSON.stringify(data));
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

window.ManhattanData = {
  load: loadManhattanData,
  save: saveManhattanData,
  defaults: getDefaultData,
  fileToDataUrl
};
