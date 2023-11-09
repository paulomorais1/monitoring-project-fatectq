import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MonitorCard from '../components/MonitorCard';

const HomeView = ({ monitors }) => {
  return (
    <div>
      <h1>Monitores em Destaque</h1>
      <Grid container spacing={5}>
        {monitors.map((monitor) => (
          <Grid item xs={12} sm={6} md={4} key={monitor.id}>
            <Link to={`/monitor/${monitor.id}`} style={{ textDecoration: 'none' }}>
              <MonitorCard monitor={monitor} /> {/* Renderize o componente MonitorCard para cada monitor */}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeView;
