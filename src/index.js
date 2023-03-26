import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact.jsx";
import Navb from "./Navb/Navb";
import Category from './Category/Category';
import Description from './Description/Description';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navb />
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="Contact" element={<Contact />} />
  <Route path="Category" element={<Category />} />
  
  <Route path='Description/:id' element={<Description />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
