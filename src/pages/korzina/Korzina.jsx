import React, { useContext } from "react";
import "./korzina.css";
import { CartContext } from "../../context/CartContext.jsx"; // путь подкорректируй
import naborImg1 from "../../assets/podarNaborImg1.png";

const Korzina = () => {
    const { cartItems, increaseQty, decreaseQty } = useContext(CartContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className={"container"}>
            <nav className="korzina-breadcrumbs">
                Главная &gt; <span> Корзина </span>
            </nav>
            <div className="korzina-cart container-app">
                <h1>Ваша корзина</h1>
                <p className="korzina-subtitle">
                    {cartItems.length} товара / {total} сом
                </p>

                <div className="korzina-cart-container">
                    <div className="korzina-cart-items">
                        {cartItems.map((item) => (
                            <div className="korzina-item" key={item.id}>
                                <img
                                    src={naborImg1}
                                    alt={item.name}
                                    className="korzina-product-img"
                                />
                                <div className="korzina-details">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className="korzina-quantity-control">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>
                                <div className="korzina-price-info">
                                    <p>
                                        Цена: <span>{item.price * item.quantity} сом</span>
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="korzina-total-text">
                            Общая стоимость:
                            <span className="korzina-highlighted">{total} сом</span>
                        </div>
                    </div>

                    <div className="korzina-summary">
                        <h3>Итого</h3>
                        <div className="korzina-summary-line">
                            <span>Стоимость товаров</span>
                            <span>{total} сом</span>
                        </div>
                        <div className="korzina-summary-line">
                            <span>Скидка</span>
                            <span>0 сом</span>
                        </div>
                        <div className="korzina-summary-line">
                            <span>Доставка</span>
                            <span>400 сом</span>
                        </div>
                        <div className="korzina-summary-total">
                            <span>К оплате</span>
                            <span>{total + 400} сом</span>
                        </div>

                        <div className="korzina-promo-code">
                            <span>Промокод:</span>
                            <input type="text" placeholder="Введите промокод" />
                            <button>Применить</button>
                        </div>

                        <button className="korzina-order-btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Korzina;
