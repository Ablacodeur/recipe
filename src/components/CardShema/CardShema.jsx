import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

export default function CardShema({name, thumb,onClick}) {
  return (
    <Card sx={{ 
        borderRadius:'12px',
        backgroundColor:'#394150',
        color:"#E5E7EB",
        width:{xs:'100%'},
        minWidth:"220px",
      }}
    
    >
      <CardActionArea onClick={onClick} >
      <Box sx={{ 
        padding:'10px',
       }}>
        <CardMedia
          component="img"
          height="180"
          image={thumb}
          alt="green iguana"
          sx={{ 
            objectFit:'cover',
            borderRadius:'10px',
           }}
          
        />
        <CardContent sx={{ 
            padding:'8px  1px  0px 2px ',
            height:"2vh"
         }}>
          <Typography  variant="p" 
           component="div"
           sx={{ 
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",

            }}
           >
            {name}
          </Typography>
        </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}