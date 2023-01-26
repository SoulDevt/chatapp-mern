import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'



// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import ChatProvider from './Context/ChatProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
    </ChatProvider>
  </React.StrictMode>
);

