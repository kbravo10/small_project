import React, { useState } from "react";

function App() {
  const [total, setTotal] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const interestForm = Object.fromEntries(
      new FormData(event.target).entries()
    );
    var rateDec = interestForm.rate/100
    var compoundInterest = interestForm.amount * Math.pow((1 + rateDec/ 12), (12 * interestForm.years))
    setTotal(compoundInterest)
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
        <label>Please enter the duartion of the payments:</label>
        <input type="text" name="years" placeholder="years"></input>
        <br></br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <button type="submit">Amount due:</button>
      </form>
      <p>Total owed after duration compunded monthly for x amounbt of years</p>
      <p>{total}</p>
    </div>
  );
}

export default App;
