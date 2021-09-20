import React from "react";

function Hello() {
    const sayHello = () => {
        console.log("hello");
    };
    return (
        <div>
            <h1>hello</h1>
            <button onClick={sayHello}>Hello</button>
        </div>
    );
}
export default Hello;
