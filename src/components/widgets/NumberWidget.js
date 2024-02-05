import { useState, useEffect } from 'react';
import { getService } from '../../lib/axios';
import { get } from 'lodash';
import { Card } from 'antd';
import './Widgets.css';

const NumberWidget = ({ widget, responsePath }) => {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getService(widget.api);
      const totalCount = get(response.data, responsePath).length;

      setCount(totalCount);
    };
    fetchData();
  }, [responsePath, widget.api]);

  return (
    <div class="widget-small">
      <Card
        style={{
          height: '100%',
          maxHeight: 500
        }}>
        <h3>{`${widget.title} `}</h3>
        <h4>{`(${count})`}</h4>
      </Card>
    </div>
  );
};

export default NumberWidget;
