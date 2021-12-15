import React from 'react'

export default function StaffBills() {

    return(
        <div className="staff-bills">
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
                    
                </tbody>
            </table>
            <div className="staff-bills-form">
                <div className="staff-bills-form-inFor">
                    <div className='thong-tin-nguoi-nhan'>
                        <p style={{color :'red',fontWeight : '600',fontSize : '20px',padding : '20px 30px 0 30px',marginBottom : '30px'}}>Thông tin người nhận</p>
                        <div className='thong-tin-nguoi-nhan-item'>
                            <label>Họ tên</label>
                            <p>abc</p>
                        </div>
                        <div className='thong-tin-nguoi-nhan-item'>
                            <label>Email</label>
                            <p>abc</p>
                        </div>
                        <div className='thong-tin-nguoi-nhan-item'>
                            <label>Số điện thoại</label>
                            <p>abc</p>
                        </div>
                        <div className='thong-tin-nguoi-nhan-item'>
                            <label>Địa chỉ</label>
                            <p>abcádasdasdaasdasdasddddddddddddddddddddádasdaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>
                    <div className='thong-tin-giao-hang'>

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
