import React, { useState, useEffect } from 'react';
import './App.css'
import  Routess  from './components/Routes';

function App() {
  return (
      <>
      <Routess />
      </>
  )
}

export default App

{/* <h2>Aliens</h2>
      <ul>
        {aliens.map(alien => (
          <li key={alien.id}>
            {alien.name} has been working on {alien.tech} and has {alien.sub ? "Subscribed" : "Not subscribed"}
          </li>
        ))}
      </ul> */}

       // useEffect(() => {
  //   fetch('http://localhost:9000/aliens')
  //           .then(response => response.json())
  //           .then(data => setAliens(data))
  //           .catch(error => console.log(error));
  // }, []);