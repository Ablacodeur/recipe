import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import heroImage from "../../assets/images/hero-imagehc.jpg"

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardShema({name, thumb}) {
  return (
    <Card sx={{ 
      width: 300 ,

    
    }}>
      <CardActionArea sx={{ 

       }}>
        <CardMedia
          component="img"
          height="140"
          image={thumb}
          alt="green iguana"
          sx={{ 
            objectFit:'cover',
            width:'300px',

           }}
          
        />
        <CardContent sx={{ 
            padding:'15px  1px  15px 2px ',
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
      </CardActionArea>
    </Card>
  );
}