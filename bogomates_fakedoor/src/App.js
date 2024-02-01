import logo from './logo.svg';
import './App.css';


function App() {

  function countClick(){
    console.log("click")
  }

  return (
   <div>
    <h2>PAGINA DE EJEMPLO</h2>
    <p>holaaaa</p>
    <button onClick={countClick()}>Clica aqui</button>

   </div>);
}

export default App;
