import React from 'react'
import { useState, Fragment } from 'react';
import axios from 'axios';
import "./upload.css"

const Upload = () => {

    const [files, setFiles] = useState([]);

    const onChange = e => {
      // console.log(e.target.files);
      setFiles(e.target.files)
    };
    console.log(files);
    const onSubmit = async e => {
      e.preventDefault();
      const formData = new FormData();
      Object.values(files).forEach(file=>{
        formData.append("images", file);
        
      });
  
      try {
        const res = await axios.post('http://192.168.82.161:5000/detections', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });
        console.log(res);
      } catch (err) {
        if (err.response.status === 500) {
          console.log(err);
        } else {
          console.log(err.response.data.msg);
        }
      }
    };

    return (
        <Fragment>
             <div className='write'>
                <img className='writeImg' 
                src='https://images.unsplash.com/photo-1514195037031-83d60ed3b448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' alt=''/>
                <form className='writeForm' onSubmit={onSubmit}>
                    <div className='writeFormGroup'>
                        <label htmlFor='fileInput'>
                            <i className="writeIcon fa-solid fa-folder-plus"></i>
                        </label>
                        <input type="file" id='fileInput' name="uploadImages" multiple onChange={onChange} style={{display: "none"}}/>
                        <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                    </div>
                    <div className='writeFormGroup'>
                        <textarea placeholder='Tell your story...' 
                        typeof='text' className='writeInput' writeText></textarea>
                    </div>
                    <button type='submit' value='Upload' className='writeSubmit'>Upload</button>
                </form>
            </div>
        </Fragment>
    )
}

export default Upload;