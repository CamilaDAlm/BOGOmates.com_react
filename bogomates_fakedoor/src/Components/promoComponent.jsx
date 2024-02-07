import React from "react";
import './promo.scss';

export class PromoComponent extends React.Component{
    /*constructor(props) {
        super(props);
      
        
       //there is a this.context
      }*/

 imageGallery(){
    let promosURL=[    
       {'url': 'https://learnopoly.com/wp-content/uploads/2022/11/image3-4.jpg', 'link':'https://learnopoly.com/masterclass-buy-one-get-one-free-offer/'},
        {'url':'https://s7d1.scene7.com/is/image/mcdonalds/ALMA_Hero_ROD_August_Desktop_1260x560:hero-desktop?resmode=sharp2'
        ,'link': 'https://www.mcdonalds.com/us/es-us/bogo-1.html'},
        {'url':'https://github.com/CamilaDAlm/BOGOmates.com_react/blob/main/bogomates_fakedoor/src/Images/promo_spa.png?raw=true'
        ,'link':'https://www.marinasenses.com/promociones/Cup%C3%B3n%202x1/'
        },
        
        ]   

 return(  promosURL.map((image)=>(
    <div className='responsive'>
    <div className="gallery">
        <a target="_blank" href={image.link} width="600" height="400">
        <img src={image.url} alt="promo"/>
        </a>
        <div className="desc">Click for more info</div>
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