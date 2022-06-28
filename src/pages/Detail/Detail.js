import React, { useEffect, useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [itemInfo, setItemInfo] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = itemInfo.thumbnail_img;

  useEffect(() => {
    fetch('data/detailItem.json', { method: 'GET' })
      .then(res => res.json())
      .then(result => setItemInfo(result));
  }, []);

  const increaseButton = id => {
    setItemInfo(value => {
      if (value.quantity > 9) {
        alert('10개가 최대 가능 구입량입니다.');
        value.quantity = 9;
      }
      return { ...value, quantity: value.quantity + 1 };
    });
  };
  const decreaseButton = id => {
    setItemInfo(value => {
      if (value.quantity > 1) {
        return { ...value, quantity: value.quantity - 1 };
      } else {
        alert('주문 최소 수량은 1개입니다.');
        return { ...value, quantity: 1 };
      }
    });
  };
  const handleSlide = currentIndex => {
    if (currentIndex === slides.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    setCurrentIndex(currentIndex);
  };
  const handleSwipe = direction => {
    handleSlide(currentIndex + direction);
  };

  return (
    <div className="detailContainer">
      <div className="topDiscoveryPage" />
      <div className="contentBox">
        <div className="itemPage">
          <div className="sliderArea">
            <div className="sliderBox">
              <div
                className="sliderTrack"
                style={{
                  transform: `translateX(${-400 * (0.5 + currentIndex)}px)`,
                }}
              >
                {slides &&
                  slides.map(image => {
                    return (
                      <li key={image.id} className="imgList">
                        <img
                          src={image.url}
                          alt="슬라이드 사진"
                          className="img"
                        />
                      </li>
                    );
                  })}
              </div>
            </div>
            <span onClick={() => handleSwipe(-1)} className="spanPrev" />
            <span onClick={() => handleSwipe(1)} className="spanNext" />
          </div>

          <form className="itemInfo">
            <div className="itemName">{itemInfo.name}</div>
            <div className="itemPrice">{itemInfo.price.toLocaleString()}원</div>
            {/* <div className="itemOption"> */}

            <div className="itemSubNameBox">
              <div className="itemSubName">{itemInfo.name}</div>
              <div className="amountBigBox">
                <div className="amountButtonBox">
                  <button
                    type="button"
                    className="decreaseButton"
                    onClick={() => {
                      decreaseButton(itemInfo.id);
                    }}
                  >
                    {' '}
                    -
                  </button>
                  <span className="itemAmount">{itemInfo.quantity}</span>
                  <button
                    type="button"
                    className="increaseButton"
                    onClick={() => {
                      increaseButton(itemInfo.id);
                    }}
                  >
                    {' '}
                    +
                  </button>
                </div>
              </div>
              <div className="itemSubPrice">
                {itemInfo.price.toLocaleString()}원
              </div>
            </div>
            <div className="totalPriceBox">
              <div className="totalPrice"> 총 상품 금액</div>
              <div className="realPrice">
                {(itemInfo.price * itemInfo.quantity).toLocaleString()}원
              </div>
            </div>
            <div className="cartButtonBox">장바구니에 담기</div>
            <div className="myFavCart">나만의 카트 만들기</div>
          </form>
        </div>
        <div className="itemDescriptionReviewBox">
          <div className="detailInfo">상세정보</div>
          <div className="detailReview">리뷰</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
