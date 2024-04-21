import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { DataAPI } from '../../api/data-api';
import Navbar from './Navbar';
import DetailCard from './DetailCard';
import s from "./style.module.css"

export default function RecipeDetail() {
    const {detailId} = useParams();
    const[Detail,setDetail]= useState({})
    console.log(Detail.strYoutube);

    useEffect(()=>{
        fetchMealById();
    },[detailId]);

    async function fetchMealById() {
        try {
          if (detailId) {
            const meal = await DataAPI.filterById(detailId);
            // Mettez à jour l'état menu avec les recettes de la zone sélectionnée
            setDetail(meal)
            console.log(Detail);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      return (
        <Box  sx={{ backgroundColor:'#0E1325', fontFamily:"Playfair Display", }} >
            <Navbar />
            <Container                    
             sx={{ 
                    minHeight:'100vh',
                    width:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    height:'100%',
                    flexDirection:'column',
                    }}
                   
             >
                <Box 
                    sx={{ 
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    height:'100%',
                    flexDirection:'column',
                    width:'55%'
                    }}
                >
                
                <DetailCard 
                MealImage={Detail.strMealThumb} 
                title={Detail.strMeal}
                category={Detail.strCategory}
                area={Detail.strArea}
                video={Detail.strYoutube}
                instruction={Detail.strInstructions}
                ingredient1={Detail.strIngredient1}
                ingredient2={Detail.strIngredient2}
                ingredient3={Detail.strIngredient3}
                ingredient4={Detail.strIngredient4}
                ingredient5={Detail.strIngredient5}
                ingredient6={Detail.strIngredient6}
                ingredient7={Detail.strIngredient7}
                ingredient8={Detail.strIngredient8}
                ingredient9={Detail.strIngredient9}
                ingredient10={Detail.strIngredient10}
                ingredient11={Detail.strIngredient11}
                ingredient12={Detail.strIngredient12}
                ingredient13={Detail.strIngredient13}
                ingredient14={Detail.strIngredient14}
                ingredient15={Detail.strIngredient15}

                 />
                </Box>
                
            </Container>
        </Box>
  )
}
