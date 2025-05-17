import React, { useState, useEffect } from 'react';
import "./Header.scss";
import img1 from "../../assets/images/1.svg";
import img2 from "../../assets/images/2.svg";
import img3 from "../../assets/images/3.svg";
import place from "../../assets/images/place.svg";
import phone from "../../assets/images/phone.svg";
import bag from "../../assets/images/bag.svg";
import vk from "../../assets/images/vk.svg";
import ok from "../../assets/images/ok.svg";
import tg from "../../assets/images/tg.svg";
import img4 from "../../assets/images/4.svg";
import img5 from "../../assets/images/5.svg";
import img6 from "../../assets/images/6.svg";

const sliderData = [
  {
    text: "МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ",
    img: img3
  },
  {
    text: "ДОСТАВКА В ДЕНЬ ЗАКАЗА",
    img: img4
  },
  {
    text: "ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ",
    img: img5
  },
  {
    text: "ВСЕГДА СВЕЖЕЕ",
    img: img6
  }
];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='header'>
      <div className='header1'>
        <img src={img1} alt="" />
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <div>
            <img style={{ width: "31.66px", height: "30.37px" }} src={sliderData[currentIndex].img} alt="" />
            <button>100%</button>
          </div>
          <h3 className='slider-text'>{sliderData[currentIndex].text}</h3>
        </div>
        <img src={img2} alt="" />
      </div>

      <div className='header2'>
        <div className='header2-content'>
          <div className='div1'>
            <img src={place} alt="" />
            <select name="city" id="city">
              <option value="">Бишкек</option>
              <option value="osh">Ош</option>
              <option value="jalalabad">Нарын</option>
              <option value="karakol">Каракол</option>
            </select>
          </div>

          <img src={phone} alt="" />
          <p className='p'>+996 (505) 439 323</p>

          <div className='div2'>
            <img src={bag} alt="" />
            <span>
              <p>4</p> </span>
            <p>В корзине (4 товара)</p>
          </div>

          <div style={{ display: "flex", gap: "18px" }}>
            <a href="https://telegram.org"><img src={tg} alt="Telegram" /></a>
            <a href="https://vk.com"><img src={vk} alt="ВКонтакте" /></a>
            <a href="https://ok.ru"><img src={ok} alt="Одноклассники" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
