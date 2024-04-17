import { Box, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import CardShema from '../CardShema/CardShema';
import { Stack } from '@mui/system';
import Category from '../Category/Category';
import { DataAPI } from '../../api/data-api';
import { useEffect, useState } from 'react';

export default function RecipeList() {
  const data = useSelector((store) => store.RECIPE.recipeList);
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fonction pour gérer le clic sur une catégorie
  const handleCategoryClick = async (category) => {
    try {
      setSelectedCategory(category);
    } catch (error) {
      console.error('Error setting category:', error);
    }
  };

  useEffect(() => {
    // fetchMenu au chargement initial
    fetchMenu();
  }, [selectedCategory]); // Mettre selectedCategory dans les dépendances

  async function fetchMenu() {
    try {
      if (selectedCategory) {
        const recipes = await DataAPI.filterByCategory(selectedCategory);
        setMenu(recipes);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <Box sx={{ backgroundColor: 'black.main' }}>
      <Container>
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
          <Box >
            {data.map((category, index) => {
              return (
                <Category
                  key={index}
                  categories={category.strCategory}
                  image={category.strCategoryThumb}
                  // Passer handleCategoryClick en tant que prop
                  onCategoryClick={handleCategoryClick}
                />
              );
            })}
          </Box>

          <Box  sx={{ 
             marginLeft:'4%'

           }} >
            <Grid container spacing={{ xs: 2, md: 6 }}>
              {menu.length > 0 &&
                menu.map((recipe, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    key={index}
                    sx={{
                      alignItems: 'center',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: { xs: '20%', md: '5%' },
                    }}
                  >
                    <CardShema
                      name={recipe.strMeal} // Assurez-vous que ce sont les bonnes clés
                      thumb={recipe.strMealThumb} // Assurez-vous que ce sont les bonnes clés
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
