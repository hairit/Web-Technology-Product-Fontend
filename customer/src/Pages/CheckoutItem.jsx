import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import URL from '../DATA/URL.jsx';

export default function CheckoutItem({ pro, index, solver }) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(`${URL}/data/product/${pro.idProduct}`, null)
            .then(res => setProduct(res.data))
            .catch(() => setProduct(null))
    }, []);
    return (
        <div className="info-detailPro" key={index}>
            <div className="img-pros">
                <img
                    src={product !== null ? `${URL}/Images/Products/${product.nameimage}`
                        : ""}
                />
            </div>
            <div className="detail-pros">
                <div className="detail-name">
                    {product !== null ? product.ten : ""}
                </div>
                <div className="detail-quantity">
                    Số lượng: {pro.soluong}
                </div>
                <div className="detail-price" >
                    Giá:{" "}
                    {product !== null ? solver.formatCurrency("vi-VN", "currency", "VND", product.gia)
                        : ""}
                </div>
            </div>
        </div>
    )
}
