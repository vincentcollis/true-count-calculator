import React, { useState } from 'react';

import Cards from '../components/Cards.js'
import RunningCount from '../components/RunningCount';
import ShoeSize from '../components/ShoeSize';
import DeckPen from '../components/DeckPen';
import Unit from '../components/Unit'

import styled from 'styled-components'

// styled componets
const InfoContainer = styled.div`
  display: flex;
`

const Container = styled.div`
    margin: 0 0 0 10px;
`

// markup
const IndexPage = () => {

  // state
 const [runningCount, setrunningCount] = useState(0)
 const [trueCount, setTrueCount] = useState(0)
 const [shoeSize, setShoeSize] = useState(1)
 const [usedCards, setUsedCards] = useState(0)
 const [unit, setUnit] = useState(0)
 //Must create deckPen state LAST
 // const [deckPen, setdeckPen] = useState(0)
 
 const calcDeckPen = () =>{
   if (usedCards == 0) return 0
 
   let totalCards = shoeSize * 52
   let remainingCards = totalCards - usedCards
   let remaingingDecks = remainingCards/52
   
   return Math.round(remaingingDecks * 100) / 100
 }

 const calcTrueCount = () =>{
   if(runningCount == 0) return 0
   let num
   num = runningCount / calcDeckPen()
   
   return Math.round(num * 100) / 100
 }

  return (
   <>
    <div className="App">
      <InfoContainer>
        <div>
          Shoe Size:
        </div>
        <ShoeSize setShoeSize = {setShoeSize}/>
      </InfoContainer>
      
      <InfoContainer>
        <div>Unit Size</div>
        <Unit setUnit = {setUnit}></Unit>

      </InfoContainer>
      <div>
        Select Cards
      </div>
      <Cards usedCards={usedCards} setUsedCards = {setUsedCards} setRunningCount = {setrunningCount} runningCount = {runningCount}/>
      <InfoContainer>
        <div>
          Running Count:
        </div>
        <RunningCount runningCount = {runningCount}/>
      </InfoContainer>
      <InfoContainer>
        <div>
          Decks Remaining:
        </div>
        <DeckPen calcDeckPen = {calcDeckPen} />  
      </InfoContainer>
      <InfoContainer>
        <div>
          True Count:
        </div>
        <Container>
          {calcTrueCount()}
        </Container>
      </InfoContainer>
      <InfoContainer>
        <div>
          Bet Size:
        </div>
        <div>
          
        </div>
      </InfoContainer>
    </div>
   </>
  )
}

export default IndexPage
