import React from 'react';

const Cart = ({ cart, setCart, cartTotalPrice, setCartTotalPrice }) => {
  const plusIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuODMzLDAsMCwxMTQuODMzLDAsMjU2czExNC44MzMsMjU2LDI1NiwyNTZzMjU2LTExNC44NTMsMjU2LTI1NlMzOTcuMTY3LDAsMjU2LDB6IE0yNTYsNDcyLjM0MSAgICBjLTExOS4yNzUsMC0yMTYuMzQxLTk3LjA0Ni0yMTYuMzQxLTIxNi4zNDFTMTM2LjcyNSwzOS42NTksMjU2LDM5LjY1OVM0NzIuMzQxLDEzNi43MDUsNDcyLjM0MSwyNTZTMzc1LjI5NSw0NzIuMzQxLDI1Niw0NzIuMzQxeiAgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwRDZDMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTM1NS4xNDgsMjM0LjM4NkgyNzUuODN2LTc5LjMxOGMwLTEwLjk0Ni04Ljg2NC0xOS44My0xOS44My0xOS44M3MtMTkuODMsOC44ODQtMTkuODMsMTkuODN2NzkuMzE4aC03OS4zMTggICAgYy0xMC45NjYsMC0xOS44Myw4Ljg4NC0xOS44MywxOS44M3M4Ljg2NCwxOS44MywxOS44MywxOS44M2g3OS4zMTh2NzkuMzE4YzAsMTAuOTQ2LDguODY0LDE5LjgzLDE5LjgzLDE5LjgzICAgIHMxOS44My04Ljg4NCwxOS44My0xOS44M3YtNzkuMzE4aDc5LjMxOGMxMC45NjYsMCwxOS44My04Ljg4NCwxOS44My0xOS44M1MzNjYuMTE0LDIzNC4zODYsMzU1LjE0OCwyMzQuMzg2eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojMDBENkMwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=';
  const minusIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuODUzLDAsMCwxMTQuODMzLDAsMjU2czExNC44NTMsMjU2LDI1NiwyNTZjMTQxLjE2NywwLDI1Ni0xMTQuODMzLDI1Ni0yNTZTMzk3LjE0NywwLDI1NiwweiBNMjU2LDQ3Mi4zNDEgICAgYy0xMTkuMjk1LDAtMjE2LjM0MS05Ny4wNDYtMjE2LjM0MS0yMTYuMzQxUzEzNi43MDUsMzkuNjU5LDI1NiwzOS42NTlTNDcyLjM0MSwxMzYuNzA1LDQ3Mi4zNDEsMjU2UzM3NS4yOTUsNDcyLjM0MSwyNTYsNDcyLjM0MXogICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiMwMEQ2QzAiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNTUuMTQ4LDIzNC4zODZIMTU2Ljg1MmMtMTAuOTQ2LDAtMTkuODMsOC44ODQtMTkuODMsMTkuODNzOC44ODQsMTkuODMsMTkuODMsMTkuODNoMTk4LjI5NiAgICBjMTAuOTQ2LDAsMTkuODMtOC44ODQsMTkuODMtMTkuODNTMzY2LjA5NCwyMzQuMzg2LDM1NS4xNDgsMjM0LjM4NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzAwRDZDMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+';
  const deliveryFee = 2.5;
  return (
    <>
      <div className="cart">
        <button
          className={
            cart.length !== 0
              ? 'cart-button button-activated'
              : 'cart-button button-disabled'
          }
        >
          Valider mon panier
        </button>
        {cart.length !== 0 ? (
          <div>
            {cart.map((item, index) => {
              const handleItemAdd = event => {
                const copiedCart = [...cart];
                item.quantity++;
                item.totalPrice = Number(item.price) * Number(item.quantity);
                setCart(copiedCart);
                setCartTotalPrice(Number(cartTotalPrice) + Number(item.price));
              };
              const handleItemRemove = event => {
                const copiedCart = [...cart];
                item.quantity--;
                item.totalPrice = Number(item.price) * Number(item.quantity);
                if (item.quantity === 0) {
                  copiedCart.splice(index, 1);
                }
                setCart(copiedCart);
                setCartTotalPrice(Number(cartTotalPrice) - Number(item.price));
              };
              return (
                <div key={index} className="cart-item d-flex space-between">
                  <div className="d-flex">
                    <div className="cart-quantity-management d-flex align-center">
                      <img
                        alt="minus"
                        className="minus-cart"
                        src={minusIcon}
                        onClick={handleItemRemove}
                      />
                      <div className="item-quantity">{item.quantity}</div>
                      <img
                        alt="plus"
                        className="plus-cart"
                        src={plusIcon}
                        onClick={handleItemAdd}
                      />
                    </div>
                    <div className="item-title">{item.title}</div>
                  </div>
                  {item.totalPrice.toFixed(2)}&nbsp;€
                </div>
              );
            })}
            <hr />
            <div className="subtotal d-flex space-between">
              <span>Sous-total</span>
              <span>{cartTotalPrice.toFixed(2)}&nbsp;€</span>
            </div>
            <div className="delivery-fee d-flex space-between">
              <span>Frais de livraison</span>
              <span>{deliveryFee.toFixed(2)}&nbsp;€</span>
            </div>
            <hr />
            <div className="total d-flex space-between">
              <span>Total</span>
              <span>{(cartTotalPrice + deliveryFee).toFixed(2)}&nbsp;€</span>
            </div>
          </div>
        ) : (
          <p className="cart-empty">Votre panier est vide</p>
        )}
      </div>
    </>
  );
};

export default Cart;
