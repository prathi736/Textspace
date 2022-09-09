// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title='TextSpace'/>
      <div className="container my-5">
        <Textform heading='Enter your text in this box 👇'/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
