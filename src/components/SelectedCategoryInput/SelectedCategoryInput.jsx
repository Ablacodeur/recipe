import React from 'react'
import { Box } from 'react-bootstrap-icons'
import s from './style.module.css'

export default function SelectedCategoryInput() {
  return (
<select  className={s.input} >
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option defaultValue="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select> 
  )
}
