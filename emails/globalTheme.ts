const createGlobalTheme = () => {
  const size = {
    mobile: '576px',
    tablet: '768px',
    laptop: '1024px',
    smdesktop: '1330px',
    desktop: '1440px',
    xldesktop: '1920px',
  };

  const primitives = {
    white: '#ffffff',
    primary25: '#FCFAFF',
    primary50: '#F9F5FF',
    primary100: '#F4EBFF',
    primary200: '#E9D7FE',
    primary300: '#D6BBFB',
    primary400: '#B692F6',
    primary500: '#9E77ED',
    primary600: '#7F56D9',
    primary700: '#6941C6',
    primary800: '#53389E',
    primary900: '#42307D',
    gray25: '#FCFCFD',
    gray50: '#F9FAFB',
    gray100: '#F2F4F7',
    gray200: '#EAECF0',
    gray300: '#D0D5DD',
    gray400: '#98A2B3',
    gray500: '#667085',
    gray600: '#475467',
    gray700: '#344054',
    gray800: '#1D2939',
    gray900: '#101828',
    red25: '#FFFBFA',
    red50: '#FEF3F2',
    red100: '#FEE4E2',
    red200: '#FECDCA',
    red300: '#FDA29B',
    red400: '#F97066',
    red500: '#F04438',
    red600: '#D92D20',
    red700: '#B42318',
    red800: '#912018',
    red900: '#7A271A',
    green25: '#F6FEF9',
    green50: '#ECFDF3',
    green100: '#D1FADF',
    green200: '#A6F4C5',
    green300: '#6CE9A6',
    green400: '#32D583',
    green500: '#12B76A',
    green600: '#039855',
    green700: '#027A48',
    green800: '#05603A',
    green900: '#054F31',
    amber25: '#FFFCF5',
    amber50: '#FFFAEB',
    amber100: '#FEF0C7',
    amber200: '#FEDF89',
    amber300: '#FEC84B',
    amber400: '#FDB022',
    amber500: '#F79009',
    amber600: '#DC6803',
    amber700: '#B54708',
    amber800: '#93370D',
    amber900: '#7A2E0E',
  };

  const fonts = {
    family: {
      website: "'DM Sans', sans-serif",
    },
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      xxl: '30px',
      h1: '32px',
      h2: '16px',
    },
    weight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
      extraBlack: 950,
    },
  };

  const space = {
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    single: '4px',
    double: '8px',
    multiple: (n: number) => `${n * 4}px`,
  };

  const borderRadius = {
    xs: '6px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    rounded: '50%',
  };

  const padding = {
    xl: '40px 125px',
    lg: '60px',
    md: '40px',
    sm: '10px 18px',
  };

  const boxShadow = {
    xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.06)',
    lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
  };

  const border = {
    sm: `1px solid ${primitives.gray300}`,
  };

  const transition = {
    default: 'all 0.15s ease-in-out',
  };

  const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    smdesktop: `(max-width: ${size.smdesktop})`,
    desktop: `(max-width: ${size.desktop})`,
    xldesktop: `(max-width: ${size.xldesktop})`,
  };

  const colors = {
    text: {
      heading: primitives.gray900,
      body: primitives.gray600,
      dim: primitives.gray500,
      accent: primitives.primary700,
      onPrimary: primitives.white,
      onPrimaryDim: primitives.primary500,
    },
    border: {
      default: primitives.gray300,
      focus: primitives.primary500,
      onPrimary: primitives.primary600,
    },
    background: {
      default: primitives.white,
      dim: primitives.gray50,
      primaryShade: primitives.primary800,
      primary: primitives.primary700,
      primaryDim: primitives.primary600,
    },
  };

  return {
    size,
    primitives,
    fonts,
    space,
    borderRadius,
    padding,
    boxShadow,
    border,
    transition,
    device,
    colors,
  };
};

export const globalTheme = createGlobalTheme();
