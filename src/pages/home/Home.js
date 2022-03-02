import React from 'react'
import Header from "../../header/Header"
import Preview from "../../preview/Preview"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

export const Home = () => {
  return (
    <>
      <Header/>
      <div className='home'>
        <Preview />
        <Sidebar />
      </div>
    </>
  )
}

