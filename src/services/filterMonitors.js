export const filterMonitors = ( horario) => {
    return monitors.filter((monitor) => {
      const hasHorario = horario ? monitor.horarios.includes(horario) : true;
      return  hasHorario;
    });
  };
  