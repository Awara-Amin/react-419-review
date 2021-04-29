import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function App() {
  // var isDone = true;

  // const strikeThrough = { textDecoration: "line-through" };
  // return <p>Buy Milk </p>;
  // return <p style={{textDecoration: "line-through"}}>Buy Milk </p>;
  // return <p style={isDone ? strikeThrough : null}>Buy Milk </p>;
  return (
  <div>
    <p>Buy Milk </p>
    <button onClick={strike}> Change to strike through</button>
  </div>
  );
}

export default App;
