import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import './Shipper.css'
import { useHistory } from 'react-router-dom'
import Solver from '../../Classes/Solver'
const solver = new Solver();

export default function Shipper({changeAdminMode}) {
    const [bill, setBill] = useState(null);
    const [idBill, setIdBill] = useState('')
    //const history = useHistory();
    useEffect(() => {
       changeAdminMode('on');
    }, [])
    const searchBill = () => {
        if(idBill){
            axios.get(`https://localhost:44343/data/bill/getbill/${idBill}`,null)   
                    .then(res => setBill(res.data))
                    .catch(()=> {
                        alert("Không tìm thấy hóa đơn")
                        setBill(null)
                    })
        }else{
            alert("Nhập mã hóa đơn để tìm !")
        }
    }
    const actionBill = (action) => {
        if(bill){
        if(action === 'done'){
            axios.get(`https://localhost:44343/data/bill/action=${action}/${bill.id}`)
                    .then(res => {
                        setBill(null);
                        setIdBill('')
                        alert("Giao hàng thành công");
                    })
                    .catch(()=> alert("Có lỗi xảy ra , thử lại"))
        }else if(action === 'cancel'){
            axios.get(`https://localhost:44343/data/bill/action=${action}/${bill.id}`)
                    .then(res => {
                        setBill(null);
                        setIdBill('')
                        alert("Trả hàng thành công");
                    })
                    .catch(()=> alert("Có lỗi xảy ra , thử lại"))
        }
    }else {
        alert("Chưa có đơn hàng")
    }
    }
    return (
        <div className='shipper-page'>
            <div className='shipper-form-bill'>
                <div className='shipper-search-bill'>
                    <input  className='shipper-search-input' type="text" 
                                                             placeholder='Nhập mã đơn hàng' 
                                                             onChange={(e) => setIdBill(e.target.value.toString())}
                                                             defaultValue={idBill} />
                    <button className='shipper-search-button' onClick={()=>searchBill()}>Search</button>
                </div>
            </div>
            <div className='shipper-inFor-bill'>
                {bill !== null ? 
                        <>
                        <div style={{textAlign : 'left',padding :'10px 0 10px 0',color : 'red',fontSize : '16px',fontWeight : '500'}}>Thông tin hóa đơn</div>
                            <div className='shipper-inFor-bill-item'>
                                <div style={{color: 'black',padding : '7px 0'}}>Mã đơn hàng</div>
                                <div style={{fontSize : '16px'}}>{bill.id}</div>
                            </div>
                            <div className='shipper-inFor-bill-item'>
                                <div style={{color: 'black',padding : '7px 0'}}>Ngày đặt</div>
                                <div>{solver.getDateFormat(bill.ngaydat)}</div>
                            </div>
                            <div className='shipper-inFor-bill-item'>
                                <div style={{color: 'black',padding : '7px 0'}}>Người nhận</div>
                                <div>{bill.iduserNavigation.firstname +' '+bill.iduserNavigation.lastname}</div>
                            </div>
                            <div className='shipper-inFor-bill-item'>
                                <div style={{color: 'black',padding : '7px 0'}}>Số điện thoại người nhận</div>
                                <div>{bill.iduserNavigation.sdt}</div>
                            </div>
                            <div className='shipper-inFor-bill-item'>
                                <div style={{color: 'black',padding : '7px 0'}}>Địa chỉ giao</div>
                                <div>{bill.diachinhan}</div>
                            </div>
                            <div className='shipper-inFor-bill-item'>
                                <div style={{color: 'rgb(67, 67, 216)',padding : '7px 0'}}>Tổng tiền</div>
                                <div style={{color : 'red',fontSize :'20px',fontWeight : '500'}}>{solver.formatCurrency("vi-VN", "currency", "VND", bill.tongtien)}</div>
                            </div>
                        </>  : <div>Chưa có hóa đơn</div>
                }
            </div>
            <div className='shipper-button-group'>
                <button className='shipper-button button-traHang' onClick={()=>actionBill('cancel')}>Trả hàng</button>
                <button className='shipper-button button-hoanThanh' onClick={()=>actionBill('done')}>Hoàn thành</button>
            </div>
        </div>
    )
}
