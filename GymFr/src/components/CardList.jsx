import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <div className='longcards'>
        <Card image ="src\assets\treadicon.png" image2= "src\assets\treadrange.png" desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dui quam, vel malesuada nisl mattis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis malesuada tellus."></Card>
        <Card image ="src\assets\communitycon.png" image2= "src\assets\comrange.png" desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dui quam, vel malesuada nisl mattis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis malesuada tellus."></Card>
        <Card image ="src\assets\dumbicon.png" image2= "src\assets\dumbrange.png" desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dui quam, vel malesuada nisl mattis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis malesuada tellus." ></Card>
        <Card image ="src\assets\Hearcticon.png" image2="src\assets\heartrange.png" desc= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor dui quam, vel malesuada nisl mattis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis malesuada tellus."></Card>

    </div>
  )
}

export default CardList