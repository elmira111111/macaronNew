import React from 'react';
import "./vyborVkusov.css";
import vkusyImg1 from "../../assets/vkusyImg.svg"

const VyborVkusov = () => {
    return (
        <div className="vybor-container container-app">
            <nav className="breadcrumb">
                <a href="#">Главная</a> >
                <a href="#">Собрать набор</a> >
                <a href="#">Выбрать количество</a> >
                <a href="#" className="active">Выбрать вкусы</a>
            </nav>

            <h1 className="title">Выберите вкусы</h1>

            <div className="content">
                <div className="flavors-grid">
                    {["Шоколад, банан", "Облепиха, розмарин", "Чёрный трюфель", "Голубой сыр", "Пармезан", "Песто"].map((name, index) => (
                        <div className="card" key={index}>
                            <img src={vkusyImg1} alt={name} />
                            <h2>{name}</h2>
                            <p>Описание вкуса здесь</p>
                            <div className="counter">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                    ))}
                </div>

                <aside className="summary">
                    <p><strong>7 из 12 шт.</strong> <span className="price">700 руб.</span></p>
                    <ul className="summary-list">
                        {["Ананас", "Яблоко", "Вишня", "Кокос", "Пармезан", "Чесночок"].map((item, idx) => (
                            <li key={idx}>{item} <span>- 1 +</span></li>
                        ))}
                    </ul>
                    <p className="warning">Для продолжения количество макарун должно равняться 12 шт.</p>
                    <button className="btn primary">Оформить заказ</button>
                    <button className="btn secondary">Собрать ещё набор</button>
                </aside>
            </div>
        </div>
    );
};

export default VyborVkusov;
