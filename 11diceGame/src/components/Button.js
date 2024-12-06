import styled from "styled-components"

export const Button  = styled.button`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: black;
  border-radius: 5px;
  width: 220px;
  height: 44px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s;
    background: ease-in;
  }

  padding: 10px 10px;
  border: none;
  gap: 10px;
  justify-content: center;
  align-items: center;



`;

export const OutlineButton  = styled.button`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  width: 220px;
  height: 44px;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
    transition: 0.3s;
    background: ease-in;
  }

  padding: 10px 10px;
  border: none;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;