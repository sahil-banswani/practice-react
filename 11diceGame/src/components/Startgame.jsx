import styled from "styled-components";
import { Button } from "./Button";

function Startgame({ toggle }) {
  return (
    <Conatiner>
      <div>
        <img src="/Images/dices1.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  max-width: 1180px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

export default Startgame;
