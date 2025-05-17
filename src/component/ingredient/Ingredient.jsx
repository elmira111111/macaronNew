import React from 'react'
import "./Ingredient.scss"
import {best} from "../../data"

function Ingredient() {
  return (
    <div className='ingredient'>
      {
        best.map((item) => (
            <div className='best' key={item.id}>
                <img src={item.img} alt="" />

                <div className='best-content'>
                    <h2>{item.title}</h2>
                    <p>{item.p}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Ingredient
