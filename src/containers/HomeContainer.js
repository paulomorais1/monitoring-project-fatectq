import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SearchBar from './SearchBar';
import MonitorCard from '../components/MonitorCard';
import MonitorService from '../services/MonitorService';

const HomeContainer = () => {
  const [filteredMonitors, setFilteredMonitors] = useState(MonitorService.getAllMonitors());
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSearch = (horario) => {
    if (horario.trim() === '') {
      // Campo de pesquisa vazio, exibir alerta
      setAlertOpen(true);
      return;
    }

    const filteredMonitors = MonitorService.searchMonitors(horario);
    setFilteredMonitors(filteredMonitors);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredMonitors.map((monitor) => (
        <MonitorCard key={monitor.ra} monitor={monitor} />
      ))}

      {/* Snackbar para exibir alerta */}
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%', top:'0' }}>
          Por favor, insira um valor para pesquisa.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HomeContainer;
