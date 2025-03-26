// Check if the code is running in a browser environment
const IS_BROWSER = !!WINDOW.document;

// Check if the document object has the necessary properties and methods for DOM manipulation
const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';

// Check if the browser is Internet Explorer
const IS_IE = ~WINDOW.navigator.userAgent.indexOf('MSIE') || ~WINDOW.navigator.userAgent.indexOf('Trident/');

// Object to store the mapping of style prefixes for different font families
const PREFIX_TO_STYLE = {
  [FAMILY_CLASSIC]: {
    'fa': 'solid',
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'fa-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fakd': 'kit',
    'fa-kit': 'kit',
    'fa-kit-duotone': 'kit'
  },
  [FAMILY_SHARP]: {
    'fa': 'solid',
    'fass': 'solid',
    'fa-solid': 'solid',
    'fasr': 'regular',
    'fa-regular': 'regular',
    'fasl': 'light',
    'fa-light': 'light',
    'fast': 'thin',
    'fa-thin': 'thin'
  }
};

// Object to store the mapping of styles to their corresponding prefixes for different font families
const STYLE_TO_PREFIX = {
  [FAMILY_CLASSIC]: {
    solid: 'fas',
    regular: 'far',
    light: 'fal',
    thin: 'fat',
    duotone: 'fad',
    brands: 'fab',
    kit: 'fak'
  },
  [FAMILY_SHARP]: {
    solid: 'fass',
    regular: 'fasr',
    light: 'fasl',
    thin: 'fast'
  }
};

// Object to store the mapping of long-form style names to their corresponding prefixes for different font families
const PREFIX_TO_LONG_STYLE = {
  [FAMILY_CLASSIC]: {
    fab: 'fa-brands',
    fad: 'fa-duotone',
    fak: 'fa-kit',
    fal: 'fa-light',
    far: 'fa-regular',
    fas: 'fa-solid',
    fat: 'fa-thin'
  },
  [FAMILY_SHARP]: {
    fass: 'fa-solid',
    fasr: 'fa-regular',
    fasl: 'fa-light',
    fast: 'fa-thin'
  }
};

// Object to store the mapping of long-form style names to their corresponding prefixes for different font families
const LONG_STYLE_TO_PREFIX = {
  [FAMILY_CLASSIC]: {
    'fa-brands': 'fab',
    'fa-duotone': 'fad',
    'fa-kit': 'fak',
    'fa-light': 'fal',
    'fa-regular': 'far',
    'fa-solid': 'fas',
    'fa-thin': 'fat'
  },
  [FAMILY_SHARP]: {
    'fa-solid': 'fass',
    'fa-regular': 'fasr',
    'fa-light': 'fasl',
    'fa-thin': 'fast'
  }
};

// Object to store the mapping of font weights to their corresponding prefix
