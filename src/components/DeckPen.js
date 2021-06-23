import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 0 0 10px;
`

export default function DeckPen(props) {
    const {calcDeckPen} = props

     //calculate deck penetration

    
    return (
        <Container>
            {calcDeckPen()}
        </Container>
    )
}


// function () => {
//     let totalCards = shoeSize * 52
//     let remainingCards = totalCards - usedCards
//     let remaingingDecks = remainingCards/52

//     return remaingingDecks
// }