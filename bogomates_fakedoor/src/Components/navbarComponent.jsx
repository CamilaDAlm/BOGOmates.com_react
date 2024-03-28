import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid';

import { ReactComponent as BogoSvg } from '../logo.svg';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from '@mui/material';

const pages = [{page:'Deals',id:'promos'},
{page:'Discover',id:'discover'},{page:'Register',id:'register'},{page:'About us',id:'about'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




export function  BOGOIcon(props) {
    //inheritViewBox
    return (
      <SvgIcon component={BogoSvg} viewBox="0 0 212 36" {...props} />
    );
  }
  

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl" className='basic-color'>
        <Toolbar disableGutters>

         {/*   ICON + TEXT EXAMPLE
         
         <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> 
             
 <img href="#home" className="svg" alt="icon" src='logo.svg' style={{width: '15%'}} ></img>
          */}


      {/* ICONO DEL PC */}   
          <BOGOIcon sx={{ display: { xs: 'none', md: 'flex', height: 'inherit',width:'64mm' }, mr: 1 }}  />


        {/* MENU DEL MÓVIL ( ICONO RAYITAS + NAVMENU) */}  
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                
                <MenuItem key={page.page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" sx={{ minWidth: 100 }}>
                  <Link color='black' href={"#"+page.id} underline='none'>{page.page}</Link>
                  </Typography>
                 
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          {/* 
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
            */}

         {/* ICONO DEL MÓVIL */}   
    <BOGOIcon sx={  { display: {  xs: 'flex', md: 'none', height: 'inherit',width:'64mm'}, mr: 4 }}  />
        
          {/* MENU DEL PC */}  
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'space-around' } }}>
            
            {pages.map((page) => (
                
              <Button
                key={page.page}
                onClick={handleCloseNavMenu}
                href={'#'+page.id}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.page}
              </Button>
            ))}
          </Box>
         
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;