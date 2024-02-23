import React from "react";
import './promo.scss';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {BasicTable} from './tableComponent';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ImageList from '@mui/material/ImageList';
import { Button, ImageListItem } from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';


export class PromoComponent extends React.Component{
    constructor(props) {
        super(props);
        this.count=1;
        this.panel='panel';
      this.state={
        expanded:this.panel.concat(this.count.toString())
      }
    
       //there is a this.context
      }

   /*
   
    promosURL.map((image)=>(
 
   <div className="w3-col m6 w3-margin-bottom ">
    <div class="w3-container  w3-round w3-margin basic-color-body"><br/>
    <ImageListItem> 
    <img src={image.url} alt="promo" style={{width:"100%"}} class="w3-margin-bottom"/>
    </ImageListItem>
    
     <Accordion>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1d-content" 
       id="panel1d-header"
       
     >
     <Typography className="title-accordion">Hit match and find your <strong className="title-accordion">BOGO mate</strong> !</Typography>
     </AccordionSummary>
     <AccordionDetails>
     <Typography style={{fontSize:'12px'}}> 
       See if your availabilities work together and hit <strong className="title"> MATCH! </strong>
     </Typography>
     {BasicTable()}        
     <br/>
     <Button
     className="header"
     component="label"
       role={undefined}
     variant="contained"
     tabIndex={-1}
     startIcon={<EditNoteIcon/>}
       >
       Join the list!
         </Button>

     </AccordionDetails>
   </Accordion>


 </div>

 </div>
)) )   
   */   

/*
list_posts.map((post,i)=>{
    if(i===0){
     return( 
     <>
      {post}
      {list_posts[i+1]}
       <div className="clearfix"></div>
      </>)
    }else if(i < list_posts.length - 2){
      console.log(i)
       return( 
        <>
           {list_posts[i+1]}
           {list_posts[i+2]}
            <div className="clearfix"></div>
        </>)
    }
})

*/


 imageGallery(){
    let promosURL=[    
       {url: 'https://learnopoly.com/wp-content/uploads/2022/11/image3-4.jpg', link:'https://learnopoly.com/masterclass-buy-one-get-one-free-offer/'
        ,title:'2x1 masterclass with celebrities'},
        {url:"../Images/mcdonalds_2x1.jpeg"
        ,link: 'https://www.mcdonalds.com/us/es-us/bogo-1.html', title:'bogo deal McDonalds'},
        {url:'https://github.com/CamilaDAlm/BOGOmates.com_react/blob/main/bogomates_fakedoor/src/Images/promo_spa.png?raw=true'
        ,link:'https://www.marinasenses.com/promociones/Cup%C3%B3n%202x1/',title:'Great spa promo'},
        {url:"https://www.golfbogo.com/cdn/shop/products/RiverbendWEBJPG_4b2a3f38-d094-4799-942d-c1c22c05847f_1080x.jpg?v=1700633349"
        , link:'', title:'2x1 golf deal'},
        {url:'https://images.squarespace-cdn.com/content/v1/547e39eee4b004945e334543/1637857691351-IXC1JUN9TOSEY3BPYWED/Float+Tank+2.jpg?format=1000w',
         link:'', title:'BOGO Sale! (2x) 90 min Salt Water Floatation'}        
        ]   

     let posts=[
        {name:'Tim Jones', availability:"Mondays from 8pm-10pm",location:"New York",
        user_img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
         ,promo_img:"" ,text_post:"Hello, I'm looking for someone to share this promo! Is anyone interested?",
         post_info:[{likes:12,comments:5}],         
         comments:[{
          name:'Tim Jones', availability:"Mondays from 8pm-10pm",location:"New York",
        user_img:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
         ,text_comment:"Thats cool! Do you want to meet next monday?",

         }]  
        }

     ]   

        // <div className="desc">Click for more info</div>
        // <div class="w3-col m4 w3-margin-bottom">
  
        const AccordionSummary = styled((props) => (
          <MuiAccordionSummary
            expandIcon={<ExpandMoreIcon   sx={{ fontSize: '0.9rem' }} />}
            {...props}
          />
        ))(({ theme }) => ({
          backgroundColor: 
            theme.palette.mode = '#C095F9',
           
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
          },
          '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
          },
        }));      


  const handleChange = (panel) => (event, newExpanded) => {
  
    this.setState({expanded:newExpanded ? panel : false})
  };

  
 return( 
  
  <ImageList sx={{ width: 500, height: 450 }}>
  {promosURL.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.url}?w=248&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.title}
        position="below"
      />
    </ImageListItem>
  ))}
</ImageList>
  
    
 )
}


render(){

 // let list_posts = this.imageGallery();


return(
  <>
  {this.imageGallery()}
  </>
  
)

}

}