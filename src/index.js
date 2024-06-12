import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PortFolio from './pages/PortFolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


AOS.init({
  duration: 1000,
  offset: 200 // Adjust this value to control when animations start relative to the viewport
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PortFolio />
  </React.StrictMode>
);




reportWebVitals();
