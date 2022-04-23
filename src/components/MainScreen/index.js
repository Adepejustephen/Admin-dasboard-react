import React from 'react'
import Cards from '../Cards'
import Table from '../Table'
import './MainDash.css'

const MainScreen = () => {
  return (
    <div className="mainScreen">
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <Cards />
      <Table/>
    </div>
  )
}

export default MainScreen