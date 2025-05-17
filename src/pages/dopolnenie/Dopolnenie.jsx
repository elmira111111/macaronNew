import React from 'react';
import "./dopolnenie.css"

const Dopolnenie = () => {
    return (
        <div className="dopolnenie-wrapper">
            <nav className="breadcrumbs">
                Главная > Собрать набор > Выбрать количество > Выбрать вкусы > <a href="#">Дополнительно</a>
            </nav>

            <h1 className="title">Дополнительно</h1>

            <div className="container container-app">
                <div className="products">
                    <div className="product" style={{ width: '271px', height: '343px' }}>
                        <div className="image"></div>
                        <div className="product-title">Открыточка с пожеланием</div>
                        <div className="price">30 руб</div>
                        <div className="counter">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>

                    <div className="product" style={{ width: '271px', height: '343px' }}>
                        <div className="image"></div>
                        <div className="product-title">Открытка 2</div>
                        <div className="price">50 руб</div>
                        <div className="counter">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>

                    <div className="product" style={{ width: '271px', height: '343px' }}>
                        <div className="image"></div>
                        <div className="product-title">Лента атласная</div>
                        <div className="price">0 руб</div>
                        <div className="counter">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>

                    <div className="product" style={{ width: '271px', height: '343px' }}>
                        <div className="image"></div>
                        <div className="product-title">Набор эклеров 6 шт.</div>
                        <div className="old-price">600 руб</div>
                        <div className="price">450 руб</div>
                        <div className="counter">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <div className="summary">
                        <p>Набор 12 шт. <span className="highlight">700 руб.</span></p>
                        <p>Открытка <span className="highlight">30 руб.</span> <span className="close">×</span></p>
                        <p>Набор эклеров <span className="highlight">450 руб.</span> <span className="close">×</span></p>
                    </div>
                    <button className="done-btn">Готово</button>
                </div>
            </div>
        </div>
    );
};

export default Dopolnenie;
