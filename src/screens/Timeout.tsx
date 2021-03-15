import React, { useState, useEffect } from "react";

export const Timeout = () => {
    const [count] = useState(0);

    useEffect(() => {
        /*TODO implement something to increment the count every second*/
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                onClick={() => {
                    /*TODO*/
                }}
            >
                Reset
            </button>
        </div>
    );
}
