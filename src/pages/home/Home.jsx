import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import img1 from "../../assets/images/image1.png"
import img2 from "../../assets/images/image2.png"
import img3 from "../../assets/images/image3.png"
import img4 from "../../assets/images/image4.png"
import img5 from "../../assets/images/image5.png"
import img21 from "../../assets/images/image21.png"
import img22 from "../../assets/images/image22.png"
import img23 from "../../assets/images/image23.png"
import img24 from "../../assets/images/image24.png"
import img25 from "../../assets/images/image25.png"
import img26 from "../../assets/images/image26.png"
import img30 from "../../assets/images/image30.png"
import img41 from "../../assets/images/image41.png"
import Stock from "../../component/Stock/Stock.jsx"
import svg16 from "../../assets/images/16.svg"
import svg15 from "../../assets/images/15.svg"
import News from '../../component/New/News.jsx'
import Ingredient from '../../component/ingredient/Ingredient.jsx'
import Sets from '../../component/sets/Sets.jsx'

function Home() {
    return (
        <div className='home'>
            <div className='home-content'>
                <ul>
                    <Link to="contact" className="breadcrumb-link"><li>КОНТАКТЫ</li></Link>
                    
                    <li>Собрать Набор</li>
                    <li>СЛАДКИЕ ДНИ</li>
                </ul>

                <svg width="200" height="50">
                    <line x1="10" y1="25" x2="190" y2="25" stroke="black" strokeWidth="2" />
                    <circle cx="10" cy="25" r="5" fill="black" />
                </svg>

                <img src={img1} alt="" />

                <svg width="200" height="50">
                    <line x1="10" y1="25" x2="190" y2="25" stroke="black" strokeWidth="2" />
                    <circle cx="190" cy="25" r="5" fill="black" />
                </svg>

                <ul style={{ marginLeft: '50px' }}>
                    <li>Подарочные Наборы</li>
                    <li>ГАРАНТИЯ СВЕЖЕСТИ</li>
                </ul>
            </div>

            <div className='h' >
                <div className='beg'>
                    <img src={img2} alt="" />
                    <div className='begraunt'>
                        <div className='div1' style={{ display: "flex", flexDirection: 'column', alignItems: "center", width: "272px", height: "48px" }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', }}>
                                <span style={{ position: 'relative', fontFamily: "sans-serif" }}>
                                    <span >mac</span>
                                    <span style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '14px',
                                        width: '30px',
                                        borderTop: '1.5px solid rgb(0,0,0)'
                                    }}></span>
                                </span>
                                <span style={{ fontFamily: "sans-serif" }}>arons</span>
                                <span style={{ position: 'relative', fontFamily: "sans-serif" }}>
                                    <span>hop</span>
                                    <span style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: '10px',
                                        width: '30px',
                                        borderTop: '1.5px solid black',
                                    }}></span>
                                </span>
                            </h3>
                            <p>since 2013</p>
                        </div>
                        <h2 style={{ fontFamily: "sans-serif" }}>Настоящая любовь</h2>
                        <div className='text'>
                            <h4 style={{ fontFamily: 'sans-serif' }}>Пирожные макарон и другие десерты
                                из натуральных ингредиентов, приготовленные с любовью </h4>
                        </div>
                    </div>
                </div>
            </div>


            <div className='phon'>

                <div className='style'>
                    <div className='card-content'>

                        <div className='card' style={{ position: "relative", overflow: "hidden" }}>
                            {/* Сол тарабындагы түс */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgb(250, 226, 209)",
                                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                                zIndex: 0
                            }}></div>

                            {/* Оң тарабындагы түс */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(255, 219, 195, 1 )",
                                clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                                zIndex: 0
                            }}></div>

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ display: "flex", justifyContent: "center", paddingTop: "36px" }}>
                                    <div className='icon'>
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                                <h2>Готовые наборы →</h2>
                                <p>
                                    Готовые наборы со скидкой. <br />
                                    Вы можете подобрать набор на подходящий случай.
                                </p>
                            </div>
                        </div>

                        <div className='card' style={{ position: "relative", overflow: "hidden" }}>
                            {/* Сол тарабындагы түс */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgb(255, 194, 204)",
                                clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                                zIndex: 0
                            }}></div>

                            {/* Оң тарабындагы түс */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgb(255, 223, 229)",
                                clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                                fontFamily: "sans-serif",
                                zIndex: 0
                            }}></div>

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ display: "flex", justifyContent: "center", paddingTop: "36px" }}>
                                    <div className='icon'>
                                        <img src={img4} alt="" />
                                    </div>
                                </div>
                                <h2>Собрать свой набор →</h2>
                                <p>Выбрать количество макарун, и выбрать вкусы</p>
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <div
                            className="card1-2"
                            style={{ position: "relative", overflow: "hidden", }}
                        >
                            {/* Сол тарабындагы түс */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgb(253, 213, 205)",

                                    clipPath: "polygon(100% 0, 0 100%, 0 0)",
                                    zIndex: 0,
                                }}
                            />
                            {/* Оң тарабындагы түс */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgb(252, 222, 215)",
                                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                                    zIndex: 0,
                                }}
                            />
                            {/* Контент поверх */}
                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    paddingTop: "36px",
                                }}
                            >
                                <div className="icon">
                                    <img
                                        style={{ width: "48px", height: "64px" }}
                                        src={img5}
                                        alt=""
                                    />
                                </div>
                                <h2>Свадебные предложения →</h2>
                                <p>
                                    Нежные пирожные макаронс с разными вкусами <br />
                                    для украшения вашего свадебного торжества
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <p style={{
                    color: "rgb(41,41,41)",
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "90px"
                }}>Акции</p>

                <Stock />


                <div className='bs'>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <div style={{ position: 'relative', bottom: "20px", left: "40px", }}>
                    <img style={{
                        width: "150px",
                        height: "147px",
                        objectFit: "cover"
                    }} src={img26} alt="" />
                </div>

                <h3 className='sets'>Популярные наборы</h3>
                <div style={{ display: "flex", justifyContent: "end", position: "relative", bottom: "65px", right: "40px" }}>
                    <img className='im' style={{
                        objectFit: "cover",
                        width: "100px",
                        height: "78px"
                    }} src={svg16} alt="" />
                </div>



                {/* <div className='container'>
                    <div className='container-content'>
                        <img src={img21} alt="" />

                        <div className='content2'>
                            <h3>Сердце</h3>
                            <h6>24 штуки в коробке в виде сердца. <br />
                                Ассорти из 6 вкусов </h6>
                        </div>

                        <div className='div6-3'>
                            <div className='line-top'></div>
                            <div className='price-img'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p>2800 руб</p>
                                </div>
                                <div className='line-vertical'></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={svg15} />
                                    <h6 style={{
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "17px",
                                        paddingTop: "5px"
                                    }}>В корзину</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-content'>
                        <img src={img22} alt="" />

                        <div className='content2'>
                            <h3>Красота спасёт мир </h3>
                            <h6>Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан </h6>
                        </div>

                        <div className='div6-3'>
                            <div className='line-top'></div>
                            <div className='price-img'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p>750 руб</p>
                                </div>
                                <div className='line-vertical'></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={svg15} />
                                    <h6 style={{
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "17px",
                                        paddingTop: "5px"
                                    }}>В корзину</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-content'>
                        <img src={img23} alt="" />

                        <div className='content2'>
                            <h3>Круглый набор </h3>
                            <h6>40 макаронс в круглой коробке с персональной надписью</h6>
                        </div>

                        <div className='div6-3'>
                            <div className='line-top'></div>
                            <div className='price-img'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p>3900 руб</p>
                                </div>
                                <div className='line-vertical'></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={svg15} />
                                    <h6 style={{
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "17px",
                                        paddingTop: "5px"
                                    }}>В корзину</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-content'>
                        <img src={img24} alt="" />

                        <div className='content2'>
                            <h3>Набор на 9 </h3>
                            <h6>Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня</h6>
                        </div>

                        <div className='div6-3'>
                            <div className='line-top'></div>
                            <div className='price-img'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p>950 руб</p>
                                </div>
                                <div className='line-vertical'></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={svg15} />
                                    <h6 style={{
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "17px",
                                        paddingTop: "5px"
                                    }}>В корзину</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-content'>
                        <img src={img25} alt="" />

                        <div className='content2'>
                            <h3>Набор на 16 </h3>
                            <h6>Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад </h6>
                        </div>

                        <div className='div6-3'>
                            <div className='line-top'></div>
                            <div className='price-img'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p>1500 руб</p>
                                </div>
                                <div className='line-vertical'></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={svg15} />
                                    <h6 style={{
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "17px",
                                        paddingTop: "5px"
                                    }}>В корзину</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-content'>
                        <img src={img23} alt="" />

                        <div className='content2'>
                            <h3>Сердце</h3>
                            <h6>24 штуки в коробке в виде сердца. <br />
                                Ассорти из 6 вкусов </h6>
                        </div>

                        <div className='div6-3'>
                            <div className='line-top'></div>
                            <div className='price-img'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <p>2500 руб</p>
                                </div>
                                <div className='line-vertical'></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={svg15} />
                                    <h6 style={{
                                        color: "rgba(0, 0, 0, 0.88)",
                                        fontFamily: "Montserrat",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "17px",
                                        paddingTop: "5px"
                                    }}>В корзину</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <Sets/>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className='b'>Все праздничные наборы</button>
                </div>

                <h2 style={{
                    color: "rgb(41, 41, 41)",
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "600",
                    lineHeight: "37px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    marginTop: "80px"
                }}>Новости</h2>

                <News />


                <div className='btns'>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                  <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
                    <Link className='breadcrumb-link' to="/about">
                        <button className='new'>Все новости</button>
                    </Link>
                </div>

                <div style={{ position: "relative", right: "90px", bottom: "70px", zIndex: 1 }}>
                    <img className='im' style={{
                        objectFit: "cover",
                        width: "350px",
                        height: "286px",
                        pointerEvents: "none"  
                    }} src={img30} alt="" />
                </div>


                <h2 style={{
                    color: "rgb(41, 41, 41)",
                    fontFamily: "sans-serif",
                    fontSize: "30px",
                    fontWeight: "600",
                    lineHeight: "37px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    position: "relative",
                    bottom: "200px"
                }}>Мы обо всём позаботились</h2>

                <Ingredient />

                <div style={{ position: "relative", display: "flex", justifyContent: "end", bottom: "420px", left: "50px" }}>
                    <img className='im' style={{
                        objectFit: "cover",
                        width: "495px",
                        height: "414px"
                    }} src={img41} alt="" />
                </div>



            </div>

        </div>
    )
}

export default Home
