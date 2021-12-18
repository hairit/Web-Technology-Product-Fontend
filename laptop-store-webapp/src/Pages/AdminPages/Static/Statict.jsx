import React, {useState, useEffect} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Statict.css"
import { Bar, Line} from "react-chartjs-2";
import Chart from 'chart.js/auto'; 
import moment from 'moment';



export default function Statict ({ }){
    const [select, setSelect] = useState("");
    const [dateRange, setDateRange] = useState([null, null]);
    const [year, setYear] = useState(null);
    const [startDate, endDate] = dateRange;
    const [datares, setDatares] = useState([]);
    const [flag, setFlag] = useState(false);
    const [label, setLabel] = useState([]);
    const [datas, setData] = useState([]);
    const showSelect = () =>{
        switch (select) {
            case "day":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label" >Nhập ngày cần tìm: </p>
                        <input type="date" className="static-input"></input>
                    </div>);
            case "month":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label" >Nhập tháng cần tìm: </p>
                        <input type="month" className="static-input"></input>
                    </div>)
            case "year":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label">Nhập năm cần tìm: </p>
                        <input type="number" min="1900" max="2099" step="1" defaultValue="2021" className="static-input"/>
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
          axios.get(`https://localhost:44343/data/statistics/bill/month=12/year=2021`)
                .then((res)=>{
                    setDatares(res.data);

                    console.log(datares);
                })
                .catch ((err)=>console.log(err));
        const dim=moment("2021-12", "YYYY-MM").daysInMonth();
        for (let i=1;i<=dim;i++)
        {
            label.push(i.toString());
            datas.push(0);
        }
        datares.forEach((datare)=>{
            const temp = (moment(datare.ngaydat).toDate().getDate());
            datas.splice(temp-1,1,datare.tongtien);
            console.log(typeof datare.tongtien);
        });
        setFlag(true);
      }
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
      const showne = () => {
          if (flag===true)
          console.log("hehe");
      }

    return (
        <div className="statict-main">
            <div className="statict-layout">
                <div className="statict-header"> <h2>Thống kê doanh thu</h2></div>
                <div className="statict-main-page">
                    <div className="statict-top-button">
                        <select name="statict type" className="statict-select" onChange={(e)=>setSelect(e.target.value)}>
                            <option value="day" >Ngày</option>
                            <option value="month">Tháng</option>
                            <option value="year">Năm</option>
                            <option value="fromto">Khoản ngày</option>
                        </select>
                        {showSelect()}
                        <button onClick={()=>handleClick()}>Chọn</button>
                    </div>
                    <div className="statict-chart-panel">
                        <Line data={data} className="statict-chart"/>
                    </div>
                </div>
            </div>
        </div>
    )
}