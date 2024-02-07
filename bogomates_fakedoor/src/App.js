import logo from './logo.svg';
import './App.css';
import './style.scss';
import { carousel } from './Components/carousel';
function App() {

  function countClick(){
    console.log("click")
  }

  return (
    <div>hello
    {carousel()}
    </div>
  );
}

export default App;
