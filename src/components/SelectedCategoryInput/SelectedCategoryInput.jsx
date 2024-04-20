import React, { useState } from 'react';
import s from "./style.module.css"
import { DataAPI } from '../../api/data-api';

export default function SelectedCategoryInput({handleSelectChange, selectValue}) {
const[areas, setAreas]=useState([])

  async function fetchArea() {
    try {        
      const country = await DataAPI.fetchAreaList();
      setAreas(country);
      console.log(areas);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
      <select className={s.input} onClick={fetchArea} onChange={handleSelectChange}>
        <option value="">Sort by: Area</option>
        {areas.map((area,index)=>{
          return(
            <option value={area.strArea} key={index}>{area.strArea}</option>          )
        })}
      </select>
      
  );
}

