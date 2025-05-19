import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";
import "./naborCards.css";
import basket from "../../../assets/basketIconBlack.svg";
import img from "../../../assets/podarNaborImg1.png";

const NaborCards = () => {
    const [naborData, setNaborData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch("/api/sets", {
            method: "GET",
            headers: {
                "Authorization": "Bearer ...", // токен обрежь, как надо
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Ошибка при загрузке данных");
                return res.json();
            })
            .then((data) => {
                setNaborData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div className="container">
            <div className="nabor-section container-app">
                <nav className="breadcrumbs">
                    Главная &gt;<span>Подарочные наборы</span>
                </nav>
                <h2 className="nabor-title">Подарочные наборы</h2>

                <div className="nabor-filters">
                    <button>Свадьба</button>
                    <button>День рождения</button>
                    <button>Новый год</button>
                    <button>Без печати</button>
                </div>

                <div className="nabor-cards">
                    {naborData.map((item) => (
                        <div className="nabor-card" key={item.id}>
                            {item.images?.map((image, index) => (
                                <div key={index} className="nabor-img-wrapper">
                                    <img
                                        src={`http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com${image.startsWith("/") ? image : "/" + image}`}
                                        alt={item.name}
                                        className="nabor-img"
                                    />
                                </div>
                            ))}

                            <div className="nabor-card-info">
                                <h1>{item.id}</h1>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="nabor-bottom">
                                <span className="price">{item.price} руб</span>
                                <button className="cart-btn" onClick={() => addToCart(item)}>
                                    <img
                                        src={basket}
                                        className="nabor-basket"
                                        style={{ width: "13px", height: "19px" }}
                                        alt="Корзина"
                                    />
                                    В корзину
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="bottom-button">Показать ещё</button>
            </div>
        </div>
    );
};

export default NaborCards;
