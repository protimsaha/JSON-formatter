import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [data, setdata] = useState('')

  const formate = () => {
    const text = (document.getElementById('text').value)
    const jsonFormated = JSON.stringify(JSON.parse(text), null, 4)
    setdata(jsonFormated)

  }

  window.onerror = function () {
    setdata("Uncaught SyntaxError: Unexpected token a in JSON at position 0 ");
  };

  const deleteData = () => {
    ((document.getElementById('text').value) = '')
    setdata('')

  }

  return (
    <div className='body'>
      <h2 className='h-text'>Your Online Free JSON Formater</h2>
      <section className='action'>
        <button onClick={formate} className='f-btn'>Format JSON</button>
        <button onClick={deleteData} className='c-btn'>Clear Data </button>
      </section>
      <section className='display'>
        <textarea className='input' name="input" id='text' ></textarea>
        <textarea value={data} readOnly className='input' name="output" id="" ></textarea>
      </section>
    </div>
  );
};

export default App;