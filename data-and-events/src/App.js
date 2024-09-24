import Child from "./Child"
import './App.css';

function App() {
  const date = new Date()
  return (
    <div className="App">
     <Child message={date.toLocaleTimeString()}/>
    </div>
  );
}

export default App;
