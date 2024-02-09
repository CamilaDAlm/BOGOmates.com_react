
import '../style.scss';
import React from "react";
import { carousel } from './carousel';
export class HeadingComponent extends React.Component{

    constructor(props) {
        super(props);
        this.myIndex = 0;
        //this.myRef = React.createRef(); 
      }
  
    onDocument() { 
        //this.myRef.document.getElementsByclassName ="mySlides"
      } 

  /*carousel() {
        var i;
        const document = this.myRef.current
        var x = document.getElementsByclassName("mySlides");
        for (i = 0; i < x.length; i++) {
            console.log(x[i]);
          //x[i].style.display = "none";  
        }
        this.myIndex++;
        if (this.myIndex > x.length) {this.myIndex = 1}    
        //x[this.myIndex-1].style.display = "block";  
        setTimeout(() => {
            console.log("this is the first message");
          }, 5000); 
      }    */


render(){


    return(

        <>

    {/*heading */}  
    <div className="w3-top ">
   
      <div className="w3-row w3-padding basic-color" >
        <div className="w3-col s3"  style={{position:"relative"}}>
            <a href="#home" className="header w3-button w3-block " style={{fontSize:"20px"}}>BOGOmates.com</a>
        </div>
        <div className="w3-col s3">
          <a href="#home" className="header w3-button w3-block ">HOME</a>
        </div>
        <div className="w3-col s3">
          <a href="#promos" className="w3-button w3-block header">PROMOS</a>
        </div>
        <div className="w3-col s3">
          <a href="#register" className="w3-button w3-block header">REGISTER</a>
        </div> 
      </div>
    </div>
    {/*image background */}  
   
 <header className=" w3-display-container" id="home" >
  {/*<img  className="bgimg w3-display-middle" src="https://github.com/CamilaDAlm/BOGOmates.com_react/blob/main/bogomates_fakedoor/src/Images/banner.png?raw=true" ></img>*/}
    <header className=" bgimg " ></header>
      <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag basic-color" >Follow us!</span>
      </div>
      <div className="w3-display-middle w3-center title-top">
        <span className="title w3-text" style={{fontSize:"50px"}} >Find BOGO deals today!</span>
    
        <div className="w3-display-bottom w3-center">
          <a href="#promos" className="w3-button w3-large header"> See the newest promos</a>
        </div>
    </div>
   
      <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="title">Since february 2024</span>
      </div>
    </header>
   
    
   </>
    );
    }

}