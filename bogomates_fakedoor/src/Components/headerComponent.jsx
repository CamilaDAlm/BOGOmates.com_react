
import React from "react";
import { Context } from '../Context/context';
import { updateJson } from "./updateJson";
export class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {  page:0
        };
       //there is a this.context
      }

    handleClickPage =(tag)=>{
        this.context.setPageTag(tag)
        this.context.setCountClick();
        updateJson(this.context.count);
       // this.setState({page:tag})
    };
    render(){         
        let header = <div className='top'>
        
        <h3 className='heading-style'>BOGOmates.com</h3>             
        <button className='button-style' onClick={()=>this.handleClickPage(1)}>Menu</button>
        <button className='button-style' onClick={()=>this.handleClickPage(2)}>Promos</button>
        <button className='button-style'onClick={()=>this.handleClickPage(3)}>Register</button>
        </div>
        
         return(header)
        
    
    }

   
}
HeaderComponent.contextType = Context;