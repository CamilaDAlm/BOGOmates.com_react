import React from "react";
import Counter from "./counter";
import { Context } from "./Context/context";
import { HeaderComponent } from "./Components/headerComponent";
import { updateJson } from "./Components/updateJson";
import { PromoComponent } from "./Components/promoComponent";
import "./bogo.scss";
//import "./clickCount.json";
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
  
          this.context.setInitCount(parseInt(json.click))
         
         
          /*this.setState({
            click:parseInt(json[0].click)
            
            
          });*/
        

        })
    }


    handleClickPage =(tag)=>{
      this.context.setPageTag(tag)
      this.context.setCountClick();
      updateJson(this.context.count);
     // this.setState({page:tag})
  };

  render(){
    let info=null

    if (this.context.page === 2){
      info=<div className="body-menu-style"> 
      <h2>Promos</h2>
      <PromoComponent/>
      </div>
      }else if (this.context.page === 3){
       info=<div> <h2>Register</h2>
      
       <Counter ></Counter>
       </div>
       }else {
       info = 
        <div className="body-menu-style"> <h2>Welcome to BOGOmates.com</h2>
       <h3>Do you want to enjoy some 2x1 promos ? </h3>
       <h3>but...</h3>
       <h3>are missing your promo mate? </h3>       
        
        <button className='button-menu-style' onClick={()=>this.handleClickPage(2)}>Discover BOGOmates.com</button>
        </div> 
       }
// <Counter ></Counter>
    return(
      <div className='body-style'>  
    
    <HeaderComponent/>
        {info}
   </div>
   )

  };

}
