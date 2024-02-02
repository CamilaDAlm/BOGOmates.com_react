import React from "react";
import Counter from "./counter";
import "./clickCount.json";
export class Bogoapp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { click:[],
          init:true,
          inputs:"",
          view : <div class='view'>
          <div class='view-inter'>
            
          </div>
        </div>
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
  
          this.setState({
            click:json[0].click
          });
        })
    }



  render(){

    return(

    <div>
    <h2>PAGINA DE EJEMPLO</h2>
    <p>holaaaa</p>
    <Counter></Counter>
   </div>
   )

  };

}