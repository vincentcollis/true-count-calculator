import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 0 0 10px;
`

function RunningCount(props) {
    let {runningCount} = props
    
    return (
        <Container>
            {runningCount}
        </Container>
    )
}

export default RunningCount;