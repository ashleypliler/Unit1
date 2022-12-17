import "./App.css";
import Square from "./Square";

function App() {

  const prop = 'hi there!'

  return (
    <div className="App">
      <Square propVar={prop}></Square>
    </div>
  );
}

export default App;
