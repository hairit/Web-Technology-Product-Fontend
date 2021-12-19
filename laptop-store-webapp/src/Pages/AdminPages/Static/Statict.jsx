import React, {useState, useEffect} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Statict.css"
import { Bar, Line} from "react-chartjs-2";
import Chart from 'chart.js/auto'; 
import moment from 'moment';



export default function Statict ({ }){
    const [select, setSelect] = useState("month");
    const [dateRange, setDateRange] = useState([null, null]);
    const [year, setYear] = useState(null);
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [startDate, endDate] = dateRange;
    const [datares, setDatares] = useState([]);
    const [flag, setFlag] = useState(false);
    const [label, setLabel] = useState([]);
    const [datas, setData] = useState([]);
    const [isnull, setIsnull] = useState(false);
    const showSelect = () =>{
        switch (select) {
            case "day":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label" >Nhập ngày cần tìm: </p>
                        <input type="date" className="static-input" onChange={(e)=>handelClickStatict(e)}></input>
                    </div>);
            case "month":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label" >Nhập tháng cần tìm: </p>
                        <input type="month" className="static-input" onChange={(e)=>handelClickStatict(e)}></input>
                    </div>)
            case "year":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label">Nhập năm cần tìm: </p>
                        <input type="number" min="1900" max="2099" step="1" defaultValue="2021" className="static-input" onChange={(e)=>handelClickStatict(e)}/>
                    </div>);
            case "fromto":
                return (
                    <div className="statict-form-value">
                        <p className="static-form-label"> Chọn khoản ngày: </p>
                        <DatePicker className="static-input"
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                    />
                    </div>
                )
            default:
                break;
        }    
        
        
    }
    
      const handleClick = () =>{
        switch (select) {
            case "day":
                if (datares.length!==0)
                {                
                    datares.forEach((data)=>{
                        label.push(data.id);
                        datas.push(data.tongtien);
                })}
                else setIsnull(true);  
                break;
            case "month":
                if (datares.length!==0)
                {
                    datares.forEach((datare)=>{
                        const temp = (moment(datare.ngaydat).toDate().getDate());
                        datas.splice(temp-1,1,datare.tongtien);
                    });
                } else setIsnull(true);
                break;
            case "year": 
                if (datares.length!==0)
                {
                   datares.forEach((datare)=>{
                    const temp = (moment(datare.ngaydat).toDate().getMonth());
                       datas.splice(temp-1,1,datas[temp-1]+datare.tongtien);
                   })
                } else setIsnull(true);
                break;
        }
      }
      const handelClickStatict = (e) =>{
          let value = e.target.value;
        switch (select) {
            case "day":
                let d = (moment(value).toDate().getMonth()+1).toString();
                d = d+"-"+moment(value).toDate().getDate().toString() + "-" + moment(value).toDate().getFullYear().toString();
                console.log(d);
                axios.get(`https://localhost:44343/data/statistics/bill/date=${d}`)
                .then((res)=>{
                    setDatares(res.data);
                    console.log(datares);
                })
                .catch ((err)=>console.log(err));	
                console.log(label);		
                break;
            case "month":
                axios.get(`https://localhost:44343/data/statistics/bill/month=${moment(value).toDate().getMonth()+1}/year=${moment(value).toDate().getFullYear().toString()}`)
                .then((res)=>{
                    setDatares(res.data);
                    console.log(datares);
                })
                .catch ((err)=>console.log(err));
                let z =  moment(value).toDate().getFullYear().toString()+ "-" + moment(value).toDate().getMonth()+1;
                console.log(moment(z,"yyyy mm").daysInMonth());	
                if (label.length!==(moment(z,"yyyy mm").daysInMonth()))
                    for (let i=1; i<=moment(z,"yyyy mm").daysInMonth();i++)
                    {
                        label.push(i);
                        datas.push(0);
                    }
                    datares.forEach((datare)=>{
                        const temp = (moment(datare.ngaydat).toDate().getDate());
                        datas.splice(temp-1,1,datare.tongtien);
                    });
                break;
            case "year":
                axios.get(`https://localhost:44343/data/statistics/bill/year/${value}`)
                .then((res)=>{
                    setDatares(res.data);
                    console.log(datares);
                })
                .catch ((err)=>console.log(err));
                let temp = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                setLabel(temp);
                console.log(label);
                break;
      }
      }

      const showchart = () =>{
          console.log(datas);
          console.log(label);
          if (label && datas)
          {
            const data = {
                labels: label,
                datasets:[{
                    label: "Doanh thu",
                    data: datas,
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                  }] 
              };
              console.log(data);
            return (
                <Line data={data} className="statict-chart"/>
            );
          } else return (<p>Vui lòng chọn thời gian</p>);
      }
    return (
        <div className="statict-main">
            <div className="statict-layout">
                <div className="statict-header"> <h2>Thống kê doanh thu</h2></div>
                <div className="statict-main-page">
                    <div className="statict-top-button">
                        <select name="statict type" className="statict-select" defaultValue="month" onChange={(e)=>setSelect(e.target.value)}>
                            <option value="day" >Ngày</option>
                            <option value="month">Tháng</option>
                            <option value="year">Năm</option>
                            <option value="fromto">Khoản ngày</option>
                        </select>
                        {showSelect()}
                        <button onClick={()=>handleClick()}>Chọn</button>
                    </div>
                    <div className="statict-chart-panel">
                        <div className=""></div>
                        {showchart()}
                    </div>
                </div>
            </div>
        </div>
    )
}