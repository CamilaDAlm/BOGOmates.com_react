import React from "react";
import Counter from "./counter";
import { Context } from "./Context/context";
import { HeaderComponent } from "./Components/headerComponent";
import { updateJson } from "./Components/updateJson";
import { PromoComponent } from "./Components/promoComponent";
import { webPrueba } from "./webprueba";
//import "./bogo.scss";
import { HeadingComponent } from "./Components/headingComponent";
import { HomeComponent } from "./Components/homeComponent";
//import "./clickCount.json";
import { initGA,PageView } from "./Components/gaEventsComponent";
import TagManager from 'react-gtm-module'
import ResponsiveAppBar from "./Components/navbarComponent";
import TopHeaderComponent, { ButtonBaseDemo } from "./Components/topHeaderComponent";
//import { HandleClickGAEvents } from './Components/gaEventsComponent';
import { useTranslation } from "react-i18next";
import './i18n';

const tagManagerArgs = {
    gtmId: 'GTM-KKG4KS8N',
    dataLayer: {
        userId: '001',
        userProject: 'project'
    }
}
 
TagManager.initialize(tagManagerArgs)

let countries = [
  {
    code: "es",
    name: "Español",
    country_code: "es",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

export class Bogoapp extends React.Component {
  static contextType = Context;
    constructor(props) {
        super(props);
        this.state = { click:0,
          init:true
        };
    }

    LanguageSelector = () => {
    
      const { t, i18n } = useTranslation();
    
      return (
    
    <div>
     <h1>{t("Deals")}</h1>
      {countries.map( (lng)=>(
        <button onClick={() => i18n.changeLanguage(lng.code)}>{lng.name}</button>
      )
    
      )}
    
    </div>
    
      )
    
    }
  

    componentDidMount(){
        initGA("G-GV1R7BSN88");
        PageView();
        fetch('./clickCount.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        ).then((res) => res.json())
        .then((json) => {
  
          this.context.setInitCount(parseInt(json.click))
         
         
          /*this.setState({
            click:parseInt(json[0].click)
            
            
          });*/
        

        })
    }


    handleClickPage =(tag)=>{
      this.context.setPageTag(tag)
      this.context.setCountClick();
      updateJson(this.context.count);
     // this.setState({page:tag})
  };

  render(){
    let info=null

    if (this.context.page === 2){
      info=<div className="body-menu-style"> 
      <h2>Promos</h2>
      <PromoComponent/>
      </div>
      }else if (this.context.page === 3){
       info=<div> <h2>Register</h2>
      
       <Counter ></Counter>
       </div>
       }else {
       info = 
       <>
     
     <TopHeaderComponent/>
    
       <HomeComponent/>
       <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5 className="w3-center title">BOGOmates.com - 2024</h5>
        </footer>

        <footer className="w3-container w3-theme-d5">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>  
        </footer>
       </>
       //webPrueba();
        /*<div className="body-menu-style"> <h2>Welcome to BOGOmates.com</h2>
       <h3>Do you want to enjoy some 2x1 promos ? </h3>
       <h3>but...</h3>
       <h3>are missing your promo mate? </h3>       
        
        <button className='button-menu-style' onClick={()=>this.handleClickPage(2)}>Discover BOGOmates.com</button>
        </div> */
       }
// <Counter ></Counter>
    return(
      <>  
        {info}
   </>
   )

  };

}
