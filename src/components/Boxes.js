import React from 'react'

const DEFAULT_IMG =
"https://media.giphy.com/media/gLWFIctRy4elNhTmvm/giphy.gif";

export default function Boxes(props) {
    
    console.log("props", props);
const won = props.title === props.previousWinner;
  let className;
  const hasPreviousGame =
    props.previousWinner === "X Æ A-12" || props.previousWinner === "You";
  if (hasPreviousGame) {
    className = won ? "winner" : "loser";
  }

  let prompt;
  console.log(props.title,won)
  if (won) {
    prompt = "Won";
    className = won ? "winner" : "loser";
  } else if (props.previousWinner === "Tie") {
    prompt = "Tie";
    className = "tie"
  } else if (props.previousWinner === null) {
    prompt = "Start";
    className = "start"
  } else {
    prompt = "Lose";
  }
    console.log("Props:", props);
    return (

        
        <div className={`box ${className}`}>
            {props.name}{props.color}
            <h1>{props.title}</h1>
            <h4>{props.choices.name}</h4>
            <img src={props.choices.url || DEFAULT_IMG} alt={props.title}/>
            
            
            

            {/* <div>Result</div> */}
            <h1>{prompt}</h1>
         

            
        </div>

    )
}
