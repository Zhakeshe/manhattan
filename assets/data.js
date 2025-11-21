const MANHATTAN_STORAGE_KEY = 'manhattanData';

function getDefaultBlocks() {
  return [
    {
      id: 'block-1',
      title: 'Golden Atrium',
      text: 'Velvet lounges, amber lighting, and curated Kazakh hospitality.',
      image: null,
      buttonText: 'Reserve a Table',
      buttonLink: '#',
      color: '#fff5e2',
      textColor: '#6b4d2e',
      align: 'left',
      borderRadius: 28,
      shadow: '0 18px 38px rgba(176, 131, 64, 0.28)',
      rotation: -2,
      hidden: false,
      hover: true,
      size: 'wide'
    },
    {
      id: 'block-2',
      title: 'Sky Nomad Suite',
      text: 'Champagne tastings and skyline views that shimmer like gold.',
      image: null,
      buttonText: 'Private Suites',
      buttonLink: '#',
      color: '#f7e7d2',
      textColor: '#5a4024',
      align: 'center',
      borderRadius: 24,
      shadow: '0 14px 32px rgba(142, 102, 46, 0.3)',
      rotation: 3,
      hidden: false,
      hover: true,
      size: 'tall'
    },
    {
      id: 'block-3',
      title: 'Silk Road Mixology',
      text: 'Signature cocktails infused with saffron, thyme, and steppe herbs.',
      image: null,
      buttonText: 'Signature List',
      buttonLink: '#',
      color: '#fdf2df',
      textColor: '#6b4d2e',
      align: 'left',
      borderRadius: 22,
      shadow: '0 16px 36px rgba(128, 86, 29, 0.26)',
      rotation: -1,
      hidden: false,
      hover: true,
      size: 'medium'
    },
    {
      id: 'block-4',
      title: 'Marble Courtyard',
      text: 'Live music under honeyed lanterns and ornamental brass.',
      image: null,
      buttonText: 'Tonight\'s Program',
      buttonLink: '#',
      color: '#f4e6cf',
      textColor: '#5b3f24',
      align: 'right',
      borderRadius: 30,
      shadow: '0 20px 44px rgba(160, 114, 52, 0.32)',
      rotation: 2,
      hidden: false,
      hover: true,
      size: 'square'
    },
    {
      id: 'block-5',
      title: 'Gilded Gallery',
      text: 'Local artisans curated with modern Manhattan flair.',
      image: null,
      buttonText: 'Art Walk',
      buttonLink: '#',
      color: '#fff9ef',
      textColor: '#604326',
      align: 'center',
      borderRadius: 24,
      shadow: '0 15px 34px rgba(130, 92, 33, 0.25)',
      rotation: -3,
      hidden: false,
      hover: true,
      size: 'medium'
    },
    {
      id: 'block-6',
      title: 'Royal Feast',
      text: 'Chef table featuring Kazakh steppe flavors with Manhattan finesse.',
      image: null,
      buttonText: 'Chef Table',
      buttonLink: '#',
      color: '#f7eddc',
      textColor: '#6c4b2d',
      align: 'left',
      borderRadius: 26,
      shadow: '0 16px 36px rgba(140, 96, 38, 0.3)',
      rotation: 1,
      hidden: false,
      hover: true,
      size: 'wide'
    },
    {
      id: 'block-7',
      title: 'Midnight Jazz',
      text: 'Silky brass tones flowing through moonlit mosaics.',
      image: null,
      buttonText: 'Lineup',
      buttonLink: '#',
      color: '#fbeedb',
      textColor: '#5d4021',
      align: 'right',
      borderRadius: 28,
      shadow: '0 18px 38px rgba(152, 110, 43, 0.28)',
      rotation: -2,
      hidden: false,
      hover: true,
      size: 'tall'
    }
  ];
}

function getDefaultData() {
  return {
    settings: {
      title: 'MANHATTAN',
      telegram: 'https://t.me/',
      animations: true,
      font: '"Playfair Display", "Inter", system-ui',
      favicon: null
    },
    background: {
      type: 'gradient',
      gradient: 'linear-gradient(135deg, #f9e9d0 0%, #d6b67a 40%, #f1d7a5 100%)',
      color: '#f3e5c8',
      image: null,
      blur: 4,
      darkness: 0.18
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
      background: { ...getDefaultData().background, ...(parsed.background || {}) },
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
