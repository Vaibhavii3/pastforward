import React from "react";
const ResultDisplay = ({ result }) => {
    return (
        <div> {result ? (
                <div>
                    <h2> Time Travel Result </h2>
                    <p><strong>Date:</strong> {result.date}</p>    
                    <p><strong>Fact:</strong> {result.Fact}</p>   
                </div> 
        ) : (
            <p> Please enter a date to see the result. </p>
        )}    
        </div>
    );
};


export default ResultDisplay;