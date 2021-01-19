import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import LoanName from "./Components/LoanName";
import AmountBorrowed from "./Components/AmountBorrowed";
import DisbursementDate from "./Components/DisbursementDate";
import InterestRate from "./Components/InterestRate";
import FutureDate from "./Components/FutureDate";

function App() {

  return (
    <main>
      <h1>MintyShark 🦈🔮</h1>
      <LoanName />
      <AmountBorrowed />
      <DisbursementDate />
      <InterestRate />
      <FutureDate />
    </main>
  );
}

export default App;
