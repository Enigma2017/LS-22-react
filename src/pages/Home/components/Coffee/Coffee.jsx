
import { Link } from 'react-router-dom';
import './Coffe.scss';
import { useState } from 'react';
//import coffeeData from '../../../../data/coffee.json';

export const Coffee = ({coffeeData}) => {
  const [price] = useState(4.2); 
  //const [coffeeData, setCoffeeData] = useState([]);

  return (
    <div>
      <div className="list">
        {coffeeData.map((item) => (
          <Link to={`/product/${item.id}`} className="item" key={item.id}>
            <img src={item.image} className="item__img" alt="Coffee" />
            <h3 className="item__title">{item.title}</h3>
            <p className="item__desc">{item.desc}</p>
            <div className="item__id">{item.id}</div>
            <div className="price-group">
              <p className="price">
                <span>$</span> {price.toFixed(2)}
              </p>
              <span className="icon-plus"></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


