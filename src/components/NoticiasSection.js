// NoticiasSection.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import '../components/style/NoticiasSection.css';  // Importe o arquivo CSS



const NoticiasSection = () => {

    const noticias = [
        {
          id: 1,
          titulo: "Novo Processo de Seleção de Monitores",
          resumo: "Aberto o processo seletivo para novos monitores. Participe!",
          imagem: "url_da_imagem_1.jpg",
        },
        {
          id: 2,
          titulo: "Resultado da Seleção de Monitores",
          resumo: "Confira a lista dos monitores selecionados para o próximo semestre.",
          imagem: "url_da_imagem_2.jpg",
        },
        {
          id: 3,
          titulo: "Resultado da Seleção de Monitores",
          resumo: "Confira a lista dos monitores selecionados para o próximo semestre.",
          imagem: "url_da_imagem_2.jpg",
        },
        // Adicione mais notícias conforme necessário
      ];

  return (
    <section id="noticias" className="noticias-container container">
      {noticias.map((noticia) => (
        <Card key={noticia.id} className="noticia-card">
          <CardMedia
            className="media"
            image={noticia.imagem}
            title={noticia.titulo}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {noticia.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {noticia.resumo}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default NoticiasSection;
