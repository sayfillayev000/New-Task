import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'
import './home.scss'

const index = () => {
  return (
    <div className='home container'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default index