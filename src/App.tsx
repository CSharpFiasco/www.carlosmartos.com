import React from 'react';
import './App.css';
import Main from './containers/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Testing from './containers/Testing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
