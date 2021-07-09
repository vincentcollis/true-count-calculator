import React, { useState } from 'react';

import Cards from '../components/Cards.js'
import RunningCount from '../components/RunningCount';
import ShoeSize from '../components/ShoeSize';
import DeckPen from '../components/DeckPen';
import Unit from '../components/Unit'
import BetSize from '../components/BetSize.js';
import Spread from '../components/Spread.js';

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
 const [shoeSize, setShoeSize] = useState(1)
 const [usedCards, setUsedCards] = useState(0)
 const [unit, setUnit] = useState(10)
//  const [betSize, setBetSize] = useState(0)
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

   let num = runningCount / calcDeckPen()
   
   return Math.round(num * 100) / 100
 }

  function calcBetSize(truecount, bet){
    if (truecount < 2) return bet*1
    if (truecount >= 2 && truecount < 3) return bet*2
    if (truecount >= 3 && truecount < 4) return bet*4
    if (truecount >= 4) return bet*8
    
    return 0
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
        <Spread></Spread>
      </InfoContainer>
      <InfoContainer>
        <div>
          Bet Size:
        </div>
        <Container>
        {calcBetSize(calcTrueCount(),unit)}
        </Container>
        {/* <BetSize unit={unit} calcTrueCount={calcTrueCount} setBetSize={setBetSize} betSize={betSize}/> */}
      </InfoContainer>
    </div>
   </>
  )
}

export default IndexPage
