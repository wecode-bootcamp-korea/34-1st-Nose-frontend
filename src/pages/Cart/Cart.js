import React, { useEffect, useState } from 'react';
import CartCalculate from './component/CartCalculate';
import CartList from './component/CartList';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  // const [totalCheckedPrice, setTotalCheckedPrice] = useState(0);
  const [allcheckedBox, setAllCheckedBox] = useState(false);
  const totalPrice = cartList.reduce((accumulator, obj) => {
    return (accumulator += obj.checked ? obj.quantity * obj.price : 0);
  }, 0);
  let deliveryFee = totalPrice >= 30000 ? 0 : 2500;

  //mock data 받아오기
  useEffect(() => {
    fetch('data/itemData.json')
      .then(res => res.json())
      .then(res => setCartList(res));
  }, []);
  //전체 선택
  const isChecked = ({ target: { checked } }) => {
    setAllCheckedBox(checked);
    setCartList(oldList => {
      //oldList 기존에 있는 배열 값
      return oldList.map(listItem => {
        listItem.checked = checked;
        return listItem;
      });
    });
  };
  //리스트 선택
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
                  <span className="headCflolumnText">{word.title}</span>
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
          <CartCalculate
            totalCheckedPrice={totalPrice}
            deliveryFee={deliveryFee}
          />
          <div className="orderBox">
            <button className="orderButton">주문하기</button>
          </div>
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
