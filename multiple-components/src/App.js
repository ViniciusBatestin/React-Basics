import "./App.css"
import Card from './component/Card.js'

function App() {
  return (
    <div className="">
      <h1>Task: Add three Card Elements</h1>
      <Card
        h2="First card's h2"
        h3="First cards's h3"
      />
      <Card
        h2="Second card's h2"
        h3="Second card's h3"
      />
      <Card
        h2="Third card's h2"
        h3="Third card's h3"
        />
    </div>
  );
};

export default App;
