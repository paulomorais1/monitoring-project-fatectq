import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
const MonitorCard = ({ monitors }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={monitors.nome}
        height="140"
        image={monitors.imagemPerfil} // A propriedade 'imagemPerfil' deve conter o URL da imagem do perfil do monitors
        title={monitors.nome}
      />
      <CardContent>
        <Typography variant="h5">{monitors.nome}</Typography>
        <Typography variant="subtitle1">{monitors.disciplina}</Typography>
        <Typography variant="body2">{monitors.contato}</Typography>
      </CardContent>
    </Card>
  );
};

export default MonitorCard;
