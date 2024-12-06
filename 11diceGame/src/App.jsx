import Gameplay from "./components/Gameplay";
import Startgame from "./components/Startgame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Gameplay /> : <Startgame toggle={toogleGamePlay} />}</>
  );
}

export default App;
