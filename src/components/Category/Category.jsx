import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Grid, ListItemIcon } from '@mui/material';
import { Box } from '@mui/system';

export default function Category({ categories, image, onCategoryClick }) {
  const [isSelected, setIsSelected] = React.useState(false);
  function handleClick() {
    // Passer la catégorie au clic
    onCategoryClick(categories);
  }

  React.useEffect(() => {
    // Vérifier si la catégorie est celle par défaut
    if (categories === "Dessert") {
      setIsSelected(!isSelected);
    }
  }, []); // Effectuer cette vérification une seule fois au chargement

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '360px',
      }}
    >
      <ListItemButton
        onMouseEnter={()=>{setIsSelected(true)}}
        onMouseLeave={()=>{setIsSelected(false)}}

        style={{ 
          backgroundColor:isSelected? "#FEBD2E" :"transparent",
          color:isSelected? "black" :"#E5E7EB",
          border: '1px solid #394150',
          borderRadius: '18px',
          '&:hover': { border: '1px solid #000' },

        }}
        onClick={handleClick}
        name={categories}
      >
        <ListItemIcon>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemIcon>
        <ListItemText primary={categories} />
      </ListItemButton>
    </List>

  );
}
