import React from 'react';
import { useState, Fragment } from 'react';
import axios from 'axios';

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
        const res = await axios.post('http://192.168.228.161:5000/detections', formData, {
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

    return(
        <Fragment>
            <h2>Image Upload</h2>
            <form onSubmit={onSubmit}>
            <div>
                <input
                type='file'
                id='file'
                name="uploadImages"
                multiple
                onChange={onChange}
                />
            </div>
            <input
                type='submit'
                value='Upload'
            />
            </form>
        </Fragment>
    )
};

export default Upload;