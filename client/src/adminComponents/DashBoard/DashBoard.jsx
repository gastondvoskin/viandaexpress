import React from 'react'
import PieChart from './PieChart'
import MyLineChart from './LineChart'


const DashBoard = () => {
  return (
    <div>
        <h1>TABLERO</h1>
        <div>
          <PieChart/>
        </div>
        <div>
          <MyLineChart/>
        </div>
    </div>
  )
}

export default DashBoard