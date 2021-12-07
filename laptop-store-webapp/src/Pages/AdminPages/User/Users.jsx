import React from 'react'
import './Users.css'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
export default function Users() {
    const [usersncd, setUsersncd] = useState([]);
    const saveUserncd = useRef(null);
    const [updateDatancd, setUpdateDatancd] = useState(false);
    const [activencd, setActivencd] = useState(false);
    const [userncd, setUserncd] = useState({ id: null, firstname: null, lastname: null, email: null, pass: null, sdt: null, diachi: null, nameimage: null, mode: 'CUSTOMER' });
    useEffect(() => {
        axios.get('https://localhost:44343/data/user/')
            .then(res => setUsersncd(res.data))
            .catch(() => setUsersncd([]));
    }, [updateDatancd]);
    const reLoadncd = () => {
        if (updateDatancd === false) setUpdateDatancd(true);
        else setUpdateDatancd(false);
    }
    const resetUserncd = () => {
        saveUserncd.current = { id: null, firstname: null, lastname: null, email: null, pass: null, sdt: null, diachi: null, nameimage: null, mode: null }
        setUserncd({ id: null, firstname: null, lastname: null, email: null, pass: null, sdt: null, diachi: null, nameimage: null, mode: null });
    }
    return (
        <div className="admin-userncd">
            <div className="userncd-panel">
                <div className="userncd-panel-main">
                    <table className="userncd-table">
                        <thead className="userncd-table-head">
                            <tr className="userncd-table-row">
                                <th className="userncd-table-cell cell-id">Mã</th>
                                <th className="userncd-table-cell cell-name">Họ Tên</th>
                                <th className="userncd-table-cell cell-email">Email</th>
                                <th className="userncd-table-cell cell-pass">Mật Khẩu</th>
                                <th className="userncd-table-cell cell-address">Địa Chỉ</th>
                                <th className="userncd-table-cell cell-phone">Số Điện Thoại</th>
                            </tr>
                        </thead>
                        <tbody className="userncd-table-body">
                            {usersncd.map((item, index) => (
                                <tr className="userncd-table-row userncd-item" key={index}
                                    onClick={() => {
                                        if(item.id === userncd.id) {
                                            if(activencd === false){
                                                setUserncd(item);
                                                saveUserncd.current = item;
                                                setActivencd(true);
                                            } else {
                                                resetUserncd();
                                                setActivencd(false);
                                            }
                                        }else if (item.id !== userncd.id) {
                                            setUserncd(item);
                                            saveUserncd.current = item;
                                            setActivencd(true);
                                        }
                                    }}
                                    style={userncd !== null ? {
                                        borderBottom: '0.1px solid rgb(228, 224, 224)',
                                        color: item.id === userncd.id ? '#596ce5' : '#5c5b5b',
                                    }
                                        : { borderBottom: '0.1px solid rgb(228, 224, 224)' }}>
                                    <td className="userncd-table-cell">{item.id}</td>
                                    <td className="userncd-table-cell">{item.firstname + " " + item.lastname}</td>
                                    <td className="userncd-table-cell">{item.email}</td>
                                    <td className="userncd-table-cell">{item.pass}</td>
                                    <td className="userncd-table-cell">{item.diachi}</td>
                                    <td className="userncd-table-cell">{item.sdt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
