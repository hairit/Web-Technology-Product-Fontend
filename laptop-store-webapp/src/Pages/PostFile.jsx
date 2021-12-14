import axios from 'axios';
import React from 'react';
import {useState} from 'react';

export default function PostFile() {
    const [file, setFile] = useState(null);
    const upLoadFile = e => {
        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            setFile(imageFile);
        }else{
            setFile(null);
        }
    }
    const postImage = () => {
        const image = new FormData();
        image.append('file',file);
        axios.post('https://localhost:44343/data/image',image)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log("Khong the post anh"));
    }
    return (
        <div>
            <div>
                <input type="file" onChange={(e)=>upLoadFile(e)}  />
                <button onClick={()=>postImage()}>Up image</button>
            </div>
        </div>
    )
}
