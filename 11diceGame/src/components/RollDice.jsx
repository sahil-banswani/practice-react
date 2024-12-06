import React from "react";
import styled from "styled-components";

function RollDice({ currentDice, roleDice }) {

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/Images/dice/dice_${currentDice}.png`} // Make sure the path is correct
          alt="dice Image"
        />
      </div>
      <p>Click on this dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
