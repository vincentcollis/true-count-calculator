import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 0 0 10px;
`

export default function BetSize(props) {

    const {unit, calcTrueCount, betSize, setBetSize} = props
     
    console.log(calcTrueCount())
    console.log(unit)
    
    
    let calcBetSize = () =>{
        if (calcTrueCount() > 2) {
            return unit * 1
        }
    } 
    setBetSize()

    console.log(`bet size ${betSize()}}`)

    return (
        <Container>
            {betSize}
        </Container>
    )
}
