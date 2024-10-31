interface ExtendedVariations extends NormalVariations {
    5: string;
    2: string;
    0: string;
}

interface NormalVariations extends MinimalVariations {
    90: string;
    70: string;
    50: string;
    30: string;
    10: string;
}

interface MinimalVariations {
    default: any;
    80: string;
    60: string;
    40: string;
    20: string;
}

type Colors = {
    dark: string;
    darkText: string;
    blueDark: string;
    light: string;
    shadow: string;
    primary: ExtendedVariations;
    secondary: NormalVariations;
    tertiary?: NormalVariations;
    quaternary?: NormalVariations;
    success: MinimalVariations;
    error: MinimalVariations;
    warning: MinimalVariations;
    info: MinimalVariations;
    gray: string;
    grayDark: string;
};

export const COLORS: Colors = {
    dark: '#121212',
    darkText: '#1c1e21',
    blueDark: '#002367',
    light: '#FFFFFF',
    shadow: '#334155',
    gray: '#f3f4f6',
    grayDark: '#8c8c8c',
    primary: {
      default: '#48a0dc',
      90: 'rgba(72, 160, 220, 0.9)',
      80: 'rgba(72, 160, 220, 0.8)',
      70: 'rgba(72, 160, 220, 0.7)',
      60: 'rgba(72, 160, 220, 0.6)',
      50: 'rgba(72, 160, 220, 0.5)',
      40: 'rgba(72, 160, 220, 0.4)',
      30: 'rgba(72, 160, 220, 0.3)',
      20: 'rgba(72, 160, 220, 0.2)',
      10: 'rgba(72, 160, 220, 0.1)',
      5: '',
      2: '',
      0: '',
    },
    secondary: {
      default: '#ed7161',
      90: 'rgba(237, 113, 97, 0.9)',
      80: 'rgba(237, 113, 97, 0.8)',
      70: 'rgba(237, 113, 97, 0.7)',
      60: 'rgba(237, 113, 97, 0.6)',
      50: 'rgba(237, 113, 97, 0.5)',
      40: 'rgba(237, 113, 97, 0.4)',
      30: 'rgba(237, 113, 97, 0.3)',
      20: 'rgba(237, 113, 97, 0.2)',
      10: 'rgba(237, 113, 97, 0.1)',
    },
    tertiary: {
      default: '#FDC508',
      90: '#FECB21',
      80: '#FDD139',
      70: '#FED753',
      60: '#FEDC6B',
      50: '#FDE183',
      40: '#FEE89C',
      30: '#FFEEB5',
      20: '#FFF3CE',
      10: '#FFFAE7',
    },
    success: {
      default: '#13D97D',
      80: '#42E097',
      60: '#71E8B1',
      40: '#A1F0CB',
      20: '#D0F7E5',
    },
    error: {
      default: '#F8320D',
      80: '#F95B3D',
      60: '#FB846E',
      40: '#FCAD9E',
      20: '#FED6CF',
    },
    warning: {
      default: '#FFDC25',
      80: '#FFE351',
      60: '#FFEA7C',
      40: '#FFF1A8',
      20: '#FFF8D3',
    },
    info: {
      default: '#2888EF',
      80: '#53A0F2',
      60: '#7EB8F5',
      40: '#A9CFF9',
      20: '#D4E7FC',
    },
};
