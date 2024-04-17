import { useState } from "react";
import "./CoffeBeans.scss";
import { Link } from "react-router-dom";
import coffeeBeans from '../../../../data/beans.json';

export const CoffeeBeans = () => {
  const [price] = useState(4.2);

  return (
    <div>
      <h5 className="beans-title">Coffee beans</h5>
      <div className="list">
        {coffeeBeans.map((item) => (
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
