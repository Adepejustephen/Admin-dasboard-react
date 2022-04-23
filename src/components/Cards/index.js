import React from 'react'
import { cardsData } from '../../data/data'
import Card from '../Card'
import './Cards.css'

const Cards = () => {
  return (
      <div className='cards'>
          {cardsData.map((item, id) => {
              return (
                  <div className="card_container" key={id}>
                      <Card
                          title={item.title}
                          color={item.color}
                          barValue={item.barValue}
                          value={item.value}
                          png={item.png}
                          series={item.series}
                      />
                  </div>
              )
          })}
        </div>
  )
}

export default Cards