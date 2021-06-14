import React from 'react'
import styled from 'styled-components'


function RunningCount(props) {
    let {runningCount} = props
    
    return (
        <div>
            {runningCount}
        </div>
    )
}

export default RunningCount;