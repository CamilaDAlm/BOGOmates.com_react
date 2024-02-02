import React from "react";
import Counter from "./counter";
import { Context } from "./Context/context";
import { HeaderComponent } from "./Components/headerComponent";
import "./bogo.css";

import "./clickCount.json";
export class Bogoapp extends React.Component {
  static contextType = Context;
    constructor(props) {
        super(props);
        this.state = { click:0,
          init:true
        };
    }

  
  

    componentDidMount(){
        fetch('./clickCount.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        ).then((res) => res.json())
        .then((json) => {
  
          this.context.setInitCount(parseInt(json[0].click))
         
         
          /*this.setState({
            click:parseInt(json[0].click)
            
            
          });*/
        

        })
    }


    
  

  render(){

    return(
      <div className='body-style'>  
    
    
    <h2>PAGINA DE EJEMPLO</h2>
    <p>holaaaa</p>
    <Counter ></Counter>
   </div>
   )

  };

}
