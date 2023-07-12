import React, { useEffect } from 'react'
import PieChart from './PieChart'
import MyLineChart from './LineChart'
import { useDispatch } from 'react-redux';
import { getBestSellersAction } from '../../redux/adminSlice';


const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBestSellersAction())
  },[])
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