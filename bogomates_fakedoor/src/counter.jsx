//import { useState } from 'react';
import { useContext } from 'react';
import {Context} from './Context/context';
import "./clickCount.json";
import {updateJson} from "./Components/updateJson.jsx";
//import {WriteJson} from "./Components/writejsonHelper.js";

export default function Counter() {
  //const [count, setCount] = useState(props.value);

  const clickContext = useContext(Context);

  function handleClick(e) {
    //setCount(count + 1);
    clickContext.setCountClick();
    //WriteJson(clickContext.count);
    updateJson(clickContext.count);
    
  }

  

  return (
    <button onClick={e=>handleClick(e)}>
      You pressed me {clickContext.count} times
    </button>
  );
}
