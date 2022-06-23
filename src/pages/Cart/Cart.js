import React, { useEffect, useState } from 'react';
import './Cart.scss';
import CartCalculate from './component/CartCalculate';
import CartList from './component/CartList';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [totalCheckedPrice, setTotalCheckedPrice] = useState();
  const [allcheckedBox, setAllCheckedBox] = useState(false);
  let deliveryFee = totalCheckedPrice >= 30000 ? 0 : 2500;
  //총 계산 로직
  useEffect(() => {
    const totalPrice = cartList.reduce((accumulator, obj) => {
      return (accumulator += obj.checked ? obj.quantity * obj.price : 0);
    }, 0);
    setTotalCheckedPrice(totalPrice);
  }, [cartList, totalCheckedPrice]);

  //전체 선택
  const isChecked = ({ target: { checked } }) => {
    setAllCheckedBox(checked);
    setCartList(oldList => {
      //oldList 기존에 있는 배열 값
      return oldList.map(el => {
        el.checked = checked;
        return el;
      });
    });
  };
  //리스트 선택
  const isListChecked = (e, id) => {
    const { checked } = e.target;
    let allCheck = true;
    setCartList(oldList => {
      const result = oldList.map(el => {
        if (el.id === id) {
          el.checked = checked;
        }
        if (el.checked === false) allCheck = false;
        return el;
      });

      setAllCheckedBox(allCheck);
      return result;
    });
  };

  const plusOneQuantity = id => {
    setCartList(oldList => {
      const result = oldList.map(el => {
        if (el.id === id) el.quantity += 1;
        return el;
      });
      return result;
    });
  };

  const minusOneQuantity = id => {
    setCartList(oldList => {
      const result = oldList.map(el => {
        if (el.id === id) el.quantity -= 1;
        if (el.quantity < 0) el.quantity = 0;
        return el;
      });
      return result;
    });
  };
  const deleteList = id => {
    setCartList(oldList => {
      const result = cartList.filter(el => {
        return el.id !== id;
      });
      return result;
    });
  };

  useEffect(() => {
    fetch('data/itemData.json')
      .then(res => res.json())
      .then(res => setCartList(res));
  }, []);

  return (
    <div className="cartPageBody">
      <div className="cartContainer">
        <div className="cartText">
          <h1>Cart</h1>
        </div>
        <div className="cartBox">
          <div className="cartHeader">
            <div className="cartHeaderColumn ">
              <input
                type="checkBox"
                className="allCheckBox"
                onChange={isChecked}
                checked={allcheckedBox}
              />
              <span className="selectAll">전체 선택 </span>
              <span className="deleteSelected">선택 삭제 </span>
            </div>
            <div className="cartHeaderColumn">
              <span className="headColumnText">제품 정보 </span>
            </div>
            <div className="cartHeaderColumn">
              <span className="headColumnText">수량 </span>
            </div>
            <div className="cartHeaderColumn">
              <span className="headColumnText">배송비 </span>
            </div>
            <div className="cartHeaderColumn">
              <span className="headColumnText">금액 </span>
            </div>
          </div>
          <form className="cartItem">
            <ul>
              {cartList.map((value, index) => {
                return (
                  <CartList
                    key={index}
                    id={value.id}
                    imageUrl={value.imageUrl}
                    itemName={value.itemName}
                    checked={value.checked}
                    quantity={value.quantity}
                    deliveryFee={deliveryFee}
                    price={value.price}
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
            <div className="cartTotalHeaderColumn">총 상품가격</div>
            <div />
            <div className="cartTotalHeaderColumn">추가 금액</div>
            <div />
            <div className="cartTotalHeaderColumn">배송비</div>
            <div />
            <div className="cartTotalHeaderColumn">총 결제금액</div>
          </div>
          <CartCalculate
            totalCheckedPrice={totalCheckedPrice}
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

export default Cart;
