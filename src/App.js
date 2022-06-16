// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [simpsons, setSimpsons] = useState([
    {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right',
  }
]
  ) 
  const citation = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(function (response) {
      return (response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function (data) {
      setSimpsons(data[0])
    });
  } 
  return (
    <div className="App">
      <img src = {simpsons.image} atl="Homer Simpson"/> 
      <h1>{simpsons.character}</h1>
      <p>{simpsons.quote}</p>
      <button onClick={citation}>Click here!</button>
    </div>
  );
}

export default App;
