import React from "react";

const App = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div id="app">
            <button
                id="ctrl-btn"
                onClick={() => {
                    setCounter(counter - 1);
                }}
            >
                -
            </button>

            <h1>{counter}</h1>

            <button
                id="ctrl-btn"
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default App;
