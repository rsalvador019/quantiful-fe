import { useState, useEffect } from 'react';
import { getService } from '../../lib/axios';

function ListWidget({ index, widget }) {
  const [data, setData] = useState();
  const [count, setCount] = useState();

  const fetchData = async () => {
    const response = await getService(widget.api);
    setData(response.data.results);
    setCount(response.data.count);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div key={index}>
      <h3>{`${widget.title} (${count})`}</h3>
      <p>{widget.subtitle}</p>

      {data &&
        data.map((item) => {
          return <div> {item.name}</div>;
        })}
    </div>
  );
}

export default ListWidget;
