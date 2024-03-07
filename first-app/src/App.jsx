import './App.css';
import styles from "./styles/style.module.css"
import classname from "classnames"

function App() {
  let number
  return (
    <div //style={{color:number===0?"red":"blue"}} 
    className={classname(styles.newStyle, styles.newStyle1, "myClass")}>
      {/* <p>Labas</p> */}
      <p>Labas du</p>
    </div>
  );
}
// new
export default App;
