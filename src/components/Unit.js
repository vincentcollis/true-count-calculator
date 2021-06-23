import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 0 0 10px;
`

export default function Unit(props) {
    const [setUnit] = props
    return (
        <Container>
            <select onChange={setUnit}>
                <option value={10}>{10}</option>
                <option value={15}>{15}</option>
                <option value={20}>{20}</option>
                <option value={25}>{25}</option>
                <option value={30}>{30}</option>
            </select>
        </Container>
    )
}
