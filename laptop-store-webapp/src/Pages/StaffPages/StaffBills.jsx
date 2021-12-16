import React from 'react';
import {useState , useEffect} from 'react';
import axios from 'axios';

export default function StaffBills() {
    const [statusBill, setStatusBill] = useState('Chờ xác nhận');
    const [reload, setReload] = useState(false);
    const [idBill, setIdBill] = useState('');
    const [bills, setBills] = useState([]);
    const [bill, setBill] = useState(null);
    useEffect(() => {
        axios.get(`https://localhost:44343/data/bill/status=${statusBill}`,null)
                .then(res => setBills(res.data))
                .catch(() => setBills([]));
    }, [statusBill,reload])
    const actionBill = (idBill,action) => {
        axios.get(`https://localhost:44343/data/bill/action=${action}/${idBill}`,null)
                .then(res => {
                    updateData();
                    alert("Xác nhận thành công");
                })
                .catch(()=> alert("Không thể xác nhận đơn hàng"))
    }
    const searchBillByID = () => {
       if(idBill) {
        axios.get(`https://localhost:44343/data/bill/${idBill}`,null)
        .then(res => setBills(res.data))
        .catch(()=>{
            setBills([]);
            alert("Không tìm thấy đơn hàng")
        })
       }else {
           alert("Nhập mã đơn hàng");
       }
    }
    const updateData = () => {
        if(reload === true) setReload(false);
        else setReload(true);
    }
    return(
        <div className="staff-bills">
           <div className="staff-bills-form">
                <div className="staff-bills-form-search">
                        <div className='search-bill-div'>
                            <label style={{marginBottom : 0}}>Tìm kiếm đơn hàng</label>
                            <input className='search-bill-input' placeholder='Nhập mã đơn hàng' onChange={(e)=>setIdBill(e.target.value.toString())}/>
                            <button className='search-bill-button' onClick={()=>searchBillByID()}>
                                Tìm kiếm
                            </button>
                        </div>
                        <select className='select-bill-group' defaultValue={"Chờ xử lý"}>
                            <option value="Chờ xữ lý">Chờ xử lý</option>
                            <option value="Đang vận chuyển">Đang vận chuyển</option>
                            <option value="all">Đang vận chuyển</option>
                        </select>
                 </div>
            </div>
            <div className='staff-bills-list'>
            <table className="staff-bills-table">
                <thead>
                    <tr className="staff-bills-table-head">
                        <th className="staff-bill-table-cell" style={{width: '50px'}}>STT</th>
                        <th className="staff-bill-table-cell" style={{width: '250px'}}>Tên người nhận</th>
                        <th className="staff-bill-table-cell" style={{width: '150px'}}>SĐT</th>
                        <th className="staff-bill-table-cell" style={{width: '550px'}}>Địa chỉ nhận</th>
                        <th className="staff-bill-table-cell" style={{width: '150px'}}>Tổng tiền</th>
                        <th className="staff-bill-table-cell" style={{width : 'max-content'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((bill,index) => {
                        return <tr key={index} className='staff-bills-table-row' onClick={()=>{
                                    setBill(bill);
                            }}>
                            <td className='staff-bill-table-cell'>{index}</td>
                            <td className='staff-bill-table-cell'>{bill.iduserNavigation.lastname+' '+bill.iduserNavigation.firstname}</td>
                            <td className='staff-bill-table-cell'>{bill.iduserNavigation.sdt}</td>
                            <td className='staff-bill-table-cell'>{bill.diachinhan}</td>
                            <td className='staff-bill-table-cell'>{bill.tongtien}</td>
                            <td className='staff-bill-table-cell'>
                            {
                                bill.tinhtrang === 'Chờ xác nhận' ? <button className='accept-bill-button' onClick={()=>actionBill(bill.id,'accept')}>Xác nhận</button>
                                                                  : <div></div>
                            }
                            <button className='cancel-bill-button' onClick={()=>actionBill(bill.id,'cancel')} >Xóa</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
            <div className="staff-bills-form">
                <div className="staff-bills-form-inFor">
                        <div style={{color :'red',fontWeight : '600',fontSize : '20px',padding : '20px 30px 20px 30px',display : 'block',width : '100%',float : 'left'}}>Thông tin người nhận</div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Họ tên người nhận</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.iduserNavigation.lastname + ' ' +bill.iduserNavigation.firstname : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Email</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.iduserNavigation.email : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Số điện thoại</label>
                        <input className='staff-bill-inFor-input' defaultValue={bill !== null ? bill.iduserNavigation.sdt : ''}  />
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Địa chỉ</label>
                        <input className='staff-bill-inFor-input' defaultValue={bill !== null ? bill.iduserNavigation.diachi : ''} />
                    </div>
                        <div style={{color :'red',fontWeight : '600',fontSize : '20px',padding : '20px 30px 20px 30px',display : 'block',width : '100%',float : 'left'}}>Thông tin hóa đơn</div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Mã vận đơn</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.id : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Số lượng sản phẩm</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.billDetails : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Tổng tiền</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.tongtien : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Ngày đặt hàng</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.ngaydat : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Phương thức thanh toán</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.phuongthucthanhtoan : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Tình trạng</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.tinhtrang : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Địa chỉ giao hàng</label>
                        <input className='staff-bill-inFor-input' defaultValue={bill !== null ? bill.diachinhan : ''} style={{width : '500px'}} />
                    </div>
                  
                </div>
                <table className="staff-bills-products">
                    <thead>
                        <tr className="staff-bills-table-head">
                            <th className='staff-bill-table-cell' style={{width:'50px'}}>STT</th>
                            <th className='staff-bill-table-cell' style={{width:'100px'}}>Mã sản phẩm</th>
                            <th className='staff-bill-table-cell' style={{width:'500px'}}>Tên sản phẩm</th>
                            <th className='staff-bill-table-cell' style={{width:'200px'}}>Tổng tiền</th>
                            <th className='staff-bill-table-cell' style={{width:'200px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
