import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/SalvajeDisplay.otf'
import Boxes from './components/Boxes'
import List from './components/List'
const choices = {
  rock: "https://media.giphy.com/media/11Gm5FXLGzPk8E/giphy.gif",
  paper: "https://media3.giphy.com/media/i1BlILBb7RKBG/source.gif",
  scissors: "https://media.giphy.com/media/h4Kx1U8tchb9e/giphy.gif"
};

function App() {
  return (
    
    <div className="App">
      
    <Boxes title="You" winner={false} imgURL={choices.rock} />
    <Boxes title="Computer" winner={true} imgURL={choices.paper}/>
    <Boxes title="Computer" winner={true} imgURL={choices.scissors} />
   </div>
   
  );
}

export default App;
