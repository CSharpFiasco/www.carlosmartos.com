import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('root element is null');

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
