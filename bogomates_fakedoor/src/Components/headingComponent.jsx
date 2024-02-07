
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
      <div className="w3-row w3-padding header">
        <div className="w3-col s3">
          <a href="#home" className="header w3-button w3-block ">HOME</a>
        </div>
        <div className="w3-col s3">
          <a href="#where" className="w3-button w3-block header">WHERE</a>
        </div>
        <div className="w3-col s3">
          <a href="#menu" className="w3-button w3-block header">PROMOS</a>
        </div>
        <div className="w3-col s3">
          <a href="#about" className="w3-button w3-block header">ABOUT</a>
        </div>
        
      </div>
    </div>
    {/*image background */}  
 <header className="bgimg w3-display-container" id="home" style={{'height':'457.882px'}}>
      <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag">Open from 6am to 5pm</span>
      </div>
      <div className="w3-display-middle w3-center">
        <span className="title w3-text " style={{fontSize:'90px'}}>BOGOmates<br/>.com</span>
      </div>
      <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="w3-text-white">15 Adr street, 5015</span>
      </div>
    </header>
   
    
   </>
    );
    }

}