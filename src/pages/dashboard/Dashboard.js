import { getClientConfig, getSize } from '../../utils/utils.js';

import React from 'react';
import ListWidget from '../../components/widgets/ListWidget.js';
import NumberWidget from '../../components/widgets/NumberWidget.js';
import './Dashboard.css';

export const Dashboard = ({ client }) => {
  const config = getClientConfig(client);

  const renderColumns = () => {
    return config.columns.map((column) => (
      <>
        <div class={`widget-column-${getSize(column.size)}`}>
          <h3>{column.heading}</h3>
          <div class={`${column.rowType}-widgets`}>{renderWidgets(column.widgets)}</div>
        </div>
      </>
    ));
  };

  // Render widgets based on type
  const renderWidgets = (widgets) => {
    return widgets.map((widget) => {
      switch (widget.type) {
        case 'list':
          return <ListWidget widget={widget} />;
        case 'number':
          return <NumberWidget widget={widget} responsePath={'pokemon_species_details'} />;
        default:
          return null;
      }
    });
  };

  return <div class="dashboard-container">{renderColumns()}</div>;
};

export default Dashboard;
