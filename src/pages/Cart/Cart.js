// import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import './Cart.scss';

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

  // useEffect(()=> {
  //   const totalPrice = cartList.reduce((acc.obj)=> {
  //     return (acc+=obj.checked ? )
  //   }
  // })
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
        // console.log('id:%d , quantity:%d', el.id, el.quantity);
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
      // console.log(result);
      return result;
    });
  };
  const deleteList = id => {
    setCartList(oldList => {
      const result = cartList.filter(el => {
        // if (item.id !== id) return item;
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
                // checked={allcheckedBox}
                // onClick={isChecked}
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
              {cartList.map(value => (
                <li key={value.id} className="whatsInYourCart">
                  {/* {setQuantity(value.quantity)} */}
                  <div className="cartItemColumn">
                    <input
                      type="checkBox"
                      onChange={e => {
                        isListChecked(e, value.id);
                      }}
                      checked={value.checked}
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
                        onClick={e => {
                          minusOneQuantity(value.id);
                        }}
                      >
                        -
                      </button>
                      <span className="value">{value.quantity}</span>
                      <button
                        className="increaseButton"
                        onClick={e => {
                          plusOneQuantity(value.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cartItemColumn">
                    <div className="deliveryPrice">{deliveryFee}</div>
                  </div>
                  <div className="cartItemColumn">
                    <div className="cartItemPrice">{value.price}</div>
                  </div>
                  <div className="cartItemColumn">
                    <button
                      className="cartItemDeleteButton"
                      onClick={e => {
                        deleteList(value.id);
                      }}
                    >
                      x
                    </button>
                  </div>
                </li>
              ))}
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
          <div className="priceBox">
            <div className="cartPriceColumn">{totalCheckedPrice}</div>
            <div className="cartPriceColumn">-</div>
            <div className="cartPriceColumn">0원</div>
            <div className="cartPriceColumn">+</div>
            <div className="cartPriceColumn">{deliveryFee}</div>
            <div className="cartPriceColumn">
              {totalCheckedPrice + deliveryFee}
            </div>
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
