import Btn from './Btn';
import './App.css';
import ModeToogle from './ModeToogle.js';

function App() {
  function clickHandle() {
    let randomNum = Math.floor(Math.random() * 3) +1;
    console.log(randomNum)
    let userInput = prompt('type a number')
    alert(`computer number: ${randomNum}, Your Guess: ${userInput}`)
  }

  return (
    <>
      <Btn />
      <ModeToogle />
      <button onClick={clickHandle}>Guess the number between 1 and 3</button>
    </>
  )
}

export default App;
