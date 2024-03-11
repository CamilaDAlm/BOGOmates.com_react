
import '../style.scss';
import React from "react";

import { carousel } from './carousel';
import { Icon, SvgIcon } from '@mui/material';
import { HandleClickGAEvents } from './gaEventsComponent';
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

    /*   
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
    
   style={{width:"100%",minHeight:"350px",maxHeight:"600px"}}
  
   <header className=" bgimg " ></header>
   */ 

render(){
       return(

        <>

    {/*heading   <a  className="header w3-bar-item  w3-button" style={{fontSize:"20px"}}>BOGOmates.com</a> */}  
    <div className="w3-top ">
      <div className="w3-row  basic-color" >
      <img href="#home" className="svg" alt="icon" src='logo.svg' style={{width: '20%'}} ></img>
      
       
        <div className="w3-col s3 w3-right w3-hide-small">
          <a href="#register" className="w3-button w3-block header" onClick={()=>{
          HandleClickGAEvents('register','click-register')
            }}>REGISTER</a>
        </div> 

        <div className="w3-col s3 w3-right w3-hide-small ">
          <a href="#discover" className="w3-button w3-block header" onClick={()=>{
               HandleClickGAEvents('discover','click-discover')
            }}>DISCOVER</a>
        </div>

        <div className="w3-col s3 w3-right w3-hide-small">
          <a href="#promos" className="w3-button w3-block header" onClick={()=>{
               HandleClickGAEvents('deals','click-deals')}}>DEALS</a>
        </div>
    
      </div>
    </div>
    {/*image background */}  

   
 <header className=" w3-display-container w3-content w3-wide" style={{maxWidth:"1600px",minWidth:"500px"}} id="home" >
 
   
<img class="w3-image" src="banner4.png" alt="banner" width="1600px" height="500px" />

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