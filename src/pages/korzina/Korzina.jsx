import React, { useContext, useState } from "react";
import "./korzina.css";
import { CartContext } from "../../context/CartContext";
import naborImg1 from "../../assets/podarNaborImg1.png";

const Korzina = () => {
    const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleOrderClick = () => {
        setIsModalOpen(true); // Открываем модальное окно
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Закрываем модальное окно
    };

    return (
        <div className="container">
            <div className="korzina-cart container-app">
                <h1>Ваша корзина</h1>
                <p className="korzina-subtitle">
                    {cartItems.length} товара / {total} сом
                </p>

                <div className="korzina-cart-container">
                    <div className="korzina-cart-items">
                        {cartItems.map((item) => (
                            <div className="korzina-item" key={item.id}>
                                <button
                                    style={{
                                        fontSize: '30px',
                                        marginTop: '-15px',
                                        marginLeft: '30px',
                                        color: 'darkgray'
                                    }}
                                    className="korzina-remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    ×
                                </button>

                                <img
                                    src={item.image || naborImg1}
                                    alt={item.name}
                                    className="korzina-product-img"
                                />

                                <div className="korzina-details">
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                    {item.promoText && (
                                        <p className="korzina-promo-text" style={{color: '#ff2e63', fontSize: '14px'}}>
                                            {item.promoText}
                                        </p>
                                    )}
                                </div>

                                <div className="korzina-quantity-control">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>

                                <div className="korzina-price-info">
                                    <p>Цена: <span>{item.price * item.quantity} сом</span></p>
                                    {item.discount && (
                                        <p className="korzina-discount" style={{color: '#ff2e63'}}>
                                            Скидка: -{item.discount * item.quantity} сом
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Итоговая сумма */}
                        <div className="korzina-total-text">
                            <p>Общая стоимость Вашей покупки без учета доставки составит:</p>
                            <span className="korzina-highlighted" style={{
                                fontWeight: 'bold',
                                fontSize: '20px',
                                color: '#ff2e63',
                                marginRight: '10px'
                            }}>
            {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} сом
        </span>
                            <span className="korzina-original-price" style={{
                                textDecoration: 'line-through',
                                color: '#999',
                                fontSize: '16px'
                            }}>
            {
                cartItems.reduce((sum, item) =>
                    sum + (item.price + (item.discount || 0)) * item.quantity, 0
                )
            } сом
        </span>
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
                        <div className="korzina-summary-line" style={{paddingBottom: '10px', borderBottom: "none"}}>
                            <span>Доставка</span>
                            <span>400 сом</span>
                        </div>
                        <div className="korzina-summary-total" style={{paddingTop: '20px'}}>
                            <span>К оплате</span>
                            <span>{total + 400} сом</span>
                        </div>

                        <div className="korzina-promo-code" style={{alignItems: "center"}}>
                            <span>Промокод:</span>
                            <input type="text" placeholder="Введите промокод" className="korzina-promo-code-input"/>
                            <button>Применить</button>
                        </div>

                        <button className="korzina-order-btn" onClick={handleOrderClick}>Оформить заказ</button>
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <button onClick={handleCloseModal} className={'modal-zakryt'}>x</button>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>Подтверждение заказа</h2>
                        <p>Вы уверены, что хотите оформить заказ на сумму {total + 400} сом?</p>
                        <button className={'korzina-modal-btn1'}>Продолжить покупки</button>
                        <button className={'korzina-modal-btn2'}>Оформить сейчас</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Korzina;
