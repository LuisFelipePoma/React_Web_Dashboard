import './ChartComponent.css'
import React from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { data } from '../../consts/chartConts'

function ChartComponent ({ title }) {
  return (
    <section style={{ width: '90%', height: 500 }} className='chart-graphs'>
      <h1>{title}</h1>
      <ResponsiveContainer maxHeight={400}>
        <ComposedChart
          data={data}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' scale='band' fontFamily='Consolas' />
          <YAxis fontFamily='Consolas' />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
          <Bar dataKey='pv' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='uv' stroke='#ff7300' />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}

export default ChartComponent
