import { useState } from "react";
import './App.css'; 

function App() {
  let [num, setNum] = useState(0);

  function addCounter() {
    setNum(num + 1);
  }
  function MinCounter() {
    setNum(num - 1);
    if(num <= 0){
      setNum(num)
    }
  }

  return (
    <>
      <h1>Count {num}</h1>
      <button onClick={addCounter}>+ Plus Counter </button>
      <button onClick={MinCounter}>- Minus Counter </button>
    </>
  );
}

export default App;
