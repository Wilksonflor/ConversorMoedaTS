import React from "react";
import ConerterForm from "./components/ConerterForm";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Conversor de moedas</h1>
      <ConerterForm />
    </div>
  );
};

export default App;
