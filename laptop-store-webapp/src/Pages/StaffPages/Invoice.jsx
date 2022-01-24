import React from 'react'
import {useState , useEffect ,useRef} from 'react';
import axios from 'axios';
import Solver from '../../Classes/Solver';
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

    return (
        
        <div  className="container bootdey">
            <div ref={componentRef} className="row invoice row-printable">
                <div className="col-md-10">
                <div className="panel panel-default plain" id="dash_0">
                    <div className="panel-body p30">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="invoice-logo">
                            <img width={100} src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Invoice logo" /></div>
                        </div>
                        <div className="col-lg-6">
                        <div className="invoice-from">
                            <ul className="list-unstyled text-right">
                            <li>Dash LLC</li>
                            <li>2500 Ridgepoint Dr, Suite 105-C</li>
                            <li>Austin TX 78754</li>
                            <li>VAT Number EU826113958</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="invoice-details mt25">
                            <div className="well">
                            <ul className="list-unstyled mb0">
                                <li><strong>Invoice</strong> #936988</li>
                                <li><strong>Invoice Date:</strong> Monday, October 10th, 2015</li>
                                <li><strong>Due Date:</strong> Thursday, December 1th, 2015</li>
                                <li><strong>Status:</strong> <span className="label label-danger">UNPAID</span></li>
                            </ul>
                            </div>
                        </div>
                        <div className="invoice-to mt25">
                            <ul className="list-unstyled">
                            <li><strong>Invoiced To</strong></li>
                            <li>Jakob Smith</li>
                            <li>Roupark 37</li>
                            <li>New York, NY, 2014</li>
                            <li>USA</li>
                            </ul>
                        </div>
                        <div className="invoice-items">
                            <div className="table-responsive" style={{overflow: 'hidden', outline: 'none'}} tabIndex={0}>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th className="per70 text-center">Description</th>
                                    <th className="per5 text-center">Qty</th>
                                    <th className="per25 text-center">Total</th>
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
                            <p className="text-center">Generated on Monday, October 08th, 2015 </p>
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
