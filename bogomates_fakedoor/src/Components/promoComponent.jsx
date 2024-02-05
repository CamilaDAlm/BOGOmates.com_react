import React from "react";
import './promo.scss';

export class PromoComponent extends React.Component{
    /*constructor(props) {
        super(props);
      
        
       //there is a this.context
      }*/

 imageGallery(){
    let promosURL=[    
        'https://learnopoly.com/wp-content/uploads/2022/11/image3-4.jpg',
        'https://s7d1.scene7.com/is/image/mcdonalds/ALMA_Hero_ROD_August_Desktop_1260x560:hero-desktop?resmode=sharp2',
        '../promo_spa.png',
        
        ]   

 return(  promosURL.map((image)=>(
    <div className='responsive'>
    <div className="gallery">
        <a target="_blank" href="img.png" width="600" height="400">
        <img src={image} alt="promo"/>
        </a>
        <div className="desc">Add a description of the image here</div>
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