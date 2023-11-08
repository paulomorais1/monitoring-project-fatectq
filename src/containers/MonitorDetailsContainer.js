import React from 'react';
import MonitorDetailsView from '../views/MonitorDetailsView';
import monitorsData from '../utils/data';

const MonitorDetailsContainer = ({ match }) => {
  const monitorId = parseInt(match.params.id, 10);
  const selectedMonitor = monitorsData.find((monitor) => monitor.id === monitorId);

  return <MonitorDetailsView monitor={selectedMonitor} />;
};

export default MonitorDetailsContainer;
