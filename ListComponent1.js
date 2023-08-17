import React from 'react';
import ListItem from './Data/ListItem1';

const ListComponent = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListComponent;
