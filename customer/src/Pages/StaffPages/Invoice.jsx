import React from 'react'
import {useState , useEffect ,useRef} from 'react';
import axios from 'axios';
import Solver from '../../Classes/Solver';
import LogoFT from "../../Images/LogoFT.png"
import { useReactToPrint } from 'react-to-print';
import BillDetailItem from './BillDetailItem';
import DetailBill from '../DetailBill';
export default function Invoice({match}) {
    const solver = new Solver();
    const [bills, setBills] = useState(null)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        copyStyles: true
      });
      useEffect(() => {
            axios.get(`https://localhost:44343/data/bill/getbill/update/${match.match.params.id}`,null)
            .then(res => {   
                setBills(res.data);
        })
            .catch((err) => console.log("Errol",err));
}, [])
console.log("123",bills)
function getTimeStamp() {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
                  + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                  .getSeconds()) : (now.getSeconds())));
}
    return (
        
        <div  className="container bootdey">
            <div ref={componentRef} className="row invoice row-printable">
                <div className="col-md-10">
                <div className="panel panel-default plain" id="dash_0">
                    <div className="panel-body p30">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="invoice-logo">
                            <img width={200} src={LogoFT} alt="Invoice logo" /></div>
                        </div>
                        <div className="col-lg-6">
                        <div className="invoice-from">
                            <ul className="list-unstyled text-right">
                            <li>LAPPEE</li>
                            <li>273 An Dương Vương, phường 3, quận 5</li>
                            <li>Austin TX 78754</li>
                            <li>VAT Number EU826113958</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="invoice-details mt25">
                            <div className="well">
                            <ul className="list-unstyled mb0">
                                <li><strong>Mã hóa đơn: </strong> {bills !== null ? bills.id : <div></div>}</li>
                                <li><strong>Ngày đặt:</strong> {bills !== null ? solver.getDateFormat(bills.ngaydat) : ''}</li>
                                <li><strong>Trạng thái:</strong> <span className="label label-danger">{bills !== null ? bills.tinhtrang : <div></div>}</span></li>
                            </ul>
                            </div>
                        </div>
                        <div className="invoice-to mt25">
                            <ul className="list-unstyled">
                            <li><strong>Invoiced To</strong></li>
                            <li>{bills !== null ? bills.iduserNavigation.firstname + ' ' +bills.iduserNavigation.lastname : ''}</li>
                            <li>Địa chỉ: {bills !== null ? bills.iduserNavigation.diachi : ''}</li>
                            <li>Số điện thoại: {bills !== null ? bills.iduserNavigation.sdt : ''}</li>
                            <li>VN</li>
                            </ul>
                        </div>
                        <div className="invoice-items">
                            <div className="table-responsive" style={{overflow: 'hidden', outline: 'none'}} tabIndex={0}>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th className="per70 text-center">Sản phẩm</th>
                                    <th className="per5 text-center">Số lượng</th>
                                    <th className="per25 text-center">Tổng tiền</th>
                                </tr>
                                </thead>
                                
                                {
                                    bills !== null ? bills.billDetails.map((detail,index)=>(
                                        <tr>
                                            <td>{detail.idProductNavigation.ten}</td>
                                            <td class="text-center">{detail.soluong}</td>
                                            <td class="text-center">{solver.formatCurrency("vi-VN", "currency", "VND", detail.tongtien)}</td>
                                        </tr>
                                    )) : <div></div>
                                }
                               
                                <tfoot>
                                <tr>
                                    <th colSpan={2} className="text-right">20% VAT:</th>
                                    <th className="text-center">0</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} className="text-right">Credit:</th>
                                    <th className="text-center">0</th>
                                </tr>
                                <tr>
                                    <th colSpan={2} className="text-right">Total:</th>
                                    <th className="text-center">{solver.formatCurrency("vi-VN", "currency", "VND",  bills !== null ? bills.tongtien : <div></div>)}</th>
                                </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>
                        <div className="invoice-footer mt25">
                            <p className="text-center">Hóa đơn được tạo vào {getTimeStamp()} </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <button className="btn btn-primary"onClick={handlePrint }>Print</button>
        </div>
    )
}
