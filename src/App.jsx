import Header from "./components/Header.jsx";
import InputGroup from "./components/InputGroup.jsx";
import InvestmentResult from "./components/InvestmentResult.jsx";
import { useState } from "react";

function App() {
  const [investmentForm, setInvestmentForm] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12
  });

  function handleInvestment(event) {
    setInvestmentForm((prevInvestmentForm) => {
      const updatedInvestmentForm = {...prevInvestmentForm};
      updatedInvestmentForm[event.target.id] = parseInt(event.target.value);
      return updatedInvestmentForm;
    });
    // Became stuck a little here whereby expecting investmentForm to now be the new updatedInvestmentForm object however upon console logging displays the original values. I found this 'bug' not to be an issue unless I required to reuse this new object within this same function ... to be reviewed in solution.
  }

  return (
    <>
      <Header />

      <div id="user-input" className="input-group">
        {/* Issue placing 'input-group' with provided flex styling; replaced with grid - to review use of flex in solution */}
        <InputGroup
          labelName="Initial Investment"
          id="initialInvestment"
          value={investmentForm.initialInvestment}
          onChangeInvestment={handleInvestment}
        />
        <InputGroup
          labelName="Annual Investment"
          id="annualInvestment"
          value={investmentForm.annualInvestment}
          onChangeInvestment={handleInvestment}
        />
        <InputGroup
          labelName="Expected Return"
          id="expectedReturn"
          value={investmentForm.expectedReturn}
          onChangeInvestment={handleInvestment}
        />
        <InputGroup
          labelName="Duration"
          id="duration"
          value={investmentForm.duration}
          onChangeInvestment={handleInvestment}
        />
      </div>
      { investmentForm.duration > 0
        ? <InvestmentResult investmentForm={investmentForm} />
        : <div className="center">Please enter the Duration in months</div>
      }
        
    </>
  );
}

export default App;
