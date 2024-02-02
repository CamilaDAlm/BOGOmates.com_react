
import React from "react";
import { Context } from '../Context/context';
export class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {  page:0
        };
       //there is a this.context
      }
    
    handleClickPage =(tag)=>{
        this.context.setPageTag(tag)
       // this.setState({page:tag})
    };
    render(){         
        let header = <div className='top'>
        
        <h3 className='heading-style'>Pedigree collection</h3>             
        <button className='button-style' onClick={()=>this.handleClickPage(1)}>Menu</button>
        <button className='button-style' onClick={()=>this.handleClickPage(2)}>Pedigree builder</button>
        <button className='button-style'onClick={()=>this.handleClickPage(3)}>Pedigree library</button>
        </div>
        
         return(header)
        
    
}

   
}
HeaderComponent.contextType = Context;