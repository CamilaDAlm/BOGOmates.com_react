import React from "react";
import './promo.scss';

export class PromoComponent extends React.Component{
    /*constructor(props) {
        super(props);
      
        
       //there is a this.context
      }*/

     /*
     
     <div className='responsive'>
    <div className="gallery">
        <a target="_blank" href={image.link} width="600" height="400">
       <img src={image.url} alt="promo" style={{width:"100%"}}  class="w3-margin-bottom"/>
       </a>
   </div>
   </div>
     
     
     */ 

 imageGallery(){
    let promosURL=[    
       {'url': 'https://learnopoly.com/wp-content/uploads/2022/11/image3-4.jpg', 'link':'https://learnopoly.com/masterclass-buy-one-get-one-free-offer/'},
        {'url':'https://s7d1.scene7.com/is/image/mcdonalds/ALMA_Hero_ROD_August_Desktop_1260x560:hero-desktop?resmode=sharp2'
        ,'link': 'https://www.mcdonalds.com/us/es-us/bogo-1.html'},
        {'url':'https://github.com/CamilaDAlm/BOGOmates.com_react/blob/main/bogomates_fakedoor/src/Images/promo_spa.png?raw=true'
        ,'link':'https://www.marinasenses.com/promociones/Cup%C3%B3n%202x1/'
        },
        
        ]   

        // <div className="desc">Click for more info</div>
 return(  promosURL.map((image)=>(
    <div class="w3-col m5 w3-margin-bottom">
    <div class="w3-container w3-card w3-white w3-round w3-margin"><br/>
      <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" 
      alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{width:"60px"}}></img>
    <h4>Tim Jones</h4><br/>
    <hr class="w3-clear"></hr>
    <img src={image.url} alt="promo" style={{width:"90%"}} class="w3-margin-bottom"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
   )) )

    

}
render(){
return(
        <div >
           { this.imageGallery()}
            <div className="clearfix"></div>
        </div>
)
}

}