import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import URL from '../DATA/URL.jsx';

export default function PostFile() {
    const [file, setFile] = useState({
        idProduct: null,
        file: null
    });
    const upLoadFile = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            setFile({
                idProduct: '15-dh0172tx',
                file: imageFile
            });
        } else {
            setFile(null);
        }
    }
    const postImage = () => {
        const image = new FormData();
        image.append('file', file.file);
        image.append('idProduct', file.idProduct);
        axios.post(`${URL}/data/picture`, image)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log("Khong the post anh"));
    }
    return (
        <div>
            <div>
                <input type="file" onChange={(e) => upLoadFile(e)} />
                <button onClick={() => postImage()}>Up image</button>
            </div>
        </div>
    )
}
