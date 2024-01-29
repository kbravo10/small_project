import React, { useState } from "react";

function App() {
  const [total, setTotal] = useState([])

  function handleSubmit(event){
    event.preventDefault();
    const interestForm= Object.fromEntries(new FormData(event.target).entries());
    
    setTotal(parseFloat(interestForm.amount) + parseFloat(interestForm.amount*(interestForm.rate/100)))
  }

  return (
    <div>
      <h1>Project Client</h1>
      <form onSubmit={handleSubmit}>
        <label>Please enter the amount owed: </label>
        <input type="text" name="amount"></input>
        <br></br>
        <label>Please enter the interest rate: </label>
        <input type="text" name="rate"></input>
        <br></br>
        <button type="submit">Amount due:</button>
      </form>
      <p>{total}</p>
    </div>
    )
}

export default App;
