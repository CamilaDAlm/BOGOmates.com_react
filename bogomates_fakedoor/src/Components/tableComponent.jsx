import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { CardHeader } from '@mui/material';
import { Button } from '@mui/material';
import { HandleClickGAEvents } from './gaEventsComponent';

function createData(user, availability,location,comments ) {
  return { user, availability,location,comments };
}

const rows = [
  createData({prof_img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=1200x ',
  name:'Peter Parker'}, '11pm-12am', 'New York','Thats great!'),
  createData({prof_img:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
  ,name:'Tom Jones'}, 'all day', 'New York','Where is that promo from?'),
];

export  function BasicTable() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Availability</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
               <CardHeader
                avatar={
                    <Avatar alt={row.user.name}  src={row.user.prof_img}  sx={{ width: 24, height: 24 }}  />
                }
                title={row.user.name}
                />
                             
              </TableCell>
              <TableCell align="right">{row.availability}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
              <TableCell align="right">
              <Button
              className="header"
              component="label"
                role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={()=>{
                HandleClickGAEvents('deals','click-match')}}
                >
                Match!
              </Button>   

              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}