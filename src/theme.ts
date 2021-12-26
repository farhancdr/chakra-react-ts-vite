import {
  extendTheme,
  theme as base,
  ThemeConfig,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        backgroundColor: 'gray.50',
        _focus: {
          borderColor: 'brand.500',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
    sm: {
      field: {
        borderRadius: 'md',
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
  },
};

const theme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: '#FAF5FF',
        100: '#E9D8FD',
        200: '#D6BCFA',
        300: '#B794F4',
        400: '#9F7AEA',
        500: '#805AD5',
        600: '#6B46C1',
        700: '#553C9A',
        800: '#44337A',
        900: '#322659',
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: () => ({
            ...brandRing,
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
