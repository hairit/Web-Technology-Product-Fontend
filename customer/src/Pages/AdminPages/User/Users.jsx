import React from 'react'
import './Users.css'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
export default function Users() {
    const [usersncd, setUsersncd] = useState([]);
    const saveUserncd = useRef(null);
    const [updateDatancd, setUpdateDatancd] = useState(false);
    const [value, setValue] = useState(null)
    const [modeSearch, setModeSearch] = useState('email');
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
    const checkPhone = (number) => {
        if (number.length > 11) return false;
        number.forEach(element => {
            if (element <= '0' || element >= '9') return false;
        });
        return true;
    }
    const addUser = () => {
        if (activencd === true) {
            alert("Bỏ chọn người dùng để thêm người dùng mới");
            return;
        }
        if (!userncd.firstname || !userncd.lastname || !userncd.email || !userncd.pass || !userncd.mode) {
            alert("Kiểm tra lại dữ liệu");
            return;
        }
        if (!userncd.email.includes('@')) {
            alert("Định dạng email không đúng");
            return;
        }
        if (userncd.pass.length <= 8) {
            alert("Mật khẩu ít nhất 8 ký tự");
            return;
        }
        if (!checkPhone(userncd.sdt)) {
            alert("Số điện thoại không hợp lệ");
            return;
        }
        axios.post('https://localhost:44343/data/user', {
            firstname: userncd.firstname,
            lastname: userncd.lastname,
            email: userncd.email,
            pass: userncd.pass,
            sdt: userncd.sdt,
            diachi: userncd.diachi,
            nameimage: userncd.nameimage ? usersncd.nameimage : null,
            mode: userncd.mode
        }).then(() => {
            alert("Added");
            resetUserncd();
            reLoadncd();
        })
            .catch((err) => alert("Thêm Người dùng thất bại ,kiểm tra dữ liệu"));
    }
    const repairUser = () => {
        if (userncd.id === null) {
            alert("Chọn đối tượng cần sửa!");
            return;
        }
        if (saveUserncd.current === userncd) {
            alert("Không thay đổi");
            return;
        }
        axios.put('https://localhost:44343/data/user', userncd).then(() => {
            alert("Saved");
            reLoadncd();
        })
            .catch(() => alert("Sửa thông tin thất bại"))
    }
    const deleteUser = () => {
        if (userncd.id === null) {
            alert("Chọn đối tượng trước khi xóa");
            return;
        }
        if (window.confirm("Xác nhận xóa ?")) {
            axios.delete(`https://localhost:44343/data/user/${usersncd.id}`).then(() => {
                reLoadncd();
                resetUserncd();
                alert("Deleted");
            }).catch(() => alert("Không thể xóa"));
        }
    }
    const searchUserWithMode = (mode) => {
        axios.get(`https://localhost:44343/data/user/mode=${mode}`, null).then(res => {
            alert("lấy dữ liệu thành công");
            setUsersncd(res.data);
        }).catch((err) => {
            alert("Không tìm thấy người dùng");
            console.log("getUsersByMode failed" + err);
        });
    }
    const searchUser = (modeSearch, value) => {
        console.log(modeSearch);
        if (value === null) {
            alert("Chưa nhập dữ liệu");
            return;
        }
        if (modeSearch === 'id') {
            axios.get(`https://localhost:44343/data/user/id=${value}`, null).then(res => {
                setUsersncd(res.data);
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getUsersByName failed" + err);
            });
        }
        if (modeSearch === 'email') {
            axios.get(`https://localhost:44343/data/user/email=${value}`, null)
                .then(res => {
                    alert("lấy dữ liệu thành công");
                    console.log(res.data);
                    setUsersncd(res.data);
                }).catch((err) => {
                    alert("Không tìm thấy người dùng");
                    console.log("getUsersByName failed" + err);
                });
        }
        if (modeSearch === 'sdt') {
            axios.get(`https://localhost:44343/data/user/sdt=${value}`, null).then(res => {
                alert("lấy dữ liệu thành công");
                setUsersncd(res.data);
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getUsersByName failed" + err);
            });
        }
        if (modeSearch === 'name') {
            axios.get(`https://localhost:44343/data/user/name=${value}`, null).then(res => {
                alert("lấy dữ liệu thành công");
                setUsersncd(res.data);
            }).catch((err) => {
                alert("Không tìm thấy người dùng");
                console.log("getUsersByName failed" + err);
            });
        }

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
                                        if (item.id === userncd.id) {
                                            if (activencd === false) {
                                                setUserncd(item);
                                                saveUserncd.current = item;
                                                setActivencd(true);
                                            } else {
                                                resetUserncd();
                                                setActivencd(false);
                                            }
                                        } else if (item.id !== userncd.id) {
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
                                    <td className="userncd-table-cell">{item.lastname + " " + item.firstname}</td>
                                    <td className="userncd-table-cell">{item.email}</td>
                                    <td className="userncd-table-cell">{item.pass}</td>
                                    <td className="userncd-table-cell">{item.diachi}</td>
                                    <td className="userncd-table-cell">{item.sdt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="userncd-panel-lowform">
                    <div className="userncd-inForText">
                        <div className="userncd-inFor-item inFor-Name">
                            <div className="inFor-name-item">
                                <p className="inFor-item-text" >Họ</p>
                                <input className="userncd-input input-name" placeholder="" defaultValue={userncd.firstname} onChange={(e) => setUserncd({ ...userncd, firstname: e.target.value.toString() })} />
                            </div>
                            <div className="inFor-name-item">
                                <p className="inFor-item-text" style={{ paddingLeft: '20px' }}>Tên</p>
                                <input className="userncd-input input-name" placeholder="" defaultValue={userncd.lastname} onChange={(e) => setUserncd({ ...userncd, lastname: e.target.value.toString() })} />
                            </div>
                            <div className="userncd-inFor-item">
                                <p className="inFor-item-text">Email</p>
                                <input className="userncd-input input-email" placeholder="" defaultValue={userncd.email} onChange={(e) => setUserncd({ ...userncd, email: e.target.value.toString() })} />
                            </div>
                            <div className="inFor-name-item">
                                <p className="inFor-item-text">Pass</p>
                                <input className="userncd-input input-name" placeholder="" defaultValue={userncd.pass} onChange={(e) => setUserncd({ ...userncd, pass: e.target.value.toString() })} />
                            </div>
                            <div className="userncd-inFor-item">
                                <p className="inFor-item-text">Địa chỉ</p>
                                <input className="userncd-input input-address" placeholder="" defaultValue={userncd.diachi} onChange={(e) => setUserncd({ ...userncd, diachi: e.target.value.toString() })} />
                            </div>
                        </div>
                        <div className="inFor-name-item">
                            <p className="inFor-item-text" >SĐT</p>
                            <input className="userncd-input input-sdt" placeholder="" defaultValue={userncd.sdt} onChange={(e) => setUserncd({ ...userncd, sdt: e.target.value.toString() })} />
                        </div>
                        <div className="customer-inFor-item customer-image-upload">
                            <div className="userncd-inFor-item inFor-mode">
                                <p className="inFor-item-text">Chức vụ</p>
                                <select className="select-mode-userncd" value={userncd.mode} onChange={(e) => setUserncd({ ...userncd, mode: e.target.value.toString() })}>
                                    <option value="ADMIN">Admin</option>
                                    <option value="STAFF">Staff</option>
                                    <option value="CUSTOMER">Customer</option>
                                    <option value="SHIPPER">Shipper</option>
                                </select>
                            </div>
                            <div className="userncd-button-group">
                                <div className="userncd-inFor-item userncd-search">
                                    <select defaultValue={''} className="select-mode-search-permission" onChange={(e) => {
                                            searchUserWithMode(e.target.value.toString());
                                    }}>
                                        <option value="ADMIN">Admin</option>
                                        <option value="CUSTOMER">Customer</option>
                                        <option value="STAFF">Staff</option>
                                    </select>
                                
                                    <select defaultValue={modeSearch} className="select-mode-search" onChange={(e) => {
                                        setModeSearch(e.target.value.toString());
                                    }}>
                                        <option value="email">Email</option>
                                        <option value="sdt">SĐT</option>
                                        <option value="name">Tên</option>
                                        <option value="id">ID</option>
                                    </select>

                                    <input className="userncd-input-search" type="text" placeholder="value" defaultValue={value} onChange={(e) => setValue(e.target.value.toString())} />
                                    <button className="userncd-btn-search" onClick={() => searchUser(modeSearch, value)}>Search</button>
                                </div>
                                <div className="userncd-button-group">
                                    <button className="userncd-button delete-userncd" onClick={() => deleteUser()}>Delete</button>
                                    <button className="userncd-button save-userncd" onClick={() => repairUser()}>Save</button>
                                    <button className="userncd-button add-userncd" onClick={() => addUser()}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
