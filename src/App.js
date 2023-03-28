import './App.css';
import React from 'react';
import Animals from './Animals';
import Fejlec from './Fejlec';
import Component from './Component';
import animalsList from './animalsList';
import State from './Stateles';

//        <Animals/>


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fejlec></Fejlec>
        <h2 className='find'>Find your new best friend!</h2>
        
        <Animals/>
        <></>
        <State/>
        <></>

        {
          animalsList.map(
            animal => 
            <Component img={animal.img} name={animal.name} color={animal.color} age={animal.age} location={animal.location}/>
          )
        }
        
      </header>
    </div>
  );
}


export default App;

/*
export default function App({ Component, pageProps }) {
  return <Fejlec>

    <Animals {...pageProps} />
  </Fejlec>
    
}*/