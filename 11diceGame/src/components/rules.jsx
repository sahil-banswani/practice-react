import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RuleContaier>
        <h2>How to play dice game</h2>
        <div className='text'>
            <p>Select any number</p>
            <p>Click on the dice image</p>
            <p>after click on dice if selected number is equal to dice nuber yu have choice then you will get the sam points as dice{" "}</p>
            <p>If you get the wrong then 2 points will be deducted </p>
        </div>
    </RuleContaier>
  )
}

export default Rules

const RuleContaier = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    hw {
        font-size: 24px;
    }

    .text{
        margin-top: 24px;
    }
`