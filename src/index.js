import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js'; // Include .js extension
import reportWebVitals from './reportWebVitals.js'; // Include .js extension
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index.js'; // Adjusted the path to be relative

const container = document.getElementById('root');
const root = createRoot(container); // Creates a root

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
