import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import BillDetailItem from './BillDetailItem';
import Solver from '../../Classes/Solver';
import LogoFT from "../../Images/LogoFT.png"
import PrintBills from './PrintBills';
import ProductInBills from './ProductInBills';
import { useReactToPrint } from 'react-to-print';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import invoice from "../../CSS/invoice.css"
import Invoice from './Invoice';
const solver = new Solver();
export default function StaffBills({ match }) {
    const history = useHistory();

    const [statusBill, setStatusBill] = useState('Chờ xác nhận');
    const [reload, setReload] = useState(false);
    const [idBill, setIdBill] = useState('');
    const [idCustomer, setIdCustomer] = useState('');
    const [bills, setBills] = useState([]);
    const [bill, setBill] = useState(null);
    const saveBill = useRef(null);
    const [active, setActive] = useState(false);
    const [invoice, setInvoice] = useState([]);


    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/status=Đã xác nhận`, null)
            .then(res => {
                setInvoice(res.data);
            })
            .catch((err) => console.log("Errol", err));
    }, [])
    console.log("ôpp", invoice)
    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/status=${statusBill}`, null)
            .then(res => {
                // res.data.forEach(element => {
                //     if(element.idBill === saveBill.current.id)  setBill(element);
                // });
                setBills(res.data);
            })
            .catch(() => setBills([]));
    }, [statusBill, reload])
    useEffect(() => {
        if (saveBill.current !== null) {
            axios.get(`https://localhost:44343/data/bill/getbill/update/${saveBill.current.id}`, null)
                .then(res => {
                    console.log(res.data);
                    setBill(res.data);
                    saveBill.current = res.data;
                })
                .catch(() => {
                    setBill(null);
                    saveBill.current = null;
                })
        }
    }, [reload])
    console.log(saveBill.current);
    console.log("ádas", bill);
    const actionBill = (idBill, action) => {
        axios.get(`https://localhost:44343/data/bill/action=${action}/${idBill}`, null)
            .then(res => {
                updateData();
                showLoadOrder()
                setTimeout(() => {
                    history.push(`/staff/${match.match.params.idUser}/bills/${saveBill.current.id}`);
                }, 1500);

            })
            .catch(() => alert("Không thể xác nhận đơn hàng"))
        console.log("idbill", idBill);

    }
    function showLoadOrder() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Xác nhận thành công! In hóa đơn',
            showConfirmButton: false,
            timer: 1500
        })
    }
    const searchBillByID = () => {
        if (idBill) {
            axios.get(`https://localhost:44343/data/bill/${idBill}`, null)
                .then(res => setBills(res.data))
                .catch(() => {
                    setBills([]);
                    alert("Không tìm thấy đơn hàng")
                })
        } else {
            alert("Nhập mã đơn hàng");
        }
    }
    console.log("23", bills)
    const searchBillByIdCustomer = () => {
        if (idCustomer) {
            axios.get(`https://localhost:44343/data/bill/idCustomer=${idCustomer}`, null)
                .then(res => setBills(res.data))
                .catch(() => {
                    setBills([]);
                    alert("Không tìm thấy đơn hàng")
                })
        } else {
            alert("Nhập mã đơn hàng");
        }
    }
    const updateBill = () => {
        if (bill !== null) {
            axios.get(`https://localhost:44343/data/bill/address=${bill.diachinhan}`, null)
                .then(res => {
                    updateData();
                    alert("Sửa địa chỉ thành công")
                })
                .catch(() => alert("Không thể sửa địa chỉ"))
        }
    }
    const updateProductBill = (action, idBill, idProduct, quantity) => {
        if (action == 'decrease' && quantity === 1) {
            if (bill.billDetails.length === 1) {
                if (window.confirm("Xác nhận xóa đơn hàng?")) {
                    axios.delete(`https://localhost:44343/data/bill/${bill.id}`, null)
                        .then(res => {
                            setBill(null);
                            updateData();
                            saveBill.current = null;
                        })
                        .catch(() => alert("Không thể xóa đơn hàng"))
                }
            } else {
                if (window.confirm("Xác nhận xóa 1 sản phẩm ?")) {
                    axios.get(`https://localhost:44343/data/bill/action=delete/billdetail/idbill=${idBill}/idproduct=${idProduct}`, null)
                        .then(res => {
                            updateData();
                        })
                        .catch(() => alert("Cập nhật thất bại"))
                }
            }
        } else {
            axios.get(`https://localhost:44343/data/bill/action=${action}/billdetail/idbill=${idBill}/idproduct=${idProduct}`, null)
                .then(res => {
                    updateData();
                })
                .catch(() => alert("Cập nhật thất bại"))
        }

    }
    function tlHoadon(idBill) {
        return (
            <div className='invoice-bill'>
                <div className="col-md-12 wt">
                    <div className="card" id="invoice">
                        <div className="top-invoice">
                            <div className="left-top-invoice">
                                <img src={LogoFT} />
                                <p>LAPPEE</p>
                            </div>
                            <div className="right-top-invoice">
                                <p>Chi nhánh TP Hồ Chí Minh</p>
                                <p>Địa chỉ: 273 An Dương Vương, phường 6 quận 5</p>
                            </div>
                        </div>
                        <div className="center-invoice">
                            <div className="center-invoice-top">
                                HÓA ĐƠN
                            </div>
                        </div>
                        <div className="centerTitle-bill">
                            <table className="table table-hover table-bill">
                                <thead>
                                    <tr className="">
                                        <th className="col cols row-idOrder">ID</th>
                                        <th className="col cols row-pro">Sản phẩm</th>
                                        <th className="col cols row-sltt">Tổng tiền</th>
                                        <th className="col cols row-date">Ngày đặt</th>
                                        <th className="col cols row-address">Địa chỉ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="info-bill">
                                        <td className="id-bill"></td>
                                        <ProductInBills idbill={idBill} />
                                        <td className="info-productInBill bill-price" ></td>
                                        <td className="info-productInBill"></td>
                                        <td className="info-productInBill"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="price-printbill"><p>Tổng tiền:</p> </div>
                        <div className="bottom-invoice">

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const updateData = () => {
        if (reload === true) setReload(false);
        else setReload(true);
    }

    return (
        <div className="staff-bills">
            <div className="staff-bills-form">
                <div className="staff-bills-form-search">
                    <div className='search-bill-div'>
                        <label style={{ marginBottom: 0 }}>Tìm kiếm đơn hàng</label>
                        <input className='search-bill-input' placeholder='Nhập mã đơn hàng' onChange={(e) => setIdBill(e.target.value.toString())} />
                        <button className='search-bill-button' onClick={() => searchBillByID()}>
                            Tìm kiếm
                        </button>
                    </div>
                    <div className='search-bill-div'>
                        {/* <label style={{marginBottom : 0}}>Tìm kiếm đơn hàng</label> */}
                        <input className='search-bill-input' placeholder='Nhập mã khách hàng' onChange={(e) => setIdCustomer(e.target.value.toString())} />
                        <button className='search-bill-button' onClick={() => searchBillByIdCustomer()}>
                            Tìm kiếm
                        </button>
                    </div>
                    <select className='select-bill-group' defaultValue={statusBill} onChange={(e) => setStatusBill(e.target.value.toString())}>
                        <option value="Chờ xác nhận">Chờ xử lý</option>
                        <option value="Đã xác nhận">Đang xử lý</option>
                        <option value="all">Tất cả</option>
                    </select>
                </div>
            </div>
            <div className='staff-bills-list'>
                <table className="staff-bills-table">
                    <thead>
                        <tr className="staff-bills-table-head">
                            <th className="staff-bill-table-cell" style={{ width: '50px' }}>STT</th>
                            <th className="staff-bill-table-cell" style={{ width: '250px' }}>Tên người nhận</th>
                            <th className="staff-bill-table-cell" style={{ width: '150px' }}>SĐT</th>
                            <th className="staff-bill-table-cell" style={{ width: '550px' }}>Địa chỉ nhận</th>
                            <th className="staff-bill-table-cell" style={{ width: '150px' }}>Tổng tiền</th>
                            <th className="staff-bill-table-cell" style={{ width: 'max-content' }}></th>
                        </tr>
                    </thead>

                    <tbody>
                        {bills.map((item, index) => {
                            return <tr style={{ backgroundColor: bill !== null ? item.id === bill.id ? 'rgb(230, 227, 227)' : '#FFFFFF' : '' }} key={index} className='staff-bills-table-row' onClick={() => {
                                if (bill !== null) {
                                    if (item.id !== bill.id) {
                                        setBill(item);
                                        saveBill.current = item;
                                        setActive(true);
                                    } else {
                                        if (active === false) {
                                            setBill(item);
                                            saveBill.current = item;
                                            setActive(true);
                                        } else {
                                            setBill(null);
                                            saveBill.current = null;
                                            setActive(false)
                                        }
                                    }
                                } else {
                                    setBill(item);
                                    saveBill.current = item;
                                    setActive(true);
                                }
                            }}>
                                <td className='staff-bill-table-cell'>{index}</td>
                                <td className='staff-bill-table-cell'>{item.iduserNavigation.firstname + ' ' + item.iduserNavigation.lastname}</td>
                                <td className='staff-bill-table-cell'>{item.iduserNavigation.sdt}</td>
                                <td className='staff-bill-table-cell'>{item.diachinhan}</td>
                                <td className='staff-bill-table-cell' style={{ color: 'rgb(212, 14, 14)', fontWeight: '500' }}>{solver.formatCurrency("vi-VN", "currency", "VND", item.tongtien)}</td>
                                <td className='staff-bill-table-cell'>
                                    <button className='staff-bill-button cancel-bill-button' onClick={() => actionBill(item.id, 'cancel')} >Delete</button>
                                    {
                                        item.tinhtrang === 'Chờ xác nhận' ?

                                            <button className='staff-bill-button accept-bill-button' onClick={() => { actionBill(item.id, 'accept') }}>Accept
                                            </button> : <div></div>
                                    }
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="staff-bills-form">
                <div className="staff-bills-form-inFor">
                    <div style={{ color: 'red', fontWeight: '600', fontSize: '20px', padding: '20px 30px 20px 30px', display: 'block', width: '100%', float: 'left' }}>Thông tin người nhận</div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Họ tên người nhận</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.iduserNavigation.firstname + ' ' + bill.iduserNavigation.lastname : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Email</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.iduserNavigation.email : ''}</p>
                    </div>
                    <div className='staff-bill-inFor' style={{ width: '150px' }}>
                        <label className='staff-bill-inFor-label'>Số điện thoại</label>
                        <p className='staff-bill-inFor-value' >{bill !== null ? bill.iduserNavigation.sdt : ''}</p>
                    </div>
                    <div className='staff-bill-inFor' style={{ width: '550px' }}>
                        <label className='staff-bill-inFor-label'>Địa chỉ</label>
                        <p className='staff-bill-inFor-value' >{bill !== null ? bill.iduserNavigation.diachi : ''}</p>
                    </div>
                    <div style={{ color: 'red', fontWeight: '600', fontSize: '20px', padding: '20px 30px 20px 30px', display: 'block', width: '100%', float: 'left' }}>Thông tin hóa đơn</div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Mã vận đơn</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.id : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Số lượng sản phẩm</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.billDetails.length : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Tiền thanh toán</label>
                        <p className='staff-bill-inFor-value' style={{ color: 'rgb(212, 14, 14)', fontWeight: '500' }}>{bill !== null ? solver.formatCurrency("vi-VN", "currency", "VND", bill.tongtien) : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Ngày đặt hàng</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? solver.getDateFormat(bill.ngaydat) : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Phương thức thanh toán</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.phuongthucthanhtoan : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Tình trạng</label>
                        <p className='staff-bill-inFor-value' style={{ color: bill !== null ? bill.tinhtrang === 'Chờ xác nhận' ? 'rgb(212, 14, 14)' : ' rgb(6, 97, 6)' : '' }}>{bill !== null ? bill.tinhtrang : ''}</p>
                    </div>
                    <div className='staff-bill-inFor-address'>
                        <label className='staff-bill-inFor-label'>Địa chỉ giao hàng</label>
                        <div style={{ position: 'relative' }}>
                            <input className='staff-bill-inFor-input' defaultValue={bill !== null ? bill.diachinhan : ''} />
                            <button className='button-save-bill' onClick={() => updateBill}>Lưu địa chỉ</button>
                        </div>
                    </div>

                </div>
                <div className='bill-details-panel'>
                    <table className="staff-bills-products">
                        <thead>
                            <tr className="staff-bills-table-head">
                                <th className='staff-bill-table-cell' style={{ width: '50px' }}>STT</th>
                                <th className='staff-bill-table-cell' style={{ width: '500px' }}>Sản phẩm</th>
                                <th className='staff-bill-table-cell' style={{ width: '100px' }}>Tổng tiền</th>
                                <th className='staff-bill-table-cell' style={{ width: '50px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bill !== null ? bill.billDetails.map((detail, index) => (
                                    <tr className='staff-bills-table-row'>
                                        <td className='staff-bill-table-cell'>{index}</td>
                                        <td className='staff-bill-table-cell'><BillDetailItem idProduct={detail.idProduct} quantity={detail.soluong} idBill={detail.idBill} updateProductBill={updateProductBill} /></td>
                                        <td className='staff-bill-table-cell'>{solver.formatCurrency("vi-VN", "currency", "VND", detail.tongtien)}</td>
                                        <td className='staff-bill-table-cell'><button className='delete-bill-detail'>Delete</button></td>
                                    </tr>
                                )) : <div></div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>

    )
}
