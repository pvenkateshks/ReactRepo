import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

export default function App() {
  return (
      <>
      <Navbar title = "Home"/>
      <div className="container">
      <TextForm heading = "Enter the text to analyse"/>
      </div>
      
      </>
  );
}

