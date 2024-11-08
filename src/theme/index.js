// src/theme/index.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  red: {
    500: '#E53E3E',
  },
  yellow: {
    500: '#D69E2E',
  },
  green: {
    500: '#38A169',
  },
};

const theme = extendTheme({ colors });

export default theme;
