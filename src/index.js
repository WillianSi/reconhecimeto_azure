import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './components/Header'
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ComputerVision from "./components/ComputerVision";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <Header />
    <App />
    <Banner
      videoTitle={"Meu Video"}
      url={"https://www.youtube.com/watch?v=3BhkeY974Rg"}
      videoDescription={"IFSULDEMINAS"}
    />
    <ComputerVision />
    <Footer />
  </div>
    
);
