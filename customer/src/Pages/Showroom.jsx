import React from 'react'
import '../CSS/Showroom.css'
import { useRef, useState} from "react";
import { useReactToPrint } from 'react-to-print';
export default function Showroom() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        copyStyles: true
      });
    return (
        <div ref={componentRef} className="container bootdey">
           
        </div>
    )
}
