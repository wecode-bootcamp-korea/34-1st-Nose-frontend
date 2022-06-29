import React, { useEffect, useState } from 'react';
import CartList from './component/CartList';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [allcheckedBox, setAllCheckedBox] = useState(false);
  const totalPrice = cartList.reduce((accumulator, obj) => {
    return (accumulator += obj.checked ? obj.quantity * obj.price : 0);
  }, 0);
  let deliveryFee = totalPrice >= 30000 ? 0 : 2500;

  useEffect(() => {
    fetch('http://10.58.1.167:8000/carts', { method: 'GET' })
      .then(res => res.json())
      .then(res => setCartList(res.results));
  }, []);

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
  const deleteList = id => {
    setCartList(oldList => {
      const result = cartList.filter(listItem => {
        return listItem.id !== id;
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
              <span className="selectAll">전체 선택 </span>
              <span className="deleteSeleb cted">선택 삭제 </span>
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
              {totalPrice.toLocaleString()}원
            </div>
            <div className="cartPriceColumn">+</div>
            <div className="cartPriceColumn">0원</div>
            <div className="cartPriceColumn">+</div>
            <div className="cartPriceColumn">
              {deliveryFee.toLocaleString()}원
            </div>
            <div className="cartPriceColumn">=</div>
            <div className="cartPriceColumn">
              {(totalPrice + deliveryFee).toLocaleString()}원
            </div>
          </div>
          <div className="orderBox">주문하기</div>
        </div>
      </div>
    </div>
  );
};

const HEADER_COLUMN = [
  { id: 1, title: '제품 정보' },
  { id: 2, title: '수량' },
  { id: 3, title: '배송비' },
  { id: 4, title: '금액' },
  { id: 5, title: '삭제' },
];
const TOTAL_HEADER = [
  { id: 1, title: '총 상품가격' },
  { id: 2, title: '추가 금액' },
  { id: 3, title: '배송비' },
  { id: 4, title: '총 결제금액' },
];

export default Cart;
