import React, {useState} from "react";
import './App.css';
import LoanForm from "./Components/LoanForm";

function App() {
  const [ name, setName] = useState("")



  return (
    <main>
      <header>MintyShark 🦈🔮</header>
      <LoanForm />
    </main>
  );
}

export default App;
