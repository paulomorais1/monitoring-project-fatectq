import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const horariosOptions = [
  'Manha',
  'Tarde',
  'Noite',
  // Adicione outros períodos conforme necessário
];

const SearchBar = ({ onSearch }) => {
  const [periodo, setPeriodo] = useState('');

  const handleSearch = () => {
    onSearch(periodo);
  };

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={3}>
        <Autocomplete
          options={horariosOptions} // Lista de opções de períodos
          renderInput={(params) => <TextField {...params} label="Pesquisar por Horário" variant="outlined" fullWidth />}
          value={periodo}
          onChange={(event, newValue) => setPeriodo(newValue)}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" onClick={handleSearch} startIcon={<SearchIcon className="iconePesquisa"/>}>  
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
