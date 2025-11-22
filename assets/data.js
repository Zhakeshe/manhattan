
const ManhattanData = {
  async load() {
    try {
      const res = await fetch("/api/data");
      if (!res.ok) throw new Error("Failed to load");
      return await res.json();
    } catch (err) {
      console.error("Error loading data:", err);
      return {
        settings: {
          title: "MANHATTAN",
          telegram: "https://t.me/",
          font: '"Playfair Display", "Inter", serif',
          accent: "#0050FF",
          background: "#f7f7f7",
          favicon: null
        },
        blocks: []
      };
    }
  },

  async save(data) {
    try {
      const res = await fetch("/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-pass": ADMIN_PASSWORD
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error("Save failed");

      console.log("Saved to server");
    } catch (err) {
      console.error("Error saving:", err);
      alert("❌ Server save failed. Check backend.");
    }
  },

  async fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  }
};
