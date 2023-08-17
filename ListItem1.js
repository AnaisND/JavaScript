import React from 'react';
import { Link } from 'react-router-dom';
import "./Styled/List.css";

const ListItem = ({ item }) => {
  return (
    <div className='list'>
      <Link to={`/confirm/${item.id}`} className='link'>
      <h3>{item.nume}</h3></Link>
      <br/>
      <h4>{item.adresa}</h4>
      <p>{item.detalii}</p>
      <br/>
      <img src={item.imagine} alt={item.nume} />
    </div>
  );
};

export default ListItem;
