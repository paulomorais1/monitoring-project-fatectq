import MonitorModel from '../models/MonitorModel';

const monitors = [
  new MonitorModel(
    'Andresa Medalha Sinchetti',
    ['Pesquisa Operacional', 'Programação Linear'],
    '0220912021006',
    'andresa.sinchetti@fatec.sp.gov.br',
    {
      segunda: '07:40 às 11:10',
      quarta: '11:20 às 12:40',
      quinta: '11:20 às 12:40',
      sexta: '07:40 às 09:30'
    }
  ),
  // Adicione outros monitores aqui com o mesmo formato
];

const MonitorService = {
  getAllMonitors: () => {
    return monitors;
  },
  getMonitorById: (id) => {
    return monitors.find((monitor) => monitor.ra === id);
  }
};

export default MonitorService;
