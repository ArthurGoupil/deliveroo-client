import React from 'react';
import FoodItem from './components/FoodItem';

const FoodSection = ({
  meals,
  name,
  setCart,
  cart,
  cartTotalPrice,
  setCartTotalPrice
}) => {
  return (
    <>
      {meals.length !== 0 && (
        <div>
          <h2>{name}</h2>
          <div className="d-flex flex-wrap">
            {meals.map((meal, index) => {
              return (
                <FoodItem
                  key={index}
                  {...meal}
                  setCart={setCart}
                  cart={cart}
                  cartTotalPrice={cartTotalPrice}
                  setCartTotalPrice={setCartTotalPrice}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default FoodSection;
