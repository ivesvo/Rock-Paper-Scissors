import React from 'react'

export default function Boxes(props) {
    console.log("Props:", props);
    return (

        
        <div className={`box ${props.winner ? 'winner' : 'loser'}`}>
            {props.name} {props.color} 
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title}/>
            <h3>{props.winner ? 'Won' : 'Lose'}</h3>

            
        </div>

    )
}
