import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  // const [selectedItem, setSelectedItem] = useState({});
  const [allcheckedBox, setAllCheckedBox] = useState(false);
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
  // 함수
  // const isFindChecked = ({})

  // const [totalPriceOfList, setTotalPriceOfList] = useState({총 상품가격 추가금액 배송비 결제금액});
  // const increaseAmout = () => {};
  // const [quantity, setQuantity] = useState(cartList.quantity);
  useEffect(() => {
    fetch('data/itemData.json')
      .then(res => res.json())
      .then(res => setCartList(res));
  }, []);
  // const [quantity, setQuantity] = useState(cartList.quantity);
  // useEffect(() => {
  //   //totalPriceOfList
  // }, [selectedItem]);

  // const increaseAmount = quantity => {
  //   return (quantity += 1);
  // };
  // const decreaseAmount = quantity => {
  //   return (quantity -= 1);
  // };

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
                checked={allcheckedBox}
                onClick={isChecked}
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
          <div className="cartItem">
            <ul>
              {cartList.map(value => (
                <li
                  key={value.id}
                  className="whatsInYourCart"
                  checked={value.checked}
                >
                  {/* {setQuantity(value.quantity)} */}
                  <div className="cartItemColumn">
                    <input
                      type="checkBox"
                      checked={value.checked}
                      onClick={isChecked}
                    />
                    <img
                      className="itemImage"
                      src={value.imageUrl}
                      alt="상품사진"
                    />
                  </div>
                  <div className="cartItemColumn">
                    <div className="itemName">
                      <span className="itemMainName">{value.itemName}</span>
                      <span className="itemSubName">2.5ml x 6 bottles</span>
                    </div>
                  </div>
                  <div className="cartItemColumn">
                    <div className="amountButtonBox">
                      <button
                        className="decreaseButton"
                        // onClick={value.decreaseAmount}
                      >
                        -
                      </button>
                      <span className="value">{value.quantity}</span>
                      <button
                        className="increaseButton"
                        // onClick={value.increaseAmount}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cartItemColumn">
                    <div className="deliveryPrice">조건</div>
                  </div>
                  <div className="cartItemColumn">
                    <div className="cartItemPrice">{value.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cartTotalHeader">
            <div className="cartTotalHeaderColumn">총 상품가격</div>
            <div />
            <div className="cartTotalHeaderColumn">추가 금액</div>
            <div />
            <div className="cartTotalHeaderColumn">배송비</div>
            <div />
            <div className="cartTotalHeaderColumn">총 결제금액</div>
          </div>
          <div className="priceBox">
            <div className="cartPriceColumn">20000원</div>
            <div className="cartPriceColumn">-</div>
            <div className="cartPriceColumn">0원</div>
            <div className="cartPriceColumn">+</div>
            <div className="cartPriceColumn">배송비</div>
            <div className="cartPriceColumn">총 결제금액</div>
          </div>
          <div className="orderBox">
            <button className="orderButton">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
