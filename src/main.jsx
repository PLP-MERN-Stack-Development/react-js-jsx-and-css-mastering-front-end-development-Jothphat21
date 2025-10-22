import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ApiData from './pages/ApiData';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';

const repoName = "/react-js-jsx-and-css-mastering-front-end-development/";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
  <BrowserRouter basename={repoName}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api" element={<ApiData />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  </StrictMode>
);
