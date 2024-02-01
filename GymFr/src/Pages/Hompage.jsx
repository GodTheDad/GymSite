import React from 'react'
import Navigation from '../components/Navigation'
import CardList from '../components/CardList'
import "./Hompage.css"
import ClassCard from '../components/ClassCard'
const Hompage = () => {
  return (
    <>
      <section >
        <Navigation/>
        
      </section>
      <section id="cardSection">
        <div className='divodiv'>
          <div className='coolText'>
            <h3>WHY CHOOSE US?</h3>
            <h1 className='coolh1'>PUSH FORWARD, DESTROY YOUR LIMITS</h1>
          </div>
        </div>
        <CardList/>
      </section>
      <section id="Offers" >
          <div className='coolText'>
            <h3>What We Offer</h3>
            <h1 className='coolh1'>All the programs you need</h1>
          </div>
          <div>
            <ClassCard image="" Name = '' desc = ""></ClassCard>
          </div>
      </section>
    </>
  )
}

export default Hompage