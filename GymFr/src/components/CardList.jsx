import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <div className='longcards'>
        <Card image ="src\assets\treadicon.png" image2= "src\assets\treadrange.png"></Card>
        <Card image ="src\assets\communitycon.png" image2= "src\assets\comrange.png"></Card>
        <Card image ="src\assets\dumbicon.png" image2= "src\assets\dumbrange.png"></Card>
        <Card image ="src\assets\Hearcticon.png" image2="src\assets\heartrange.png"></Card>

    </div>
  )
}

export default CardList