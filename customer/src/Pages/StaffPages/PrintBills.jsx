import React from 'react'
// import html2pdf from 'html2pdf.js'
import LogoFT from "../../Images/LogoFT.png"
export default function PrintBills() {

    // function DownloadBill(){
       
    //     const invoice = document.getElementById("invoice");
    //     console.log(invoice);
    //     console.log(window);
    //     var opt = {
    //         margin: 1,
    //         filename: 'myfile.pdf',
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    //     };
    //     html2pdf().from(invoice).set(opt).save();
                
    // }

    return (
        <div className="container d-flex justify-content-center mt-50 mb-50">
            <div className="row">
                <div className="col-md-12 text-right mb-3">
                {/* <button className="btn btn-primary" onClick={DownloadBill()}> download pdf</button> */}
                </div>
                <div className="col-md-12 wt">
                    <div className="card" id="invoice">
                        <div className="top-invoice">
                            <div className="left-top-invoice">
                                <img src={LogoFT} />
                                <p>LAPPEE.COM</p>
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
                            <div className="center-invoice-mid">
                                <p>Mã háo đơn: </p>
                                <p>Ngày đặt: </p>
                                <p>Địa chỉ: </p>
                                <p>Số điện thoại: </p>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="price-printbill"><p>Tổng tiền:</p> </div>
                        <div className="bottom-invoice">
                            
                        </div>
                    </div>
                </div>
                    
                
            </div>
        </div>

    )
}
