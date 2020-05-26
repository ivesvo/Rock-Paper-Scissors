import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import './components/Pilowlava Regular.otf'
import './components/ChivoLight.ttf'
import Boxes from './components/Boxes'


export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "https://media.giphy.com/media/h4Kx1U8tchb9e/giphy.gif"
  },
  paper: {
    name: "paper",
    url: "https://media3.giphy.com/media/i1BlILBb7RKBG/source.gif"
  },
  rock: {
    name: "rock",
    url:
      "https://media.giphy.com/media/11Gm5FXLGzPk8E/giphy.gif"
  }
};



function App() {
  const [prompt, setGamePrompt] = useState("AREA51 ROCK PAPER SCISSORS");
  const [startGame, setstartGame] = useState(false);
  const [playerName, setPlayerName] = useState(null);
  

  function refreshGame() {
    window.location.reload(false);
  }

  const registerName = ()=>{
    setPlayerName (document.getElementById('nameInput').value)
  }

 
  // const [prompt, setGamePrompt] = useState("FANCY ROCK PAPER SCISSORS FOR NO REASON");
  let [userChoice, setuserChoice] = useState({})
  let [computerChoice, setcomputerChoice] = useState({})
  
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  
  const onPlay = (userChoice) =>{
    

    setuserChoice(CHOICES[userChoice])
    // console.log("user choose", userChoice)

    let randomArray = Object.keys(CHOICES) // get key from obje
    // console.log("itemArray", randomArray)

    let randomNum = Math.floor(Math.random()*(randomArray.length)) // 0-2
    // console.log("number is", randomNum)

    let itemName = randomArray[randomNum]
    console.log("what is the item", itemName)

    setcomputerChoice(CHOICES[itemName])
    console.log("computer choice is", computerChoice)


    let result;
    

  if (userChoice === "rock") {
    result = CHOICES[itemName].name === "scissors" ? "YOU WON" : "YOU LOSE";
   
  }
  if (userChoice === "paper") {
    result = CHOICES[itemName].name === "rock" ? "YOU WON" : "YOU LOSE";
  }
  if (userChoice === "scissors") {
    result = CHOICES[itemName].name === "paper" ? "YOU WON" : "YOU LOSE";
  }

  if (userChoice === CHOICES[itemName].name) result = "TIE GAME!";
  
  console.log(result)

  if (result ===  "YOU WON") {
    setPreviousWinner("You");
  } else if (result === "YOU LOSE") {
    setPreviousWinner("X Æ A-12");
  } else {
    setPreviousWinner("Tie");
  }

  
  setGamePrompt(result);
  gameHistory.push(result);
  setGameHistory(gameHistory);


  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">    
              <Boxes title= "You" previousWinner={previousWinner}  choices={userChoice}/>
              
              <div class="text-justify">
                    <h3 className={prompt}>{prompt}</h3>
                    <button class="btn btn-success btn-md" disabled={!startGame}  onClick={()=>onPlay('rock')}>Rock</button>
                    <button class="btn btn-success btn-md" disabled={!startGame} onClick={()=>onPlay('paper')}>Paper</button>
                    <button class="btn btn-success btn-md" disabled={!startGame} onClick={()=>onPlay('scissors')}>Scissors</button>
                    <button class="btn btn-success btn-md" onClick={()=>setstartGame(!startGame)}>Start</button>
                    <button class="btn btn-success btn-md" onClick={refreshGame}>Restart</button>
              
              </div>
              <Boxes title= "X Æ A-12" previousWinner={previousWinner}  choices={computerChoice}/>  
            </div>
          <div className="col-md-4 themed-grid-col history">
            <input class="nameArea" placeholder="X Æ A-12" type="text" id="nameInput"/>
              <button class="btn btn-success btn-md" onClick={()=>registerName()}>Enter name</button>
              
                <div class="h3">Player's Name: {playerName}</div>
                  {/* <h3>History</h3> */}
                  <ul className="list-unstyled components mb-5">
                    {gameHistory.map(result => {
                      return <li class="history">{playerName} : {result}</li>;
                    })}
                  </ul>

            </div>
            
            

            
             

                 
        
        </div>

        </div>

      </div>
         
             
      
              

           
              
           
         
       
         
         
        
      
        
         
           
           
          
          
      
    

   
  );
}

export default App;

