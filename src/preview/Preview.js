import React, { lazy } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './preview.css'
import Sidebar from '../sidebar/Sidebar';

import {Buffer} from 'buffer';
Buffer.from('anything','base64');
window.Buffer = window.Buffer || require("buffer").Buffer;

const Preview = () => {

  const [label, setLabel] = useState([]);
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const getData = () => {
    axios.get("http://192.168.202.161:5000/upload").then((response) => {
      setLabel(response.data)
    });
  };

  const loadImg = () => {
    axios.get("http://localhost:3002/img").then((response) => {
      // console.log(response.data)
      setImg(response.data)
    });
  };

  function dosomething(e) {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <div className='preview' >
     <button onClick={getData}>CLICK</button>
     <button onClick={loadImg}>LoadImg</button>
     
      {/* <button value={"Bear"} onClick={sendMessage}>CLICK</button> */}
      
      {/* <img src={require("file:D:/Project/login-simple/client/public/Bear/dbe35a5bae9ae29c_jpg.rf.eb1d123e8519a2634cea5f6565cda35c.jpg")} /> */}
      {Object.keys(label).map(key => {
        return(
          <button value={label[key]} onClick={dosomething}>{label[key]}</button>

        )
      })};

      {Object.keys(img).map(key => {
        return(
          <img src={img[key]}/>
        )
      })};
    </div>
  )
}

export default Preview;
