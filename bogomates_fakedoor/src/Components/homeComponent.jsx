import '../style.scss';

import React from "react";
import { PromoComponent } from './promoComponent';

export class HomeComponent extends React.Component{




render(){

   return(

            <>
        <div className=" w3-large">
        <div className="w3-container" id="home">
        <div className="w3-content" style={{maxWidth:"2700px"}}>
            <h5 className="w3-center w3-padding-64">
              <span className="w3-tag w3-wide basic-color" >WELCOME</span>
              </h5>
            <p>Do you want to enjoy some 2x1 promos ? </p>
            <p>but...</p>
            <p>are you missing your promo mate? </p>     
            
           
        </div>
        </div>
        </div>

        <div className="w3-container" id="promos">
        <div className="w3-content" style={{maxWidth:"2700px"}}>
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide basic-color">
              PROMOS</span></h5>
            <p>Find great <strong>BOGO deals </strong> + people to enjoy it and save money with!</p>   
            <p>Hit match and find your <strong>BOGO mate</strong> !</p>   
            <div class="w3-row-padding" >
            
            {<PromoComponent></PromoComponent>}
            </div>
        </div>
        </div>
            
        <div className="w3-container" id="register" style={{paddingBottom:"32px"}}>
      <div className="w3-content" style={{maxWidth:"700px"}}>
        <h5 className="w3-center w3-padding-48"><span class="w3-tag w3-wide basic-color" >
          REGISTER</span></h5>
        <p>Join users next to you and enjoy <strong>buy-one get-one </strong> promos!</p>
        <img src="https://www.health.com/thmb/Ashx_20pTxtNnx0uON479EuBq2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp523069cbzfi300_Medium_5020968-5b3cdb54a05245a1bf927a3429b9c365.jpg" class="w3-image" style={{width:"100%"}}/>
        <span class="w3-tag basic-color">REGISTER NOW!</span> 
        <form action="/action_page.php" target="_blank">
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="age" required name="age"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="email" required name="email"/></p>
          <p><button className="w3-button header" type="submit">SIGN UP</button></p>
        </form>
      </div>
    </div>    
            
            
            </>


   )


}



}