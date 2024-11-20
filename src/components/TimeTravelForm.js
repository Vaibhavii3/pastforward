import React, { useState } from 'react';

const TimeTravelForm = ({ onSubmit }) => {
    const [date, setDate ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(date);
    };

    return (
        <div>
            <h1> Doraemon's Time Machine </h1>
            <form onSubmit={handleSubmit}>
                <input type='date'
                        value={date}
                        onChange={(e) => setDate(e.value)} required />
                <button type='submit'>Travel</button>        
            </form>
        </div>
    );
};

export default TimeTravelForm;