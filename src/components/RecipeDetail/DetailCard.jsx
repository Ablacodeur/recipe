import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, List, ListItem, ListItemText } from '@mui/material';
import s from "./style.module.css"

export default function DetailCard({MealImage,ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9,ingredient10,ingredient11,ingredient12,ingredient13,ingredient14,ingredient15
    ,title,category,area,instruction,video}) {
  return (
    <Card sx={{ 
        minWidth: 305 ,
        backgroundColor:'transparent',
        color:"white",
        borderRadius:'none',
        boxShadow:'none !important',
        marginTop:'30px',

    }}>
      <CardMedia
        sx={{ height: '50vh' ,borderRadius:'20px',  marginBottom:'20px', }}
        image={MealImage}
        title="green iguana"

      />
      <CardContent className={s.container}>
        <Typography variant="h4" style={{ marginBottom:'20px', fontFamily:"Playfair Display", fontWeight:"700"}}  component="h5">
          {title}
        </Typography>
        <Chip label={category} style={{ color:'white',backgroundColor:'#394150', minWidth:'120px', fontFamily:"Playfair Display" }} /> <Chip label={area} style={{ color:'white' ,backgroundColor:'#394150',minWidth:'120px', fontFamily:"Playfair Display" }}  />
        <h3 style={{ marginTop:'20px' }}>🥚Ingredients</h3>

        <Typography variant="body2" >
            <List>
                <ListItem><ListItemText>{ingredient1}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient2}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient3}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient4}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient5}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient6}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient7}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient8}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient9}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient10}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient11}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient12}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient13}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient14}</ListItemText></ListItem>
                <ListItem><ListItemText>{ingredient15}</ListItemText></ListItem>

            </List>
        </Typography>

        <h3 style={{ marginTop:'20px',marginBottom:'50px', fontFamily:"Playfair Display"}}>👩🏽‍🍳 Instruction</h3>
        <Typography variant="body1" style={{ marginBottom:'50px' }}>
        {instruction}
        </Typography>


      {/* <iframe
          width= '100%'
          height="300"
          src={video}// Embedded URL of the YouTube video
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>       */}
        
        </CardContent>


    </Card>
  );
}
