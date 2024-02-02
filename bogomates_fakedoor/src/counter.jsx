import { useState } from 'react';



export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    console.log(e)
    setCount(count + 1);
  }

  return (
    <button onClick={e=>handleClick(e)}>
      You pressed me {count} times
    </button>
  );
}
