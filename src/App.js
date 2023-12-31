import Form from "./components/form";
import Game from "./components/game";
import { useSelector } from "react-redux";

function App() {
  const isPlaying = useSelector((state) => state.trivia.isPlaying)
  return (
    <div className="w-full h-screen">
      {isPlaying ? <Game /> : <Form />}
    </div>
  );
}

export default App;
