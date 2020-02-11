import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FoodItem = ({
  title,
  description,
  price,
  picture,
  popular,
  setCart,
  cart,
  cartTotalPrice,
  setCartTotalPrice
}) => {
  const handleNewCartItem = event => {
    const copiedCart = [...cart];
    let isAlreadyInCart = false;

    for (let i = 0; i < copiedCart.length; i++) {
      if (copiedCart[i].title === title) {
        copiedCart[i].quantity++;
        copiedCart[i].totalPrice = price * copiedCart[i].quantity;
        isAlreadyInCart = true;
        setCartTotalPrice(Number(cartTotalPrice) + Number(price));
        break;
      }
    }

    if (!isAlreadyInCart) {
      copiedCart.push({
        title,
        price,
        totalPrice: Number(price),
        quantity: 1
      });
      setCartTotalPrice(Number(price) + Number(cartTotalPrice));
    }
    setCart(copiedCart);
  };
  return (
    <div className="meal-wrapper">
      <div className="meal d-flex space-between" onClick={handleNewCartItem}>
        <div className="meal-left">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="d-flex">
            <span className="meal-price">{price} €</span>
            {popular && (
              <div className="meal-popular">
                <FontAwesomeIcon className="icon-popular" icon={faStar} />
                <span>Populaire</span>
              </div>
            )}
          </div>
        </div>
        {picture && <img alt={title} src={picture}></img>}
      </div>
    </div>
  );
};

export default FoodItem;
