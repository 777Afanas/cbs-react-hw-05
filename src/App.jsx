import { useRef, useState } from "react";
import "./App.css";
import ClickTracker from "./ClickTraker";
import FunctComponent from "./FunctComponent";
import Posts from "./Posts";

function App() {
  const user = {
    name: 'Jhon',
    age: 27,
  };

  const [values, setValues] = useState([]);
  const inpName = useRef();
  const inpSurname = useRef();
  const inpEmail  = useRef();

  const onHandelClick = () => {
    setValues([
      ...values,
      {
        n: inpName.current.value,
        s: inpSurname.current.value, 
        e: inpEmail.current.value, 
      },
    ]);
  };
  
  return (         
    <div className="container">       
      
        <p><label>Name:</label>
          <input ref={inpName} type="text" /></p>
        <p><label>Surname:</label>
          <input ref={inpSurname} type="text" /></p>
        <p><label>Email:</label>
          <input ref={inpEmail} type="text" /></p> 
        <button onClick={onHandelClick}>Push</button>          
        <ul>
          {values.map((value, index) => (
            <li key={index}>
              <p>{value.n}</p>
              <p>{value.s}</p>
              <p>{value.e}</p>               
            </li>
          ))}
        </ul> 
      <ClickTracker />
      <FunctComponent {...user} />
      <Posts/>
    </div>     
  
  );
}

export default App;
