import { Outlet } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import s from './style.module.css'
import { useDispatch } from "react-redux";
import { DataAPI } from "./api/data-api";
import { setRecipe } from "./store/recipe-slice";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  async function fetchRecipes(){
    try{
        const recipe = await DataAPI.fetchRecipe();
        dispatch(setRecipe(recipe));
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
  }
  useEffect(()=>{
      fetchRecipes()
  },[])

  return (
    <div  className={s.container}>
    <Hero />
    <Outlet></Outlet>
  </div>

  );
}

export default App;
