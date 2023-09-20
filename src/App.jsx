import { useState } from "react";
import Button from "./Components/button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // const counterFunc = (para) => {
  //   para === "-"
  //     ? counter <= 0
  //       ? 0
  //       : setCounter((value) => value - 1)
  //     : setCounter((value) => value + 1);
  // };
  const addCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const decCounter = () => {
    setCounter((prev) => (prev <= 0 ? 0 : prev - 1));
  };
  return (
    <>
      <h1 className="text-9xl ">Chai With React</h1>
      <hr className="mb-6" />
      <h2 className=" text-5xl mb-6">
        Counter{" "}
        <span className=" text-white bg-green-300  rounded-xl p-3">APP</span>
      </h2>

      <p className="text-4xl">
        Value : <span className="font-mono">{counter}</span>
      </p>
      {/* 
      <Button event={() => counterFunc("+")}>+</Button>
      <Button event={() => counterFunc("-")}>-</Button> */}

      <Button event={() => addCounter()}>+</Button>
      <Button event={() => decCounter()}>-</Button>
    </>
  );
}
// function CounterButton({ event, children }) {
//   return (
//     <button onClick={event} style={btnStyle}>
//       {children}
//     </button>
//   );
// }
export default App;
