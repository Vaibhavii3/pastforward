import React, { useState } from "react";
import TimeTravelForm from "./components/TimeTravelForm";
import ResultDisplay from "./components/ResultDisplay";
import axios from "axios";
import './style/app.css';

function App() {

  const [result, setResult] = useState(null);

  const handleDateSubmit = async (date) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/time-travel?date=$(date)`);
      setResult(response.date);
    } catch (error) {
      console.error('error fetching data:', error);
      setResult({ date, fact: 'Something went wrong. Please try again'});
    }
  };

  return (
    <div style={{ textAlign:'center', padding: '20px'}}>
          <TimeTravelForm  onSubmit={handleDateSubmit} />
          <ResultDisplay result={result} />
    </div>
  );
}

export default App;
