import React from 'react';

const CartList = ({
  listItem,
  deliveryFee,
  isListChecked,
  deleteList,
  minusOneQuantity,
  plusOneQuantity,
}) => {
  return (
    <div>
      <li key={listItem.id} className="whatsInYourCart">
        {/* {setQuantity(value.quantity)} */}
        <div className="cartItemColumn itemHead">
          <input
            type="checkBox"
            onChange={e => {
              isListChecked(e, listItem.id);
            }}
            checked={listItem.checked}
          />
          <img className="itemImage" src={listItem.imageUrl} alt="상품사진" />
        </div>
        <div className="cartItemColumn itemBody">
          <div className="itemName">
            <span className="itemMainName">{listItem.itemName}</span>
            <span className="itemSubName">2.5ml x 6 bottles</span>
          </div>
        </div>
        <div className="cartItemColumn itemBody">
          <div className="amountButtonBox">
            <button
              type="button"
              className="decreaseButton"
              onClick={e => {
                minusOneQuantity(listItem.id);
              }}
            >
              -
            </button>
            <span className="value">{listItem.quantity}</span>
            <button
              type="button"
              className="increaseButton"
              onClick={e => {
                plusOneQuantity(listItem.id);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="cartItemColumn itemBody">
          <div className="deliveryPrice">{deliveryFee.toLocaleString()}</div>
        </div>
        <div className="cartItemColumn itemBody">
          <div className="cartItemPrice">
            {(listItem.price * listItem.quantity).toLocaleString()}
          </div>
        </div>
        <div className="cartItemColumn itemBody">
          <button
            className="cartItemDeleteButton"
            onClick={e => {
              deleteList(listItem.id);
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
