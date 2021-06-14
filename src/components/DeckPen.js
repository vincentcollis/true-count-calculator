import React from 'react'

export default function DeckPen(props) {
    const {calcDeckPen} = props

     //calculate deck penetration

    
    return (
        <div>
            {calcDeckPen()}
        </div>
    )
}


// function () => {
//     let totalCards = shoeSize * 52
//     let remainingCards = totalCards - usedCards
//     let remaingingDecks = remainingCards/52

//     return remaingingDecks
// }