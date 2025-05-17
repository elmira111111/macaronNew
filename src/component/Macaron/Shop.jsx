import React from 'react'
import "./Shop.scss"
import { Link } from 'react-router-dom'
import svg4 from "../../assets/images/4 copy.svg"
import svg8 from "../../assets/images/8 copy.svg"
import image1 from "../../assets/images/image1.png"

function Shop() {
  return (
    <div className='shop'>
      <div className="cap">
        <ul>
          <Link to="/contact" className='breadcrumb-link'>
            <li>КОНТАКТЫ</li>
          </Link>

          <li> СОБРАТЬ НАБОР</li>
          <li>СЛАДКИЕ ДНИ</li>
        </ul>

        <div >
          <svg width="200" height="50">
            <line x1="10" y1="25" x2="190" y2="25" stroke="black" strokeWidth="2" />
            <circle cx="10" cy="25" r="5" fill="black" />
          </svg>

          <img src={image1} alt="" />


          <svg width="200" height="50">
            <line x1="10" y1="25" x2="190" y2="25" stroke="black" strokeWidth="2" />
            <circle cx="190" cy="25" r="5" fill="black" />
          </svg>
        </div>




        <ul>
          <li>ПОДАРОЧНЫЕ НАБОРЫ</li>
          <li>ГАРАНТИЯ СВЕЖЕСТИ</li>
        </ul>
      </div>

        <div className='adaptive-cap'>
              <div>
                <img style={{ width: "20px", height: "12px" }} src={svg8} alt="" />
                <img style={{ width: "45px", height: "45px", objectFit:"contain" }} src={image1} alt="" />
                <div className='card3'>
                  <img src={svg4} alt="" />
                  <span>4</span>
                </div>
              </div>
      
            </div>
    </div>
  )
}

export default Shop
