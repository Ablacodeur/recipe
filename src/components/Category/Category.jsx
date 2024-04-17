import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { ListItemIcon } from '@mui/material';

export default function Category({ categories, image, onCategoryClick }) {
  function handleClick() {
    // Passer la catégorie au clic
    onCategoryClick(categories);
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItemButton
        sx={{
          border: '1px solid #ccc',
          borderRadius: '5px',
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
