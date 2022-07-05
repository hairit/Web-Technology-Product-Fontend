import React from 'react';
import { MdAddBox, MdDelete, MdEdit } from "react-icons/md"
import { useState, useEffect, useRef } from 'react';
import "./Product.css"
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'


export default function Product({ idUser, clickEditProduct }) {
    let history = useHistory();
    const [pros, setpros] = useState([]);
    const [type, settype] = useState("");
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState([]);
    useEffect(() => {
        if (type === "")
            axios.get(`https://localhost:44343/data/product`)
                .then((res) => {
                    setpros(res.data);
                })
                .catch((err) => console.log(err))
        else {
            axios.get(`https://localhost:44343/data/product/type=${type}`)
                .then((res) => {
                    setpros(res.data);
                })
                .catch((err) => console.log(err))
        }
    }, [type])
    const handleSearch = (e) => {
        if (e.target.value) 
        { 
            const temp = [];
            if (type === "")
                axios.get(`https://localhost:44343/data/product`)
                    .then((res) => {
                        setSearch(res.data);
                    })
                    .catch((err) => console.log(err))
            else {
                axios.get(`https://localhost:44343/data/product/type=${type}`)
                    .then((res) => {
                        setSearch(res.data);
                    })
                    .catch((err) => console.log(err))
            }
            search.forEach((pro)=>{
                if (pro.id.indexOf(e.target.value)!==-1) temp.push(pro);
            })
            setpros(temp);
        } else {
            if (type === "")
                axios.get(`https://localhost:44343/data/product`)
                    .then((res) => {
                        setpros(res.data);
                    })
                    .catch((err) => console.log(err))
            else {
                axios.get(`https://localhost:44343/data/product/type=${type}`)
                    .then((res) => {
                        setpros(res.data);
                    })
                    .catch((err) => console.log(err))
        }
        }
    }

    const setHienThi = (id, ht) => {
        if (ht === 1) console.log("Hiển thị: " + id);
        else console.log("Không hiển thị: " + id);
    }

    const setShowItem = (e, id) => {
        if (e.target.checked) setHienThi(id, 1);
        else setHienThi(id, 0)
    }


    const renderTable = () => {
        return (
            pros.map((pro, index) => {
                if (index <= 11 * page && index >= 11 * (page - 1))
                    return (
                        <tr key={pro.id} className="product-list-item">
                            <td className="product-item-item">{index}</td>
                            <td className="product-item-item">{pro.id}</td>
                            <td className="product-item-item">{pro.ten}</td>
                            <td className="product-item-item">{pro.gia}</td>
                            <td className="product-item-item">{pro.idloai}</td>
                            <td className="product-item-item">{pro.hienthi === 1 ? <input type="checkbox" defaultChecked onClick={(e) => setShowItem(e, pro.id)} /> : <input type="checkbox" onClick={(e) => setShowItem(e, pro.id)} />}</td>
                            <td className="product-item-item"><MdEdit className="product-item-icon" onClick={() => clickEdit(pro.id)} /></td>
                        </tr>
                    )
            }));
    }
    const clickEdit = (id) => {
        clickEditProduct(id);
        history.push(`/admin/${idUser}/product/edit/${id}`)
    }
    return (
        <div className="product-layout">
            <div className="product-button">
                <select name="product type" className="product-selection" onChange={(e) => settype(e.target.value)} >
                    <option value="" >Tất cả </option>
                    <option value="mouse" >Chuột</option>
                    <option value="laptop">Laptop</option>
                    <option value="screen" >Màn hình</option>
                    <option value="headphone" >Tai nghe</option>
                    <option value="keyboard" >Bàn phím</option>
                    <option value="pc" >Máy tính để bàn</option>
                </select>
                <input className='product-search' type={'text'} placeholder='Nhập mã để tìm kiếm' onChange={(e)=>handleSearch(e)}></input>
                <div className="product-button-button">
                    <Link to={`/admin/${idUser}/product/add`} > <MdAddBox className="product-button-icon" /> </Link>
                </div>

            </div>
            <div className="product-list">
                <table className="table-product" >
                    <tr className='product-header-table'>
                        <th className='product-item-header'>STT</th>
                        <th className='product-item-header'>ID</th>
                        <th className='product-item-header'>Tên</th>
                        <th className='product-item-header'>Giá</th>
                        <th className='product-item-header'>ID loại</th>
                        <th className='product-item-header'>Hiển thị</th>
                        <th className='product-item-header'>Sửa</th>
                    </tr>
                    {renderTable()}
                </table>    
            </div>
            <div className='product-bottom-button'>
                <button className="product-page-button" onClick={() => { (page > 1) ? setPage(page - 1) : setPage(page) }}>Trang Trước </button>
                <input className="product-page-input" value={page} readOnly />
                <button className="product-page-button" onClick={() => { setPage(page + 1) }}>Trang Sau </button>
            </div>
        </div>
    )
}
