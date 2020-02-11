import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import FoodSection from './components/FoodSection/FoodSection';
import Cart from './components/Cart';

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://deliveroo-reacteur-backend.herokuapp.com/'
      );
      setData(response.data);
      setIsLoading(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <div>
          <Header>{data.restaurant}</Header>
          <main>
            <div className="content d-flex justify-center">
              <div className="content-center d-flex">
                <div className="main-left">
                  {data.categories.map((category, index) => {
                    return (
                      <FoodSection
                        key={index}
                        {...category}
                        setCart={setCart}
                        cart={cart}
                        cartTotalPrice={cartTotalPrice}
                        setCartTotalPrice={setCartTotalPrice}
                      />
                    );
                  })}
                </div>
                <div className="main-right">
                  <Cart
                    cart={cart}
                    setCart={setCart}
                    cartTotalPrice={cartTotalPrice}
                    setCartTotalPrice={setCartTotalPrice}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
