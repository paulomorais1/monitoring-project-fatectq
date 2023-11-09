import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './style/MonitorCard.css';

const MonitorCard = ({ monitor }) => {
  const disciplina = monitor.disciplinas || [];
  const horariosManha = monitor.horariosDisponiveis?.manha ? monitor.horariosDisponiveis.manha.join(', ') : '';
  const horariosTarde = monitor.horariosDisponiveis?.tarde ? monitor.horariosDisponiveis.tarde.join(', ') : '';
  const horariosNoite = monitor.horariosDisponiveis?.noite ? monitor.horariosDisponiveis.noite.join(', ') : '';

  return (
    <Card className="card">
      <Grid container style={{ flexWrap: 'nowrap', alignItems: 'center' }} spacing={1}>
        <Grid item xs={12} sm={4} md={3}>
          <CardMedia
            component="img"
            alt={monitor.nome}
            width='max-content'
            height='150px'
            image={monitor.imagemPerfil}
            title={monitor.nome}
            className="media"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <CardContent>
            <Typography variant="h5" className="title">
              {monitor.nome}
            </Typography>
            <Typography variant="subtitle1" className="subtitle">
              {disciplina.join(', ')}
            </Typography>
            <Typography variant="body2" className="details">
              RA: {monitor.ra}
            </Typography>
            <Typography variant="body2" className="details">
              E-mail: {monitor.email}
            </Typography>
            {horariosManha && (
              <Typography variant="body2" className="time">
                Manhã: {horariosManha}
              </Typography>
            )}
            {horariosTarde && (
              <Typography variant="body2" className="time">
                Tarde: {horariosTarde}
              </Typography>
            )}
            {horariosNoite && (
              <Typography variant="body2" className="time">
                Noite: {horariosNoite}
              </Typography>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MonitorCard;
