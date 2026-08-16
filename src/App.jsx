import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Input from "./components/Input";
import Result from "./components/result";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function handleInitialInvestmentValueChange(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualInvestmentValueChange(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleDurationValueChange(event) {
    setDuration(event.target.value);
  }

  function handleExpectedReturnValueChange(event) {
    setExpectedReturn(event.target.value);
  }

  return (
    <>
      {/* maybe this could be in index.js */}
      <header id="header">
        <img src={logo} alt="" />
        <h1>React Investment Calculator</h1>
      </header>
      <div id="user-input">
        <div className="input-group">
          <Input
            name="Initial investment"
            type="number"
            onChange={handleInitialInvestmentValueChange}
            value={initialInvestment}
          />
          <Input
            name="Annual investment"
            type="number"
            onChange={handleAnnualInvestmentValueChange}
            value={annualInvestment}
          />
        </div>
        <div className="input-group">
          <Input
            name="Duration"
            type="number"
            onChange={handleDurationValueChange}
            value={duration}
          />
          <Input
            name="Expected Return"
            type="number"
            onChange={handleExpectedReturnValueChange}
            value={expectedReturn}
          />
        </div>
      </div>
      {duration <= 0 ? (
        "Wrong duration"
      ) : (
        <Result
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          duration={duration}
          expectedReturn={expectedReturn}
          id="result"
        />
      )}
    </>
  );
}

export default App;
