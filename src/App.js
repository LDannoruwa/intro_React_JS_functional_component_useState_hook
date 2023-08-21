import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //Import useState Hook

//functional component always starts with a capital letter (naming convention)
function App() { //functional component that returns a React element (JSX)
  return (
    <>
      <HelloWorld/>
      <Welcome/>
      <DemoUseStateHook/>
    </>
  );
}

function HelloWorld(){ //functional component that returns a React element (JSX)
  return(
    <h1>hello world!</h1>
  );
}

function Welcome(){ //functional component that returns a React element (JSX)
  return(
    <h1>Welcome to react Js</h1>
  );
}

function DemoUseStateHook(){
  const [name, setName] = useState("") //Initialize useState | const [currentState, updatedSate] =  useState("setInitialState")

  return(
    <>
    {/* A JSX comment */}

    <h1>My name is : {name}</h1> {/* {read_state} */}
    <button type='button' onClick={()=> setName("Lakshitha")}>Change Name</button> {/* Update State */}
    </>
  );
}

export default App;
