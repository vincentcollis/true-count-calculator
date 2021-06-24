import React, { useState } from 'react';
import styled from 'styled-components'


const CardButton = styled.button`
    background-color: green;
    margin: 5px;
`
const CardInputBox = styled.input`
    border: black solid;
    width: 25px;
`


function Cards(props) {

    //display key pressed 
    const [numPressed, setnumPressed] = useState("")

    // destructing props
    let {setRunningCount, runningCount, setUsedCards, usedCards} = props

    // save card count values
    let one = {name: "6-2", value:1}

    let zero = {name: "9,8,7", value:0}

    let minusOne = {name: "Ace-10", value:-1}

    // save all cards to on object array
    let card = [minusOne,zero,one]

    // Update running count
    const  updateHandlerClick = function(e){
        // console.log(event.target.dataset.value)
        
        let value = parseInt(e.target.dataset.value)
        let newValue = runningCount + value
        
        setRunningCount(newValue)
        setUsedCards(usedCards+1)
        
    }

    const handleKeyPress = (e) => {
        let key = e.key

        function update(value){
            let newValue = runningCount + value
            
            setRunningCount(newValue)
            setUsedCards(usedCards+1)
        }

        switch (key) {
            case "1":
                // console.log("3")
                setnumPressed(-1)
                update(-1)
                break
            case "2":
                // console.log("2")
                setnumPressed(0)
                update(0)
                break
            case "3":
                // console.log("1")
                setnumPressed(1)
                update(1)
                break
            default:
                break;
        }
    }


    return (
        
        <>
             {
                card.map((obj, i) => 
                    <CardButton key={i} data-value={obj.value} onClick={updateHandlerClick} onKeyPress={handleKeyPress}> 
                        {obj.name} 
                    </CardButton>
                )
            }
        
            <CardInputBox value={numPressed} onKeyPress={handleKeyPress}></CardInputBox>

       
        </>
    )
}

export default (Cards);
