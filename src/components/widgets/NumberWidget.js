import { useState, useEffect } from 'react';
import { getService } from '../../lib/axios';
import { get } from 'lodash';
function NumberWidget({ index, widget, responsePath }) {
  const [count, setCount] = useState();

  const fetchData = async () => {
    const response = await getService(widget.api);
    const totalCount = get(response.data, responsePath).length;

    setCount(totalCount);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div key={index}>
      <h3>{`${widget.title} (${count})`}</h3>
    </div>
  );
}

export default NumberWidget;
