import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/images/logo-light.svg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { dark } from '@mui/material/styles/createPalette';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const  navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static" sx={{ 
        flexGrow: 1,  
        backgroundColor:'transparent'
    }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo}></img>
          </IconButton>
          <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button  
          onClick={()=>navigate('/')}
          style={{ color:'white', borderRadius:'50px',padding:'0px,30px,0px,30px' }}>
            <ArrowBackIosIcon/> Back to category
          </Button>        
      </Toolbar>
      </AppBar>
    </Box>
  );
}