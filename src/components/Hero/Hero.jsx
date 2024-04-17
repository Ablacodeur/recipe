import React from 'react'
import heroImage from "../../assets/images/hero-imagehc.jpg"
import s from "./style.module.css"
import { Box, Container, display, width } from '@mui/system'
import heroText from "../../assets/images/hero-text.svg"
export default function Hero() {
  return (
    <Box 
      className={s.container}
        sx={{ 
            backgroundImage:`url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontFamily: 'Outfit, sans-serif',
            width:" 100%",
            display:"flex",
            direction:"row",
            color:'black.main',
            alignItems:'center',
            justifyContent: "start",
            height: {xs: '40vh',sm: '40', md:'50vh', lg:'60vh'},
            
         }}
    >
    <Container sx={{ 
      display:"flex", 
      justifyContent:"flex-end",
      }}>
    <img src={heroText} alt='text' ></img>
    </Container>
    </Box>
  )
}
