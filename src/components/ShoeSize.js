import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 0 0 10px;
`

function ShoeSize(props) {
    const {setShoeSize} = props

    const getShoeSize = (event) =>{
        // console.log(event.target.value)
        let value = event.target.value
        setShoeSize(value)
    }

    return (
        <Container>
            <select onChange={getShoeSize}>
                <option value={1}>{1}</option>
                <option value={2}>{2}</option>
                <option value={3}>{3}</option>
                <option value={4}>{4}</option>
                <option value={5}>{5}</option>
                <option value={6}>{6}</option>
                <option value={7}>{7}</option>
                <option value={8}>{8}</option>
            </select>
        </Container>
        
    )
}

export default ShoeSize;