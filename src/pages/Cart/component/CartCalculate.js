import React from 'react';

const CartCalculate = ({ totalCheckedPrice, deliveryFee }) => {
  return (
    <div>
      <div className="priceBox">
        <div className="cartPriceColumn">
          {totalCheckedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
        <div className="cartPriceColumn">-</div>
        <div className="cartPriceColumn">0원</div>
        <div className="cartPriceColumn">+</div>
        <div className="cartPriceColumn">
          {deliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
        <div className="cartPriceColumn">
          {(totalCheckedPrice + deliveryFee)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
    </div>
  );
};

export default CartCalculate;
