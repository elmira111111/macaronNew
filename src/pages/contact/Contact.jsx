import React from 'react'
import "./Contact.scss"
import Macaron from "../../component/Macaron/Shop.jsx"
import { Link } from 'react-router-dom'
import image4 from "../../assets/images/image4 copy.png"

function Contact() {
  return (
    <div className='contact'>
      <Macaron/>

      <div className='contact-text'>
        <Link to="/" className='breadcrumb-link'><h2>Главная &gt; <span>Контакты</span></h2></Link>
        

        <div className='text'>
            <img src={image4} alt="" />

            <div>
                <h1>Контакты</h1>

                <div>
                    <h3>Производство</h3>
                    <p>Маршала Тухачевского, 22 Время работы: с 8 до 19:30.
                    </p>
                </div>

                <div>
                    <h3>Пункты самовывоза:</h3>
                    <p>Кафе “Морошка”. Маршала Тухачевского, 22 (с 8 до 19:30) 
                        <br /> 
                        <br />
                    Кафе “Мята”. Наб канала Грибоедова, 37 (с 10 до 22)</p>
                </div>

                <div>
                    <h3>Телефоны:</h3>
                    <p>8 (812) 309-82-88 основной номер
                        <br />
                        <br />
                    8 (981) 841-85-25 для жалоб и предложений</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
