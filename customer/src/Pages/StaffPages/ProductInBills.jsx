import React from 'react'
import { useEffect, useState } from "react";
import Solver from "../../Classes/Solver";
import axios from 'axios';


export default function ProductInBills({idbill, index}) {
    const solver = new Solver();
    const [itemPro, setItemPro] = useState([])
  
    useEffect(() => {
        if(idbill ) {
            axios.get(`https://localhost:44343/data/bill/getbill/${idbill}`,null)
        .then((res) => setItemPro(res.data))
        .catch((err) =>console.error("Del mua ma doi co bill",err))
        }
    },[])
    console.log("66",itemPro.billDetails)
    return (
        <div>
            {itemPro.length !==0 ? itemPro.billDetails.map((itemsp,index) => {
                return (
                    <>
                <td className="info-proDetail" key={index}>
                <td className="info-productInBill name-hoadon">{itemsp.idProductNavigation.ten}</td>
                <td className="info-productInBill">Số lượng: {itemsp.soluong}</td>
                <td className="info-productInBill bill-thanhtien">Thành tiền: {solver.formatCurrency("vi-VN","currency","VND",itemsp.tongtien)}</td>
                </td>
            </>
                )
                
}): <div></div>}
            
        </div>
    )
}
