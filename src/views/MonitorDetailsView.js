import React from 'react';

const MonitorDetailsView = ({ monitor }) => {
  if (!monitor) {
    return <div>Monitor não encontrado.</div>;
  }

  return (
    <div>
      <h1>Detalhes do Monitor</h1>
      <p>
        <strong>Nome:</strong> {monitor.nome}
      </p>
      <p>
        <strong>Disciplina:</strong> {monitor.disciplina}
      </p>
      <p>
        <strong>Contato:</strong> {monitor.contato}
      </p>
    </div>
  );
};

export default MonitorDetailsView;
