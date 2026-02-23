import React, { useState } from 'react';

export default function UiFaq({ data }) {
    // Destructure the data prop
    const { question, answer } = data;

    // Set up the state for toggling the visibility of the answer
    const [active, setActive] = useState(false);

    // Function to toggle the 'active' state
    const toggleActive = () => setActive((prevState) => !prevState);

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl mb-2">Q: {question}</h2>

                {/* Button to toggle answer visibility */}
                <button
                    onClick={toggleActive} // Add the click handler
                    className="bg-blue-500 px-4 rounded-full font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
                    {active ? 'Close' : 'Show'}
                    
                </button>
            </div>

            {/* Conditionally render the answer */}
            {active && <p>{answer}</p>}
        </div>
    );
}








