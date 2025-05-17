import React from 'react'
import "./Footer.scss"
import svg8 from "../../assets/images/8.svg"
import svg9 from "../../assets/images/9.svg"
import svg10 from "../../assets/images/10.svg"
import svg11 from "../../assets/images/11.svg"
import svg12 from "../../assets/images/12.svg"
import svg13 from "../../assets/images/13.svg"

function Footer() {
  return (
    <div>
      <div className='footer2'>
      <div className="footer2-1">
      
      <div className='footer22'  >
        <div className='footeItem' >
          <div className="footer-item">
            <img src={svg8} alt="" />
            <p>Готовим вручную <br /> и с любовью</p>

          </div>
          <div className="footer-item">
            <img src={svg9} alt="" />
            <p>Доставим <br /> в день заказа</p>
          </div>
          <div className="footer-item">
            <img src={svg10} alt="" />
            <p>100% <br /> миндальная мука и натуральные ингредиенты</p>
          </div>
        </div>

        <div>
          <p className='p'>© 2021 Макароншоп <br />ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, <br /> дом 22 </p>
        </div>
      </div>

  
     
 
        <div  className='footer2-3'>
          <h3>Информация</h3>
          <ul>
            <li>О компании </li>
            <li>Гарантии вкуса <br /> и свежести</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className='footer2-3'>
          <h3>Каталог</h3>
          <ul>
            <li>Каталог десертов</li>
            <li>Готовые наборы</li>
            <li>Собрать свой набор</li>
            <li>Наборы с печатью</li>
            <li>Свадебные предложения</li>
            <li>Акции</li>
          </ul>
        </div>

        <div >
          <h3 style={{
            color: "rgb(41,41,41)",
            fontFamily: "sans-serif",
            fontSize: "18px",
            fontWeight: "500"
          }}>+996 (505) 439 323</h3>
          <p style={{
            color: "rgb(41,41,41)",
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            paddingTop:"5px",
            paddingLeft :'60px'
 
          }}>с 9:00 до 21:00</p>

          <div className='i'>
            <img src={svg11} alt="" />
            <img src={svg12} alt="" />
            <img src={svg13} alt="" />
          </div>
        </div>

      </div>
    </div>

    <div className='class'>
            <div className="class-name">
                <div className="footer-item">
                    <img src={svg8} alt="" />
                    <p>Готовим вручную и с любовью</p>
                </div>
                <div className="footer-item">
                    <img src={svg9} alt="" />
                    <p>Доставим в день заказа</p>
                </div>
                <div className="footer-item">
                    <img src={svg10} alt="" />
                    <p>100% <br /> миндальная мука и натуральные ингредиенты</p>
                </div>
            </div>

            <div className='content'>
                <p>© 2021 Макароншоп <br /> ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, 22
                </p>
                <div>
                    <h3>+7 (812) 309 82 88</h3>
                    <p>с 9:00 до 21:00</p>
                </div>
            </div>

            <div className='imgs'>
                <img src={svg11} alt="" />
                <img src={svg12} alt="" />
                <img src={svg13} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer;
