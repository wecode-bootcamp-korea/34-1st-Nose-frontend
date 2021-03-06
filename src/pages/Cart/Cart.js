import React, { useEffect, useState } from 'react';
import CartList from './component/CartList';
import { API } from '../../config';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [allcheckedBox, setAllCheckedBox] = useState(false);

  const totalPrice = cartList?.reduce((accumulator, obj) => {
    return (accumulator += obj.checked ? obj.quantity * obj.price : 0);
  }, 0);
  let deliveryFee = totalPrice >= 30000 ? 0 : 2500;

  useEffect(() => {
    fetch('http://10.58.6.171:8000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => setCartList(res.results));
  }, []);
  console.log(cartList);

  const deleteList = id => {
    fetch(`http://10.58.6.171:8000/carts?cart_id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.gOF0lDXoeNVbabmlcEYtmy4pbRL30cg28vUUXG1s5g4',
      },
    })
      .then(res => res.json())
      .then(res => setCartList(res.results));
  };

  const isChecked = ({ target: { checked } }) => {
    setAllCheckedBox(checked);
    setCartList(oldList => {
      return oldList.map(listItem => {
        listItem.checked = checked;
        return listItem;
      });
    });
  };

  const isListChecked = (e, id) => {
    const { checked } = e.target;
    let allCheck = true;
    setCartList(oldList => {
      const result = oldList.map(listItem => {
        if (listItem.id === id) {
          listItem.checked = checked;
        }
        if (listItem.checked === false) allCheck = false;
        return listItem;
      });

      setAllCheckedBox(allCheck);
      return result;
    });
  };

  const plusOneQuantity = id => {
    setCartList(oldList => {
      const result = oldList.map(listItem => {
        if (listItem.id === id) listItem.quantity += 1;
        return listItem;
      });
      return result;
    });
  };

  const minusOneQuantity = id => {
    setCartList(oldList => {
      const result = oldList.map(listItem => {
        if (listItem.id === id) listItem.quantity -= 1;
        if (listItem.quantity < 0) listItem.quantity = 0;
        return listItem;
      });
      return result;
    });
  };

  return (
    <div className="cartPageBody">
      <div className="cartContainer">
        <div className="cartText">
          <h1>Cart</h1>
        </div>
        <div className="cartBox">
          <div className="cartHeader">
            <div className="cartHeaderSelectColumn ">
              <input
                type="checkBox"
                className="allCheckBox"
                onChange={isChecked}
                checked={allcheckedBox}
              />
              <span className="selectAll">?????? ?????? </span>
              <span className="deleteSeleb cted">?????? ?????? </span>
            </div>
            {HEADER_COLUMN.map(word => {
              return (
                <div className="cartHeaderColumn" key={word.id}>
                  <span className="headColumnText">{word.title}</span>
                </div>
              );
            })}
          </div>
          <form className="cartItem">
            <ul>
              {cartList.map(listItem => {
                return (
                  <CartList
                    key={listItem.id}
                    listItem={listItem}
                    deliveryFee={deliveryFee}
                    isListChecked={isListChecked}
                    deleteList={deleteList}
                    minusOneQuantity={minusOneQuantity}
                    plusOneQuantity={plusOneQuantity}
                    cartList={cartList}
                  />
                );
              })}
            </ul>
          </form>
          <div className="cartTotalHeader">
            {TOTAL_HEADER.map(word => {
              return (
                <div className="cartTotalHeaderColumn" key={word.id}>
                  {word.title}
                </div>
              );
            })}
          </div>
          <div className="priceBox">
            <div className="cartPriceColumn">
              {totalPrice?.toLocaleString()}???
            </div>
            <div className="cartPriceColumn">+</div>
            <div className="cartPriceColumn">0???</div>
            <div className="cartPriceColumn">+</div>
            <div className="cartPriceColumn">
              {deliveryFee.toLocaleString()}???
            </div>
            <div className="cartPriceColumn">=</div>
            <div className="cartPriceColumn">
              {(totalPrice + deliveryFee)?.toLocaleString()}???
            </div>
          </div>
          <div className="orderBox">????????????</div>
        </div>
      </div>
    </div>
  );
};

const HEADER_COLUMN = [
  { id: 1, title: '?????? ??????' },
  { id: 2, title: '??????' },
  { id: 3, title: '?????????' },
  { id: 4, title: '??????' },
  { id: 5, title: '??????' },
];
const TOTAL_HEADER = [
  { id: 1, title: '??? ????????????' },
  { id: 2, title: '?????? ??????' },
  { id: 3, title: '?????????' },
  { id: 4, title: '??? ????????????' },
];

export default Cart;
