import React from 'react'
import "./About.scss"
import Macaron from "../../component/Macaron/Shop.jsx"
import Present from '../../component/present/Present.jsx'
import { Link } from 'react-router-dom'
import svg14 from "../../assets/images/14 copy.svg"

function About() {
    return (
        <div>
            <Macaron />
            <div className='about'>
                <div className='text'>
                    <div>
                    <Link className='breadcrumb-link' to="/"> <h3>Главная</h3></Link>
                       
                        <img src={svg14} alt="" />
                        <p>Новости</p>
                    </div>
                    <div className='t' >
                        <h2>Главная &gt; <span>Новости</span> </h2>
                    </div>

                    <h1>Новости</h1>
                </div>

                <div className='about-card'>
                    <div className='btns'>
                        <button>Все новости</button>
                        <button >Обновления ассортимента</button>
                        <button>Акции</button>
                        <button>Конкурсы</button>
                        <button>подарок на 8 марта</button>
                        <button>весна</button>
                    </div>

                    <div className='adaptive-btns'>
                    <button>Все новости</button>
                        <button >Обновления ассортимента</button>
                        <button>Акции</button>
                    </div>

                    <Present />

                </div>
            </div>
        </div>

    )
}

export default About
