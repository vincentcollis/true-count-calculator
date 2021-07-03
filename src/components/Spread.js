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

export default function Spread() {

    // save bet spread
    let oneToEight = {name: "1-8", value:1}
    let oneToTen = {name: "1-10", value:2}
    let oneToTwelve = {name: "1-12", value:3}

    // save all cards to on object array
    let betSpread = [oneToEight,oneToTen,oneToTwelve]

    return (
        <div>
              {
                betSpread.map((obj, i) => 
                    <SpreadButton key={i} data-value={obj.value} onClick={updateHandlerClick} onKeyPress={handleKeyPress}> 
                        {obj.name} 
                    </SpreadButton>
                )
            }
        </div>
    )
}
