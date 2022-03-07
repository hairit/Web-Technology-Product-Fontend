import axios from 'axios';
import React from 'react'
import {useEffect,useState}  from 'react'
import Solver from '../../Classes/Solver';
const solver = new Solver();
export default function BillDetailItem({idProduct,quantity,updateProductBill,idBill}) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`https://localhost:44343/data/product/${idProduct}`,null)
            .then(res => setProduct(res.data))
            .catch(() => setProduct(null))
    }, [])
    return (
        <div className='staff-bill-detail-table-row'>
            {
                product !== null ? 
                <>
                    <img style={{width : '78px' , height : '78px'}} src={`https://localhost:44343/Images/Products/${product.nameimage}`} alt={product.nameimage} />
                    <div className='bill-product-inFor'>
                        <div className='bill-product-name'>
                            <div style={{padding : '3px 0'}}>{product.ten}</div>
                            <div style={{padding : '3px 0'}}>{'Phân loại hàng: '}<p style={{display : 'inline',color : '#495ddf'}}>{product.idloaiNavigation.ten}</p></div>
                            <div style={{padding : '3px 0'}}>{'Giá: '}<p style={{display : 'inline',color : 'rgb(212, 14, 14)'}}>{solver.formatCurrency("vi-VN", "currency", "VND", product.gia)}</p></div>
                        </div>
                            <div className='bill-product-quantity'>
                                <button className='bill-quantity-button' onClick={()=>updateProductBill('decrease',idBill,product.id,quantity)}>-</button>
                                <input className='bill-quantity-input' placeholder={quantity}/>
                                <button className='bill-quantity-button' onClick={()=>updateProductBill('increase',idBill,product.id,quantity)}>+</button>
                            </div>
                    </div>
                </>
                : <></>
            }
        </div>
    )
}
