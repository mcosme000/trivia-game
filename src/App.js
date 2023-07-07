import Form from "./components/form";
import Game from "./components/game";
import TriviaContext from "./context/trivia";
import { useContext } from "react";

function App() {
  const { isPlaying } = useContext(TriviaContext)
  return (
    <div className="w-full h-screen p-4">
      {isPlaying ? <Game /> : <Form />}
    </div>
  );
}

export default App;
