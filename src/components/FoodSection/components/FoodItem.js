import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FoodItem = props => {
  const meal = props.children;
  return (
    <div className="meal-wrapper">
      <div className="meal d-flex space-between">
        <div className="meal-left">
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <div className="d-flex">
            <span className="meal-price">{meal.price} €</span>
            {meal.popular && (
              <div className="meal-popular">
                <FontAwesomeIcon className="icon-popular" icon={faStar} />
                <span>Populaire</span>
              </div>
            )}
          </div>
        </div>
        <img src={meal.picture}></img>
      </div>
    </div>
  );
};

export default FoodItem;
