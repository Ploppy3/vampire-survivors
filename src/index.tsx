import {
  ChakraProvider, extendTheme, ThemeConfig,
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from './App';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  ,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
