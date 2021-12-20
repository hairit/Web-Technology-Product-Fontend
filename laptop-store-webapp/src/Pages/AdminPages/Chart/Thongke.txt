import React from 'react'
import axios from "axios";
import ReactApexChart from "react-apexcharts"
import { useEffect, useState} from "react";
import Moment from 'moment';
export default function Thongke() {
  const [tongtien,setTongtien] = useState([])
  const [itemTK,setItemTK] = useState([])

    const series = [{
        name: 'Đơn hàng đã bán',
        
        data: [TKtheotien(),0]
      }];
      const options = {
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
                "12-18-2021", 
                
                ]
        },
        tooltip: {
          x: {
            format: 'MM/dd/yy'
          },
        },
      };
    
    useEffect(() =>{
      axios.get(`https://localhost:44343/data/statistics/bill/date=${date}`)
         .then((res) => 
         setItemTK(res.data))
         .catch((err) => console.log("Reload User"+err));
}, [])

function TKtheotien(){
  var tien = 0
  itemTK.forEach(ele => {
    tien = ele.tongtien
  });
  return tien
}
console.log("111",TKtheotien());


var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
console.log("ppp",date)

    function fromdate(e){
        var a = e.target.value 
        console.log("ggg",Moment(a).format('MM-DD-YYYY') )
    }
    function todate(e){
      var b = e.target.value 
        console.log("ccc",Moment(b).format('MM-DD-YYYY') )
    }
    return (
        <div>
            <div>
                <input type="date" id="tungay" onChange={(e) => fromdate(e)}/>
                <input type="date" id="denngay" onChange={(e) => todate(e)}/>
            </div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}
