import React from 'react'
import heroImage from "../../assets/images/hero-imagehc.jpg"
import s from "./style.module.css"
import { Box, Container} from '@mui/system'
import heroText from "../../assets/images/hero-text.svg"
export default function Hero() {
  return (
    <Box sx={{ 
      paddingTop:'10px'
     }}>
    <Box 
      className={s.container}
        sx={{ 
            backgroundImage:`url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontFamily: 'Outfit, sans-serif',
            width:" 98%",
            display:"flex",
            direction:"row",
            color:'black.main',
            alignItems:'center',
            justifyContent: "start",
            marginLeft:'1vw',
            marginRight:'1vw',
            borderRadius:"18px",
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
    </Box>
  )
}
