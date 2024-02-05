import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='Card'>
        {/* <h1 className='fontlink'>Card</h1> */}
        <p id = 'CardDesc'>{props.desc}</p>
        <img className= "cardimg" src={props.image}/>
        <img id='dissapimage' src={props.image2}/>
        
        
    </div>
  )
}

export default Card