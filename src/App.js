import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Cards from './components/Cards.js'
import RunningCount from './components/RunningCount';
import ShoeSize from './components/ShoeSize';
import DeckPen from './components/DeckPen';

function App() {

  // state
  const [runningCount, setrunningCount] = useState(0)
  const [trueCount, setTrueCount] = useState(0)
  const [shoeSize, setShoeSize] = useState(1)
  const [usedCards, setUsedCards] = useState(0)
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
    
    <div className="App">
      <div>
        Shoe Size:
      </div>
      <ShoeSize setShoeSize = {setShoeSize}/>
      <div>
        Cards
      </div>
      <Cards usedCards={usedCards} setUsedCards = {setUsedCards} setRunningCount = {setrunningCount} runningCount = {runningCount}/>
      <div>
        Running Count:
      </div>
      <RunningCount  runningCount = {runningCount}/>
      <div>
        Decks Remaining
      </div>
      <div>
      {/* <DeckPen shoeSize = {shoeSize} deckPen = {deckPen} usedCards={usedCards} setdeckPen = {setdeckPen} /> */}
      <DeckPen calcDeckPen = {calcDeckPen} />
      </div>
      <div>
        True Count
      </div>
      <div>
        {calcTrueCount()}
      </div>
        
    </div>
  );
}

export default App;
