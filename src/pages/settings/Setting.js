import React from 'react'
import Sidebar from "../../sidebar/Sidebar"
import "./setting.css"

const Setting = () => {
  return (
    <div className='setting'>
        <div className='settingWrapper'>
            <div className='settingTitle'>
                <span className='settingUpdateTitle'>Update Your Account</span>
                <span className='settingDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingForm'>
                <label>Profile Picture</label>
                <div className='settingPP'>
                    <img src='https://cdn4.buysellads.net/uu/1/50174/1564282856-carbon.png' alt=''/>
                    <label htmlFor='fileInput'>
                        <i className="settingPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Nanthawat'/>
                <label>Email</label>
                <input type="email" placeholder='Nanthawat@gmail.com'/>
                <label>Password</label>
                <input type="password"/>
                <button className='settingSubmitButton'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting;
