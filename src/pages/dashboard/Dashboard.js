import { getClientConfig } from '../../utils/utils.js';

import React from 'react';
import ListWidget from '../../components/widgets/ListWidget.js';
import NumberWidget from '../../components/widgets/NumberWidget.js';

const client = 'pokemon';
const config = getClientConfig(client);

export const Dashboard = ({ client }) => {
  const renderColumns = () => {
    return config.columns.map((column, index) => (
      <div key={index} style={{ flex: column.size }}>
        <h2>{column.heading}</h2>
        {renderWidgets(column.widgets)}
      </div>
    ));
  };

  // Render widgets based on type
  const renderWidgets = (widgets) => {
    return widgets.map((widget, index) => {
      switch (widget.type) {
        case 'list':
          return <ListWidget index={index} widget={widget} />;
        case 'number':
          return (
            <NumberWidget index={index} widget={widget} responsePath={'pokemon_species_details'} />
          );
        default:
          return null;
      }
    });
  };

  return (
    <div>
      <h1>{`Dashboard for ${client}`}</h1>
      <div style={{ display: 'flex' }}>{renderColumns()}</div>
    </div>
  );
};
