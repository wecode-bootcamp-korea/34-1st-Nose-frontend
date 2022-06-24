import React from 'react';

const CartCalculate = ({ totalCheckedPrice, deliveryFee }) => {
  const CART_PRICE_COLUMN = [
    '-',
    '0원',
    '+',
    deliveryFee.toLocaleString(),
    '=',
    (totalCheckedPrice + deliveryFee).toLocaleString(),
  ];
  return (
    <div>
      <div className="priceBox">
        <div className="cartPriceColumn">
          {totalCheckedPrice.toLocaleString()}
        </div>
        {CART_PRICE_COLUMN.map(word => {
          return (
            <div key={CART_PRICE_COLUMN.id} className="cartPriceColumn">
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartCalculate;
