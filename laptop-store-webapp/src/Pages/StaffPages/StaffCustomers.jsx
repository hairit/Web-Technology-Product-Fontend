import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
export default function StaffCustomers() {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios.get('https://localhost:44343/data/user/mode=CUSTOMER',null)
        .then(res => setCustomers(res.data) )
        .catch(() => setCustomers([]))
    }, [])
    console.log(customers);
    return(
        <div className="staff-customers">
            <div className="staff-customer-search">
                    <div className='staff-customer-search-item'>
                        <p>Tìm khách hàng</p>
                        <input className='staff-customer-search-input' placeholder='Nhập tên khách hàng'  />
                    </div>
                    <div className='staff-customer-search-item' style={{marginLeft : '68px'}}>
                        <p>Tìm khách hàng</p>
                        <input className='staff-customer-search-input' placeholder='Nhập mã khách hàng'  />
                    </div>
            </div>
            <div className='staff-customer-list'>
                <table className='staff-customer-table' >
                    <thead className='staff-customer-table-head'>
                        <tr className='staff-customer-table-row'>
                            <th className='staff-customer-table-cell' >ID</th>
                            <th className='staff-customer-table-cell' style={{width : '200px'}}>Họ tên</th>
                            <th className='staff-customer-table-cell' style={{width : '300px'}} >Tài khoản</th>
                            <th className='staff-customer-table-cell' >Thông tin liên lạc</th> 
                            <th className='staff-customer-table-cell' ></th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((item,index) => <tr className='staff-customer-table-row'>
                                <td className='staff-customer-table-cell'>
                                    <div className='staff-customer-value'>{item.id}</div>
                                </td>
                                <td className='staff-customer-table-cell'>
                                    <div className='staff-customer-value'>{item.firstname + ' ' + item.lastname}</div>
                                </td>
                                <td className='staff-customer-table-cell'>
                                    <div style={{lineHeight : '1.4rem'}}>
                                        <div className='staff-customer-value'>{'Email : '+item.email}</div>
                                        <div className='staff-customer-value'>{'Pass  : '+item.pass}</div>
                                    </div>
                                </td>
                                <td className='staff-customer-table-cell'>
                                    <div>
                                        <div className='staff-customer-value'>{'Số điện thoại : '+item.sdt}</div>
                                        <div className='staff-customer-value'>{'Địa chỉ       : '+item.diachi}</div>
                                    </div>
                                </td>
                                <td className='staff-customer-table-cell'>
                                    <div className='staff-customer-bill'>Đơn hàng</div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
