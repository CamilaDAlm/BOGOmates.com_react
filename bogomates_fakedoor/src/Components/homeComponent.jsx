import '../style.scss';

import React from "react";
import { PromoComponent } from './promoComponent';
import { Box, Typography } from '@mui/material';
import {Grid} from '@mui/material';
import Container from '@mui/material/Container';
import ReactGA from 'react-ga';
import {initGA,PageView } from './gaEventsComponent';
import { BOGOIcon } from './navbarComponent';
import { useTranslation } from "react-i18next";
import { Button } from '@mui/material';

//export class HomeComponent extends React.Component{
export function HomeComponent(){
  const { t } = useTranslation();
  /*constructor(props) {
    super(props);
   
   
}*/

  /*componentDidMount() {
    initGA("G-GV1R7BSN88");
    PageView();
  }*/

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


   return(

            <>

        <div className="w3-container" id="promos">
        <div className="w3-content" style={{maxWidth:"2700px"}}>
            
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide basic-color">
              {t('DEALS')}</span></h5>
           
            
            <div class="w3-row-padding" >
            
            {<PromoComponent></PromoComponent>}
            
            </div>
        </div>
        </div>

        <div className="w3-container" id="discover" style={{paddingBottom:"32px"}}>
        <div className="w3-content" style={{maxWidth:"700px"}}>
        
            <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide basic-color">
            {t('DISCOVER')}</span></h5>
           
            <p className={'w3-center'} style={{fontSize:"20px"}}>
             <strong> {t('discover_heading')} </strong> <br/>
              {t('discover_texto')}
               <strong className="title">BOGO match</strong>!
            
            </p>   
            <img alt='map' src='map.png' class="w3-image" style={{width:"100%"}}></img>
            
        </div>
        </div>
            
        <div className="w3-container" id="register" style={{paddingBottom:"32px"}}>
      <div className="w3-content" style={{maxWidth:"700px"}}>
        <h5 className="w3-center w3-padding-48"><span class="w3-tag w3-wide basic-color" >
          {t('REGISTER')}</span></h5>
        <p>{t('register_texto')} <strong className="title">{t('bogo')} </strong> !</p>
        <img alt='enjoy' src="https://www.health.com/thmb/Ashx_20pTxtNnx0uON479EuBq2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp523069cbzfi300_Medium_5020968-5b3cdb54a05245a1bf927a3429b9c365.jpg" class="w3-image" style={{width:"100%"}}/>
        <span class="w3-tag basic-color">{t('REGISTER NOW')}!</span> 
        <div  >
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t('Name')} required name="Name"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder={t('Age')} required name="age"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t('Email')} required name="email"/></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder={t('Location')} required name="location"/></p>
          <Button
              className="header"
                role={undefined}
              variant="contained"
              size="large"
              tabIndex={-1}
              href="#register">
                {t('SIGN UP')}
              </Button>  
          <p> * {t('registro_aviso')}  </p>
        </div>
      </div>
    </div>    
    <div className="w3-container" id="about" style={{paddingBottom:"32px"}}>
        <div className="w3-content" style={{maxWidth:"700px"}}>
            <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide basic-color">
              {t('ABOUT US')}</span></h5>
             {/*  <Box className='basic-color'
                height={40}
                width={200}
                marginLeft={30} 
                display={'flex'}
               >
           <BOGOIcon sx={  { display: { xs:'block', height: 'inherit',width:'inherit'} }} /> 
           </Box>*/}
            <p className={'w3-center'} style={{fontSize:"20px"}}>
             <strong> {t('about_us_header')} 
              <strong className="title"> 2x1 (buy-one get-one)  </strong> {t('deal_lovers')}! </strong> 
             
             {t('about_us_text')}
             
              <br/>
               <strong className="title" style={{fontSize:'22px'}}>{t('about_us_50')}! </strong>
            
            </p>               
        </div>
        </div>
            
            </>


   )






}