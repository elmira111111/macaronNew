import "./weddingCards.css";

import weddingImg1 from "../../../assets/weddingCardsImg1.png";
import weddingImg2 from "../../../assets/weddingCardsImg2.jpg";
import weddingImg3 from "../../../assets/weddingCardsImg3.png";
import weddingImg4 from "../../../assets/weddingCardsImg4.png";
import weddingImg5 from "../../../assets/weddingCardsImg5.png";
import weddingImg6 from "../../../assets/weddingCardsImg6.png";
import basket from "../../../assets/basketIconBlack.svg"

const naborData = [
    {
        id: 1,
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб",
        image: weddingImg1
    },
    {
        id: 2,
        title: "Красота спасёт мир",
        description: "Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
        price: "750 руб",
        image: weddingImg2
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: weddingImg3
    },
    {
        id: 4,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: weddingImg4
    },
    {
        id: 5,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: weddingImg5
    },
    {
        id: 6,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: weddingImg6
    }
];

const WeddingCards = () => {
    return (
        <div className="nabor-section container-app">
            <h2 className="wedding-title">Наборы для свадьбы</h2>
            <div className="nabor-cards">
                {naborData.map((item) => (
                    <div className="nabor-card" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="nabor-card-info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className="nabor-bottom">
                            <span className="price">{item.price}</span>
                            <button className="cart-btn"><img src={basket} className={'nabor-basket'} style={{width: '13px', height: '19px'}} alt=""/> В корзину</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeddingCards;
