import React from 'react';
import {useState , useEffect} from 'react';
import axios from 'axios';
import BillDetailItem from './BillDetailItem';
import Solver from '../../Classes/Solver';

const solver = new Solver();
export default function StaffBills() {
    const [statusBill, setStatusBill] = useState('Chờ xác nhận');
    const [reload, setReload] = useState(false);
    const [idBill, setIdBill] = useState('');
    const [bills, setBills] = useState([]);
    const [bill, setBill] = useState(null);
    const [active  , setActive] = useState(false);
    useEffect(() => {
        
        axios.get(`https://localhost:44343/data/bill/status=${statusBill}`,null)
                .then(res => {   
                    setBills(res.data);
            })
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
    console.log(bill);
    console.log(bills);
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
                        <select className='select-bill-group' defaultValue={statusBill} onChange={(e)=>setStatusBill(e.target.value.toString())}>
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
                        <th className="staff-bill-table-cell" style={{width: '50px'}}>STT</th>
                        <th className="staff-bill-table-cell" style={{width: '250px'}}>Tên người nhận</th>
                        <th className="staff-bill-table-cell" style={{width: '150px'}}>SĐT</th>
                        <th className="staff-bill-table-cell" style={{width: '550px'}}>Địa chỉ nhận</th>
                        <th className="staff-bill-table-cell" style={{width: '150px'}}>Tổng tiền</th>
                        <th className="staff-bill-table-cell" style={{width : 'max-content'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map((item,index) => {
                        return <tr style={{backgroundColor : bill !== null ? item.id === bill.id ? 'rgb(230, 227, 227)' : '#FFFFFF' : ''}} key={index} className='staff-bills-table-row' onClick={()=>{
                            if(bill !== null){
                                if(item.id !== bill.id){
                                    setBill(item);
                                    setActive(true);
                                }else{
                                    if(active === false){
                                        setBill(item);
                                        setActive(true);
                                    }else{
                                        setBill(null);
                                        setActive(false)
                                    }
                                }
                            }else {
                                setBill(item);
                                setActive(true);
                            }

                            }}>
                            <td className='staff-bill-table-cell'>{index}</td>
                            <td className='staff-bill-table-cell'>{item.iduserNavigation.firstname+' '+item.iduserNavigation.lastname}</td>
                            <td className='staff-bill-table-cell'>{item.iduserNavigation.sdt}</td>
                            <td className='staff-bill-table-cell'>{item.diachinhan}</td>
                            <td className='staff-bill-table-cell' style={{color : 'rgb(212, 14, 14)',fontWeight : '500'}}>{solver.formatCurrency("vi-VN", "currency", "VND", item.tongtien)}</td>
                            <td className='staff-bill-table-cell'>
                            <button className='staff-bill-button cancel-bill-button' onClick={()=>actionBill(item.id,'cancel')} >Delete</button>
                            {
                                item.tinhtrang === 'Chờ xác nhận' ? <button className='staff-bill-button accept-bill-button' onClick={()=>actionBill(item.id,'accept')}>Accept</button>
                                                                  : <div></div>
                            }
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
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.iduserNavigation.firstname + ' ' +bill.iduserNavigation.lastname : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Email</label>
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.iduserNavigation.email : ''}</p>
                    </div>
                    <div className='staff-bill-inFor' style={{width : '150px'}}>
                        <label className='staff-bill-inFor-label'>Số điện thoại</label>
                        <input className='staff-bill-inFor-input' defaultValue={bill !== null ? bill.iduserNavigation.sdt : ''}  />
                    </div>
                    <div className='staff-bill-inFor' style={{width : '550px'}}>
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
                        <p className='staff-bill-inFor-value'>{bill !== null ? bill.billDetails.length : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Tiền thanh toán</label>
                        <p className='staff-bill-inFor-value' style={{color : 'rgb(212, 14, 14)',fontWeight : '500'}}>{bill !== null ? solver.formatCurrency("vi-VN", "currency", "VND", bill.tongtien) : ''}</p>
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
                        <p className='staff-bill-inFor-value' style={{ color : bill !== null ? bill.tinhtrang === 'Chờ xác nhận' ? 'rgb(212, 14, 14)' : ' rgb(6, 97, 6)'  : '' }}>{bill !== null ? bill.tinhtrang : ''}</p>
                    </div>
                    <div className='staff-bill-inFor'>
                        <label className='staff-bill-inFor-label'>Địa chỉ giao hàng</label>
                        <input className='staff-bill-inFor-input' defaultValue={bill !== null ? bill.diachinhan : ''} style={{width : '500px'}} />
                    </div>
                        <button style={{float : 'left'}}>Lưu thông tin</button>
                </div>
               <div className='bill-details-panel'>
               <table className="staff-bills-products">
                    <thead>
                        <tr className="staff-bills-table-head">
                            <th className='staff-bill-table-cell' style={{width:'50px'}}>STT</th>
                            <th className='staff-bill-table-cell' style={{width:'500px'}}>Sản phẩm</th>
                            <th className='staff-bill-table-cell' style={{width:'100px'}}>Tổng tiền</th>
                            <th className='staff-bill-table-cell' style={{width:'50px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bill !== null ? bill.billDetails.map((detail,index)=>(
                                <tr className='staff-bills-table-row'>
                                    <td className='staff-bill-table-cell'>{index}</td>
                                    <td className='staff-bill-table-cell'><BillDetailItem idProduct={detail.idProduct} quantity={detail.soluong}/></td>
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
