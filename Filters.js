import * as React from 'react';

const Filters = () => {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  return (
    <div className='Filtre'>
      <h1>Vreau un hotel...</h1>
      <div className='Filtre-body'>
        <label for="stele">Cu numărul de stele:</label>
              <select id="stele" name="stele">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
      </div>
      <div className='Filtre-body'>
        <label><input className="Filtre__input" type="checkbox"/><span>Cu restaurant</span></label>
      </div>
      <div className='Filtre-body'>
        <label><input className="Filtre__input" type="checkbox"/><span>Pet friendly</span></label>
      </div>
      <div className='Filtre-footer'>
        <button>Caută</button>
      </div>
    </div>
  );
};

export default Filters;