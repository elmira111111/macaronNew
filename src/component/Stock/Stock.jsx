import React from 'react'
import "./Stock.scss"
import { stock } from '../../data'



function Stock() {
    return (
        <div className='stock'>
            {
                stock.map((item, index) => (
                    <div className='cod' key={item.id}>

                        <div
                            className={`item ${item.p === "БЕСПЛАТНАЯ ДОСТАВКА" ? 'blue-p' : item.p === "НОВИНКА" ? 'red-p' : 'red-p'}`}
                            style={{
                                width:
                                    item.p === "БЕСПЛАТНАЯ ДОСТАВКА"
                                        ? "270px"
                                        : item.p === "НОВИНКА"
                                            ? "120px": "220px",
                                             height: "30px",
                            }}
                        >
                            <h3>{item.p}</h3>
                        </div>
                        <img src={item.img} alt="" />
                        <div className={`cod2 ${index === 0 ? 'blue-bg' : 'red-bg'}`}>
                            <p>{item.title}</p>
                        </div>


                    </div>
                ))
            }
        </div >
    )
}

export default Stock
