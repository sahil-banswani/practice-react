import React from "react";
import styled from "styled-components";

function NumberSelector({ selectedNumber, setselectedNumber, error, setError }) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberEventHandler = (value) => {
    setselectedNumber(value)
    setError("")
  }

  // console.log(selectedNumber);
  return (
    <NumberSlectorConatiner>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => {
          return (
            <Box
              key={i}
              isSelected={value === selectedNumber}
              onClick={() => NumberEventHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSlectorConatiner>
    // <Box>1</Box>
  );
}

export default NumberSelector;

const NumberSlectorConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  .error {
    color: red;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  font-size: 24px;
  font-weight: 700;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: ${(props) =>
    props.isSelected ? "1px solid white" : "1px solid black"};
`;
