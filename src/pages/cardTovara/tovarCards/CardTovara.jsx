import "./cardTovara.css"
import korzinaImg from "../../../assets/korzinaImg.png";
import korzinaIcon1 from "../../../assets/korzinaIcon1.svg";
import korzinaIcon2 from "../../../assets/korzinaIcon2.svg";
import korzinaIcon3 from "../../../assets/korzinaIcon3.svg";
import korzinaBasket from "../../../assets/korzinaBasket.svg";


const CardTovara = () => {
    return (
        <div>
            <nav className="breadcrumbs">
                Главная &gt; Готовые набоы  &gt; <span>Сердце</span>
            </nav>
            <div className="product-card container-app">
                <div className="image-section">
                    <img src={korzinaImg} alt="Сердце макаронс" className="main-image"/>
                    <div className="thumbnails">
                        <img src={korzinaImg} alt="Превью 1"/>
                        <img src={korzinaImg} alt="Превью 2"/>
                        <img src={korzinaImg} alt="Превью 3"/>
                    </div>
                </div>

                <div className="info-section">
                    <h1 className="title">Сердце</h1>
                    <p className="subtitle">40 макаронс в круглой коробке с персональной надписью</p>

                    <div className="flavors">
                        <h3>Вкусы:</h3>
                        <ul>
                            <li>Яблоко <span>4 шт.</span></li>
                            <li>Вишня<span>12 шт.</span></li>
                            <li>Кокос<span>8 шт.</span></li>
                        </ul>
                    </div>

                    <div className="price-section">
                        <p className="price">2800 сом</p>
                        <button className="add-to-cart"><img src={korzinaBasket} alt=""/>В корзину</button>
                    </div>

                    <ul className="delivery-info">
                        <li><img src={korzinaIcon1} alt=""/> Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до
                            21. Бесплатно при заказе на
                            сумму от 2000 руб
                        </li>
                        <li><img src={korzinaIcon2} alt=""/> Самовывоз бесплатно. Через 3 часа после оплаты заказа</li>
                        <li><img src={korzinaIcon3} alt=""/> Можем преподнести как анонимный подарок!</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default CardTovara;