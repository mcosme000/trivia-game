import Form from "./components/form";
import Game from "./components/game";

function App() {
  return (
    <div className="p-5 w-full h-screen bg-indigo-200">
      <h1 className="font-bold text-xl text-center">Welcome to Trivia Game</h1>
      <Form />
      <Game />
    </div>
  );
}

export default App;
