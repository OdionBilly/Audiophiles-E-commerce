import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ProviderProvider from '../Context/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  // <ProviderProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // {/* </ProviderProvider> */}
);
  
