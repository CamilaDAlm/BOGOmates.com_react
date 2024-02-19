
import '../style.scss';
import React from "react";
import { Button } from "@mui/material";
import { carousel } from './carousel';
export class HeadingComponent extends React.Component{

    constructor(props) {
        super(props);
        this.myIndex = 0;
        
      }

  /*<div className="w3-display-middle w3-center title-top">
        <span className="title w3-text" style={{fontSize:"50px"}} >Find BOGO deals today!</span>
    
        <div className="w3-display-bottom w3-center">
          <a href="#promos" className="w3-button w3-large header"> See the newest promos</a>
        </div>
    </div>
 */


render(){
       return(

        <>

    {/*heading */}  
    <div className="w3-top ">
      <div className="w3-row w3-padding basic-color" >
      <img className="svg" alt="icon" src='bogo_logo.svg' style={{width:"4%"}} ></img>
       <a href="#home" className="header w3-bar-item  w3-button" style={{fontSize:"20px"}}>BOGOmates.com</a>
       
       
        <div className="w3-col s3 w3-right">
          <a href="#register" className="w3-button w3-block header">REGISTER</a>
        </div> 

        <div className="w3-col s3 w3-right ">
          <a href="#discover" className="w3-button w3-block header">DISCOVER</a>
        </div>

        <div className="w3-col s3 w3-right ">
          <a href="#promos" className="w3-button w3-block header">DEALS</a>
        </div>
        
      </div>
    </div>
    {/*image background */}  
   
 <header className=" w3-display-container "  id="home" >
 
   {/*   
    <img alt='background' width="30%" style={{position:"300px 300px"}} className="w3-image" src="./blogo.jpeg" ></img>
   <header className=" bgimg " ></header>
   
   <div className="w3-display-middle w3-top w3-center title-top">  
      <span className="title-top w3-text" style={{fontSize:"40px",color:'white'}} >Do you want to enjoy some 2x1 deals ?</span>
      <br/>
      <span className="title-top w3-text" style={{fontSize:"40px",color:'white'}} >but...</span>     
      <br/>
      <span className="title-top w3-text" style={{fontSize:"40px",color:'white'}} >are you missing your promo mate?</span>        
      <br/>
      <Button
      className="header"
      
      variant="contained"
      href="#promos"
     
      >
         Find your BOGO MATCH today!
        
       </Button>

      </div>
   
   
   
   
   */} 

    <header className=" bgimg " ></header>
      
      
      <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag basic-color" >Follow us!</span>
      </div>
      <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="title">Since february 2024</span>
      </div>
    </header>
   
    
   </>
    );
    }

}