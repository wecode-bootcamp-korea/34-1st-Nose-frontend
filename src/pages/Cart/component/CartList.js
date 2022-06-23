import React from 'react';
import './CartList.scss';

const CartList = ({
  key,
  id,
  imageUrl,
  itemName,
  checked,
  quantity,
  deliveryFee,
  price,
  isListChecked,
  deleteList,
  minusOneQuantity,
  plusOneQuantity,
}) => {
  return (
    <div>
      <li key={id} className="whatsInYourCart">
        {/* {setQuantity(value.quantity)} */}
        <div className="cartItemColumn">
          <input
            type="checkBox"
            onChange={e => {
              isListChecked(e, id);
            }}
            checked={checked}
          />
          <img className="itemImage" src={imageUrl} alt="상품사진" />
        </div>
        <div className="cartItemColumn">
          <div className="itemName">
            <span className="itemMainName">{itemName}</span>
            <span className="itemSubName">2.5ml x 6 bottles</span>
          </div>
        </div>
        <div className="cartItemColumn">
          <div className="amountButtonBox">
            <button
              type="button"
              className="decreaseButton"
              onClick={e => {
                minusOneQuantity(id);
              }}
            >
              -
            </button>
            <span className="value">{quantity}</span>
            <button
              type="button"
              className="increaseButton"
              onClick={e => {
                plusOneQuantity(id);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="cartItemColumn">
          <div className="deliveryPrice">
            {deliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className="cartItemColumn">
          <div className="cartItemPrice">
            {(price * quantity)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className="cartItemColumn">
          <button
            className="cartItemDeleteButton"
            onClick={e => {
              deleteList(id);
            }}
          >
            x
          </button>
        </div>
      </li>
    </div>
  );
};

export default CartList;
