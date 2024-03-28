import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';

import Avatar from '@mui/material/Avatar';
import { CardHeader, Typography } from '@mui/material';
import { Button } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { HandleClickGAEvents } from './gaEventsComponent';
export function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);


 

 const UsersList =[
    { user:{prof_img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=1200x ',
    name:'Peter Parker'}, availability: '11pm-12am', location: 'New York', comments:'Thats great!'},
    {user:{prof_img:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
  ,name:'Tom Jones'}, availability:'all day',location: 'New York', comments:'Where is that promo from?'},
  {user:{prof_img:"https://live.staticflickr.com/2923/14088901681_0db7fdb597_b.jpg"
  ,name:'Nicole Coleman'}, availability:'all day',location: 'Detroit', comments:'Cool!'},

 ]    


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    subheader={
        <ListItemText 
        component="div" 
        id="nested-list-subheader"
        primary="See who's looking for a promo mate !"
        primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
          />
        }
        >
      {UsersList.map((user,value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
            <> 
          <ListItem
            key={value}
            secondaryAction={
                <Button
              className="header"
              component="label"
                role={undefined}
              variant="contained"
              size="small"
              tabIndex={-1}
              onClick={()=>{
                HandleClickGAEvents('deals','click-match')}}
                >
                Match!
              </Button>  
              /*<Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
            />*/

            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
              <CardHeader
              avatar={
                <Avatar
                  alt={`Avatar ${user.user.name }`}
                  src={`${user.user.prof_img }`}
                  sx={{ width: 24, height: 24 }} 
                  />
                }
                title={user.user.name}
                subheader={                
                <Stack direction="column" alignItems="center" gap={1}>
                <Stack direction="row" alignItems="center" gap={1}>
                <LocationOnIcon fontSize="small"/>
                <Typography variant="body2"> { user.location} </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" gap={1}>
                <CalendarMonthIcon fontSize="small"/>
                <Typography variant="body2">{ user.availability} </Typography>
                </Stack>
                </Stack>    
                 
                }
               />
              </ListItemAvatar>
              {/*<ListItemText id={labelId} primary={` ${user.availability}`} />*/}
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" /></>
        );
      })}
      
    </List>
  );
}