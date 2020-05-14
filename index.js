import React from "react"
import ReactDOM from "react-dom"

class HelloWorld extends React.component{
    render(){
        return (<div><h2>Hello, in React!!</h2></div>);
    }
};

ReactDOM.render(<HelloWorld />,document.getElementById("root"));