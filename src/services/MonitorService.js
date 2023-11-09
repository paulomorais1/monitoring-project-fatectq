// MonitorService.js
import MonitorModel from '../models/MonitorModel';
  
const monitorAndresa = new MonitorModel(
  1,
  'Andresa Medalha Sinchetti',
  ['Pesquisa Operacional', 'Programação Linear'],
  {
    manha: [
      'Segunda-feira: 07:40 às 11:10',
      'Sexta-feira: 07:40 às 09:30',
    ],
    tarde: [
      'Quarta-feira: 11:20 às 12:40',
      'Quinta-feira: 11:20 às 12:40',
    ],
  },
  '0220912021006',
  'andresa.sinchetti@fatec.sp.gov.br',
  'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);

const monitorCelia = new MonitorModel(
  2,
  'Celia Hidalgo Pereira',
  ['Cálculo', 'Cálculo I', 'Cálculo II', 'Estatística'],
  {
    manha: ['Terça-feira: 07:30 às 09:30'],
    tarde: [
      'Quarta-feira: 11:15 às 12:45',
      'Quinta-feira: 11:15 às 12:45',
      'Sexta-feira: 12:40 às 15:40',
    ],
  },
  '0220911921005',
  'celia.pereira@fatec.sp.gov.br',
  'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);

const monitorGabriel = new MonitorModel(
  3,
  'Gabriel Oliveira Silva',
  ['Algoritmos e Lógica de Programação', 'Linguagem de Programação', 'Introdução à Programação'],
  {
    noite: ['Quarta-feira: 20:30 às 22:30', 'Sexta-feira: 15:00 às 19:00'],
  },
  '0220482113002',
  'gabriel.silva523@fatec.sp.gov.br',
  'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

const monitorHigor = new MonitorModel(
  4,
  'Higor Francisco de Abreu',
  ['Algoritmos e Lógica de Programação', 'Estrutura de Dados', 'Linguagem de Programação', 'Introdução à Programação'],
  {
    tarde: ['Segunda-feira: 16:00 às 19:00', 'Quarta-feira: 16:00 às 19:00', 'Sexta-feira: 15:00 às 17:00'],
  },
  '0220481922020',
  'higor.abreu@fatec.sp.gov.br',
  'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

const monitorJose = new MonitorModel(
  5,
  'José Vitor Michelin',
  ['Algoritmos e Lógica de Programação', 'Introdução à Programação'],
  {
    tarde: ['Segunda-feira: 17:00 às 19:00', 'Terça-feira: 17:30 às 19:00', 'Quarta-feira: 17:30 às 19:00', 'Quinta-feira: 17:30 às 19:00', 'Sexta-feira: 17:30 às 19:00'],
  },
  '0220482123002',
  'jose.michelin@fatec.sp.gov.br',
  'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

const monitorRafael = new MonitorModel(
  6,
  'Rafael Trevizaneli de Moura',
  ['Física'],
  {
    tarde: ['Segunda-feira: 18:00 às 19:00', 'Terça-feira: 18:00 às 19:00', 'Quarta-feira: 18:00 às 19:00', 'Quinta-feira: 18:00 às 19:00', 'Sexta-feira: 18:00 às 19:00'],
  },
  '0220912121013',
  'rafael.moura25@fatec.sp.gov.br',
  'https://images.unsplash.com/photo-1666143923404-75e5b6ee25e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

const monitors = [monitorAndresa, monitorCelia, monitorGabriel, monitorHigor, monitorJose, monitorRafael];




const searchMonitors = (periodo) => {
  return monitors.filter((monitor) => {
    if (monitor && monitor.horariosDisponiveis) {
      return monitor.horariosDisponiveis[periodo.toLowerCase()]; // Convertendo o período para minúsculas
    }
    return false;
  });
};

const MonitorService = {
  getAllMonitors: () => {
    return monitors;
  },
  searchMonitors: (periodo) => {
    return searchMonitors(periodo);
  },
};

export default MonitorService;
