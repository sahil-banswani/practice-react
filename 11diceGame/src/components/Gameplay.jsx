import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "./Button";
import Rules from "./rules";

function Gameplay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(); // 'setSelectedNumber' here
  const [currentDice, setCurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber !== undefined && selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined); // Reset to 1 or another default number after dice roll
  };

  const resetScore = () => setScore(0);

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setselectedNumber={setSelectedNumber}
          error={error} // Pass 'setSelectedNumber' to the child
          setError={seterror}
        />
      </div>
      <div>
        <RollDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {" "}
            {showRules ? "Hide Rules" : "Show Rules"}
          </Button>
        </div>
        {showRules && <Rules />}
      </div>
    </MainContainer>
  );
}

export default Gameplay;

const MainContainer = styled.div`
  .top-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 70px;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 220px;
    gap: 24px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
