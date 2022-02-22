import {
  ChakraProvider,
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from './App';
import GeolocationProvider from './providers/Geolocation';

ReactDOM.render(
  <ChakraProvider>
    <GeolocationProvider>
      <App />
    </GeolocationProvider>
  </ChakraProvider>
  ,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
