import React from 'react'
import styled from 'styled-components'

const SpreadButton = styled.button`
    background-color: green;
    margin: 5px;
`
const CardInputBox = styled.input`
    border: black solid;
    width: 25px;
`

export default function Spread(props) {

    const {setBetSpread} = props

    // save bet spread
    let oneToEight = {name: "1-8", value:1}
    let oneToTen = {name: "1-10", value:2}
    let oneToTwelve = {name: "1-12", value:3}

    // save all cards to on object array
    let betSpread = [oneToEight,oneToTen,oneToTwelve]

    let clickHandler = (event) => {
        console.log(event.target.dataset)
        // setBetSpread[event.target.dataset]
    }

    return (
        <div>
              {
                betSpread.map((obj, i) => 
                    <SpreadButton key={i} data-value={obj.value} onClick={clickHandler}> 
                        {obj.name} 
                    </SpreadButton>
                )
            }
        </div>
    )
}
