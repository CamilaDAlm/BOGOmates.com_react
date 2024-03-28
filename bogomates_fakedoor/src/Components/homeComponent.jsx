import '../style.scss';

import React from "react";
import { PromoComponent } from './promoComponent';
import { Box, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import Container from '@mui/material/Container';
import ReactGA from 'react-ga';
import { HandleClickGAEvents,sendOutbound,initGA,PageView,Event } from './gaEventsComponent';
import { BOGOIcon } from './navbarComponent';
export class HomeComponent extends React.Component{

  componentDidMount() {
    initGA("G-GV1R7BSN88");
    PageView();
  }

/*

  <Container maxWidth="sm" className="w3-container" id="promos">
          <Box
              height={200}
              width={200}
              my={4}
              display="flex"
              alignItems="center"
              gap={4}
              p={2}
              sx={{ border: '2px solid grey' }}
            >
             <Typography variant="h5" className='w3-wide basic-color' gutterBottom>
        DEALS
      </Typography>

          <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item>
            {<PromoComponent></PromoComponent>}
            </Grid>
          </Grid>
            </Box>
        </Container>



*/



render(){

   return(

            <>

        <div className="w3-container" id="promos">
        <div className="w3-content" style={{maxWidth:"2700px"}}>
            
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide basic-color">
              DEALS</span></h5>
           
            
            <div class="w3-row-padding" >
            
            {<PromoComponent></PromoComponent>}
            
            </div>
        </div>
        </div>

        <div className="w3-container" id="discover" style={{paddingBottom:"32px"}}>
        <div className="w3-content" style={{maxWidth:"700px"}}>
            <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide basic-color">
              DISCOVER</span></h5>
            <p className={'w3-center'} style={{fontSize:"20px"}}>
             <strong> Find lots of deals near your city! </strong> <br/>
              Filter the available deals by city 
              so that you don't miss any great deals near you!   
              Join BOGOmates and meet your closest <strong className="title">BOGO match</strong>!
            
            </p>   
            <img alt='map' src='map.png' class="w3-image" style={{width:"100%"}}></img>
            
        </div>
        </div>
            
        <div className="w3-container" id="register" style={{paddingBottom:"32px"}}>
      <div className="w3-content" style={{maxWidth:"700px"}}>
        <h5 className="w3-center w3-padding-48"><span class="w3-tag w3-wide basic-color" >
          REGISTER</span></h5>
        <p>Join users next to you and enjoy <strong className="title">buy-one get-one free </strong> deals!</p>
        <img alt='enjoy' src="https://www.health.com/thmb/Ashx_20pTxtNnx0uON479EuBq2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp523069cbzfi300_Medium_5020968-5b3cdb54a05245a1bf927a3429b9c365.jpg" class="w3-image" style={{width:"100%"}}/>
        <span class="w3-tag basic-color">REGISTER NOW!</span> 
        <div  >
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="age" required name="age"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="email" required name="email"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="location" required name="location"/></p>
          <p><button className="w3-button header" onClick={()=> 
       Event("PRODUCT", "Product added to cart", "PRODUCT_PAGE")
   } >SIGN UP</button></p>
          
        </div>
      </div>
    </div>    
    <div className="w3-container" id="about" style={{paddingBottom:"32px"}}>
        <div className="w3-content" style={{maxWidth:"700px"}}>
            <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide basic-color">
              ABOUT US</span></h5>
              <Box className='basic-color'
                height={40}
                width={200}
                marginLeft={30} 
               >
           <BOGOIcon sx={  { display: { xs:'block', height: 'inherit',width:'inherit'} }} /> 
           </Box>
            <p className={'w3-center'} style={{fontSize:"20px"}}>
             <strong> is the social media for the <strong className="title">2x1 deal </strong> lovers! </strong> <br/>
              Thanks to our innovative matching system we help people connect with users
              that desire to enjoy the same deal and we simplify it by dividing the cost 
              between them, letting them 
              <br/>
               <strong className="title" style={{fontSize:'22px'}}>save up to 50% in each purchase!</strong>
            
            </p>               
        </div>
        </div>
            
            </>


   )


}



}