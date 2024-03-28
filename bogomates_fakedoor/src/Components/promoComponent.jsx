import React from "react";
import './promo.scss';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import { CardHeader, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {BasicTable} from './tableComponent';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ImageList from '@mui/material/ImageList';
import { Button, CardContent, Collapse, ImageListItem } from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import {Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import { CheckboxListSecondary } from "./listComponent";
export class PromoComponent extends React.Component{
    constructor(props) {
        super(props);
        this.count=0;
        
      this.state={
        expanded:"0",//this.panel.concat(this.count.toString())
      }


      this.promosURL=[    
        {url: 'https://learnopoly.com/wp-content/uploads/2022/11/image3-4.jpg', link:'https://learnopoly.com/masterclass-buy-one-get-one-free-offer/'
         ,title:'2x1 masterclass with celebrities', id:"0", user:" Kim Apple", user_avatar:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg" 
        ,user_availability:"afternoon", location:"New York"},
         
        {url:"https://github.com/CamilaDAlm/BOGOmates.com_react/blob/main/bogomates_fakedoor/src/Images/mcdonalds_2x1.jpeg?raw=true"
         ,link: 'https://www.mcdonalds.com/us/es-us/bogo-1.html', title:'bogo deal McDonalds',id:"1", user:"Hugo Perez",
         user_avatar:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg", user_availability:"afternoon", location:"New York"},
         
         {url:'https://github.com/CamilaDAlm/BOGOmates.com_react/blob/main/bogomates_fakedoor/src/Images/promo_spa.png?raw=true'
         ,link:'https://www.marinasenses.com/promociones/Cup%C3%B3n%202x1/',title:'Great spa promo',id:"2", user:"Emily Pope",user_avatar:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg",
         user_availability:"afternoon", location:"New York"},
        
         {url:"https://www.golfbogo.com/cdn/shop/products/RiverbendWEBJPG_4b2a3f38-d094-4799-942d-c1c22c05847f_1080x.jpg?v=1700633349"
         , link:'', title:'2x1 golf deal',id:"3", user:" PromoLover_24", user_avatar:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg"
         ,user_availability:"afternoon", location:"New York"},
        
         {url:'https://images.squarespace-cdn.com/content/v1/547e39eee4b004945e334543/1637857691351-IXC1JUN9TOSEY3BPYWED/Float+Tank+2.jpg?format=1000w',
          link:'', title:'BOGO Sale! (2x) 90 min Salt Water Floatation',id:"4", user:"Grimes fan",user_avatar:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg",
          user_availability:"afternoon", location:"New York"} ,

          {url:'https://static.chollometro.com/threads/raw/MY7Jx/1260129_1/re/1024x1024/qt/60/1260129_1.jpg',
          link:'https://www.chollometro.com/ofertas/ribs-2x1-en-burgers-de-lunes-a-viernes-solo-en-restaurante-del-2003-al-2005-1260129', title:'2x1 Burgers ',id:"4", user:"Grimes fan",user_avatar:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg",
          user_availability:"afternoon", location:"New York"}        
         ]   
    
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


*/


ComplexGrid() {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    align:'center',
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container 
     direction="row"
     justifyContent="center"
     alignItems="center"
     spacing={{ xs: 3, md: 3 }} 
     columnSpacing={{ xs: 1, sm: 2, md: 3}} 
     columns={{ xs: 2, sm: 4, md: 6 }}>
  {this.promosURL.map( (image)=>(
    <Grid item xs={2} sm={4} md={2}>
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item >
          <ButtonBase sx={{ width: 250, height: 200 }} >
          <Img alt={image.title} src={image.url} />
          </ButtonBase>
          {/* INFO OF USER THAT POSTED PROMO */}
          <CardHeader
              avatar={
                <Avatar
                  alt={`Avatar ${image.user }`}
                  src={`${image.user_avatar }`}
                  sx={{ width: 24, height: 24 }} 
                  />
                }
                title={image.user}
                subheader={
                <Stack direction="row" alignItems="center" gap={1}>
                  <LocationOnIcon fontSize="small"/>
                  <Typography variant="body2">{ image.location +" - "} </Typography>
                 <CalendarMonthIcon fontSize="small"/>
                <Typography variant="body2">{ image.user_availability} </Typography>
              </Stack>
                 
                }
               />
                <Typography variant="body2" gutterBottom  component="div">
                   Hello! This promo looks amazing, does someone want to come with me?
                  </Typography>
        </Grid>
      
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs >
              {/* LIST OF INTERESTED USERS */}
             <CheckboxListSecondary/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
    ))}
    </Grid>
    </Box>
    );
}

RowAndColumnSpacing() {
  /*
   <Img alt={image.title} src={image.url}/>

  <ButtonBase sx={{ maxWidth: 512, maxHeight: 512 }}>
          <Img alt={image.title} src={image.url}/>
          </ButtonBase>*/ 
  const Img = styled('img')({
    maxWidth: '100%',
    height: '100%',
    padding: '0',
    margin: '0',
  });
    return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {this.promosURL.map( (image)=>(
          
     
          
          <Grid item xs={'auto'}>
          <ButtonBase sx={{ maxWidth: 512, maxHeight: 512 }}>
          <Img alt={image.title} src={image.url}/>
          </ButtonBase>

         
          <Typography style={{fontSize:'12px'}}> 
                See if your availabilities work together and hit <strong className="title"> MATCH! </strong>
          </Typography>

          <BasicTable NumRowsPage = {3} />
         </Grid>

        
      ))}
      </Grid>
      </Box>
    );
  }


handleChange = (panel) => (event, newExpanded) => {
  //let result =newExpanded ? panel : false;
  //console.log(result);
  this.setState({expanded:panel})
};

addCount(){
  this.count+=1;
  return(this.count);
}

handleExpandClick = () => {
  this.setState({expanded:!this.state.expanded})
 };


imageGalleryOld(){
  return(  this.promosURL.map((image)=>(
 
    <div className="w3-col m6 w3-margin-bottom ">
     <div class="w3-container  w3-round w3-margin"><br/>
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
}

 imageGallery(){
  

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

     const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
  
       
  
 return( 
  <Container maxWidth="sx">
 
  <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={400} gap={20} >
  {this.promosURL.map((item) => (
    <Container>
     
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.url}?w=496&h=496&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.url}?w=496&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.title}
        position="below"
      />
 
    </ImageListItem>
    <ImageListItem>
    <ExpandMore
            expanded={this.state.expanded.toString(this.state.expanded === item.id)}
            onClick={this.handleChange(item.id)}
            aria-expanded={this.state.expanded}
            aria-label="show more"
            id={this.addCount()}
          >
             <ExpandMoreIcon />
          </ExpandMore>
        <Collapse in={this.state.expanded === item.id}  >
      <CardContent>
      <Typography style={{fontSize:'12px'}}> 
       See if your availabilities work together and hit <strong className="title"> MATCH! </strong>
     </Typography>
      {BasicTable()} 
      </CardContent>
      </Collapse>
      </ImageListItem>
     
      </Container>
 
  ))}

</ImageList>  
</Container>
 )
}


imageGallery2(){

     const maxWidth=2100;
     const maxHeight=800 ;

     const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    //  <div className="w3-col m4 w3-margin-bottom ">
    //<div class="w3-container  w3-round w3-margin">  

    return(
      
    <div >  
      <ImageList sx={{ maxWidth:maxWidth, maxHeight: maxHeight }} cols={3} rowHeight={maxWidth/6}>
      {this.promosURL.map((item)=>(
        <div class="w3-container">
       <ImageListItem key={item.img}>
      <img
       srcSet={`${item.url}?w=164&fit=crop&auto=format&dpr=2 2x`}
       src={`${item.url}?w=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.title}
        position="below"
      />
       </ImageListItem>                 {/*sx={{width:350, height:150}}*/}
       <ImageListItem key={item.img} sx={{width:maxWidth/6, height:maxHeight/6}}>

       <ExpandMore
            expanded={this.state.expanded.toString(this.state.expanded === item.id)}
            onClick={this.handleChange(item.id)}
            aria-expanded={this.state.expanded}
            aria-label="show more"
            id={this.addCount()}
          >
             <ExpandMoreIcon />
          </ExpandMore>
        <Collapse in={this.state.expanded === item.id}  >
        <CardContent>
        <Typography style={{fontSize:'12px'}}> 
         See if your availabilities work together and hit <strong className="title"> MATCH! </strong>
       </Typography>
        {BasicTable()} 
        </CardContent>
        </Collapse>

       </ImageListItem>
        </div>
   ))  }
   </ImageList>

   </div>
     )

  
}


render(){

 // let list_posts = this.imageGallery();


return(
  <>
  {/*this.imageGallery2()*/}
  {this.ComplexGrid()}
  </>
  
)

}

}