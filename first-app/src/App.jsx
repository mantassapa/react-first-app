import './App.css';
import styles from "./styles/style.module.css"
import classname from "classnames"
import A from './components/firstTask/A';
import B from './components/firstTask/B';
import C from './components/firstTask/C';
import AA from './components/firstTask/AA';
import { useState } from 'react';
import Change from './components/secondTask/Change';
import ChangeRandom from './components/secondTask/2.2/ChangeRandom';
import PliusMinus from './components/secondTask/2.3/PliusMinus';
// import AddSq from './components/secondTask/2.4/addSq';
import D from './components/secondTask/2.5/D';

function App() {
  //AA
  const [letterA, setLetterA] = useState("")
  const [letterC, setLetterC] = useState("")
  const handleClick =()=>{
    // setLetterA("A")
    // setLetterC("C")
    // if(letterA==="A"){
    //   setLetterA("C")
    // }
    // if(letterC==="C"){
    //   setLetterC("A")
    // }
    setLetterA((prev) =>(prev=== "" ? "A" : prev === "A" ? "C" :"A"))
    setLetterC((prev) =>(prev=== "" ? "C" : prev === "C" ? "A" :"C"))
  }
  //AA-end
  
  //A-B-C
  const [sqArr, setSqArr] = useState([])
  const [sqCou, setSqCou] = useState(0)

  const hanleGen = ()=>{
    setSqArr((prev) =>[...prev, sqArr.lenght -1+1])
  }

  const hanleCou = ()=>{
    setSqCou((prev)=>prev+1)
  }
  //A-B-C-end

  return (
    <div>
      {/* <B handleGen={hanleGen} handleCou={hanleCou} sqlenght={sqArr.length}/>
      <A sqArr={sqArr} number={sqCou}/>
      <C number={sqCou} letterC={letterC}/>
      <AA letterA={letterA} handleClick={handleClick}/> */}
      <Change/>
      <ChangeRandom/>
      <PliusMinus/>
      {/* <AddSq/> */}
      <D/>
    </div>
  );
}
// new
export default App;
