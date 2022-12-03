import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXtMv4NUK1fTyZxiAxAkAqKgqkLiHx2Rg",
  authDomain: "ohmygod-comics.firebaseapp.com",
  projectId: "ohmygod-comics",
  storageBucket: "ohmygod-comics.appspot.com",
  messagingSenderId: "411531161174",
  appId: "1:411531161174:web:c2c6ceb4c11a2ba15355f7"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
