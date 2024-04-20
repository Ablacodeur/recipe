import { Box, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import CardShema from '../CardShema/CardShema';
import { Stack } from '@mui/system';
import Category from '../Category/Category';
import { DataAPI } from '../../api/data-api';
import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import SelectedCategoryInput from '../SelectedCategoryInput/SelectedCategoryInput';

export default function RecipeList() {
  const [searchText, setSearchText]= useState('');
  const [searchedMeal, setSearchedMeal]= useState([]);

  const data = useSelector((store) => store.RECIPE.recipeList);
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Dessert');

    // État pour stocker la valeur sélectionn
    const [selectedValue, setSelectedValue] = useState('');

    // Fonction pour gérer le changement de valeur selectionée
    function onSelectArea(event){
      setSelectedValue(event.target.value);
      console.log(selectedValue);
    }

    const handleCategoryClick = async (category) => {
      try {
        setSelectedCategory(category);
      } catch (error) {
        console.error('Error setting category:', error);
      }
    };

  useEffect(() => {
    fetchMenu();
  }, [selectedCategory]);

  useEffect(() => {
    fetchMeal();
  }, [searchText]);

  useEffect(() => {
    fetchByArea();
  }, [selectedValue]);



  async function fetchByArea() {
    try {
      if (selectedValue) {
        const area_recipes = await DataAPI.filterByArea(selectedValue);
        setMenu(area_recipes); // Mettez à jour l'état menu avec les recettes de la zone sélectionnée
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

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
  async function fetchMeal() {
    try {
      if (searchText) {
        const meal = await DataAPI.filterByName(searchText);
        // Utilisation de la condition ternaire pour mettre à jour l'état en fonction du résultat de la recherche
        console.log(searchText.length);
        meal.length === 0 ? console.log("Aucun repas trouvé pour la recherche:", searchText) : setSearchedMeal(meal);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleChange(e){
    setSearchText(e.target.value)
    console.log(searchText);
  };



  return (
    <Box sx={{ backgroundColor: 'black.main' }}>
      <Container>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: { xs: "column", md: "row" },
            justifyContent: 'space-around',
            marginTop: { xs: '10%', md: '2%' },
          }}
        >
          <Grid item xs={12} md={4} sx={{  maxWidth: '500px' }}>
            <Box sx={{ marginBottom:'15px' }}>
              <h4>Categories</h4>
              <Grid container spacing={0.5}>
                {data.map((category, index) => (
                  <Grid item xs={6} md={12} key={index}>
                    <Category
                      categories={category.strCategory}
                      image={category.strCategoryThumb}
                      onCategoryClick={handleCategoryClick}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={8} >
            <Box sx={{
               marginBottom: '7%', marginLeft:{md:'15px'}}}>
              <Stack
                display='flex'
                justifyContent='space-between'
                flexDirection='row'
              >
                <SearchBar onTextChange={handleChange} />
                <SelectedCategoryInput handleSelectChange={onSelectArea} selectValue={selectedValue} />
              </Stack> 
            </Box>
            <Box sx={{marginLeft:{md:'15px'} }}>
            <Grid container spacing={{ xs: 2, md: 6 }} sx={{minWidth:'50vw'}}>
                {(searchText.length>0 && searchedMeal.length > 0 ? searchedMeal : menu).map((recipe, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    key={index}
                    sx={{
                      alignItems: 'center',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      gap:'20',
                    }}
                  >                   
                   <CardShema 
                      name={recipe.strMeal}
                      thumb={recipe.strMealThumb}
                    />
                  </Grid>
                ))}
                
            </Grid>
            </Box>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
