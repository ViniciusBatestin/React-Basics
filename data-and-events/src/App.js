import Child from "./Child"
import './App.css';
import InputComponent from "./InputComponent";

function App() {
  const date = new Date()
  return (
    <div className="App">
     <Child message={date.toLocaleTimeString()}/>
     <InputComponent />
    </div>
  );
}

export default App;
