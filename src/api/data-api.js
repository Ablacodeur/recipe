import axios from "axios";
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

// const FILTER_URL = "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
export class DataAPI{
    static async fetchRecipe(){
      return(await axios.get(`${BASE_URL}/categories.php`)).data.categories
       
    }
    static async filterByCategory(category){
      return(await axios.get(`${BASE_URL}/filter.php?c=${category}`)).data.meals;
    }
    static async filterByName(meal){
      return(await axios.get(`${BASE_URL}/search.php?s=${meal}`)).data.meals;
    }
  
}