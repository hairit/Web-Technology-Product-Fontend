import React, {useState, useEffect, useRef} from "react";
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
    const [startDate, endDate] = dateRange;
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [graph, setgraph] = useState([]);
    const refmonth = useRef(null);
    const refyear = useRef(null);

    const selectChartMonth = (e) =>
    {
        axios.get(`https://localhost:44343/data/statistics/bill/month=${moment(month).toDate().getMonth()+1}/year=${moment(month).toDate().getFullYear().toString()}`)
            .then(
                res=>{
                    const resData = res.data;
                    let labels = [];
                    let datas = [];
                    let z =  moment(month).toDate().getFullYear().toString()+ "-" + moment(month).toDate().getMonth()+1;
                    if (labels.length!==(moment(z,"yyyy mm").daysInMonth()))
                    for (let i=0; i<=moment(z,"yyyy mm").daysInMonth();i++)
                    {
                        labels.push(i);
                        datas.push(0);
                    }
                    resData.forEach((datare)=>{                
                        const temp = (moment(datare.ngaydat).toDate().getDate());
                        datas[temp]+=datare.tongtien;
                    });
                    setgraph(
                        {
                            labels: labels,
                            datasets: [
                                {
                                    label: "Doanh thu",
                                    data: datas,
                                    fill: true,
                                    backgroundColor: "rgba(75,192,192,0.2)",
                                    borderColor: "rgba(75,192,192,1)"
                                }
                            ]
                        }
                    );
                    console.log(graph);
                }
            )
            .catch(err=>{
                let labels = [];
                let datas = [];
                let z =  moment(month).toDate().getFullYear().toString()+ "-" + moment(month).toDate().getMonth()+1;
                for (let i=1; i<=moment(z,"yyyy mm").daysInMonth();i++)
                {
                    console.log(i);
                    labels.push(i);
                    datas.push(0);
                }
                setgraph(
                    {
                        labels: labels,
                        datasets: [
                            {
                                label: "Doanh thu",
                                data: datas,
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            }
                        ]
                    }
                );
                console.log(graph);
            });
    }

    useEffect(() => {
        selectChartMonth()
    }, [month])

    const selectChartYear = (e) =>
    {
        axios.get(`https://localhost:44343/data/statistics/bill/year/${year}`)
            .then(
                res=>{
                    const resData = res.data;
                    let labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                    let datas = [];
                    labels.forEach((la)=>{
                        datas.push(0);
                    })
                    resData.forEach((datare)=>{                
                        const temp = (moment(datare.ngaydat).toDate().getMonth());
                        datas[temp]+=datare.tongtien;
                    });
                    console.log(datas);
                    setgraph(
                        {
                            labels: labels,
                            datasets: [
                                {
                                    label: "Doanh thu",
                                    data: datas,
                                    fill: true,
                                    backgroundColor: "rgba(75,192,192,0.2)",
                                    borderColor: "rgba(75,192,192,1)"
                                }
                            ]
                        }
                    );
                    console.log(graph);
                }
            )
            .catch(err=>{
                let labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                let datas = [];
                labels.forEach((la)=>{
                    datas.push(0);
                })
                setgraph(
                    {
                        labels: labels,
                        datasets: [
                            {
                                label: "Doanh thu",
                                data: datas,
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            }
                        ]
                    }
                );
                console.log(graph);
            });
    }

    useEffect(() => {
        selectChartYear()
    }, [year])

    const selectChartFrom = (e) =>
    {
        console.log(dateRange);
        let sd = (moment(dateRange[0]).toDate().getMonth()+1).toString() + "-" + moment(dateRange[0]).toDate().getDate().toString() + "-" + moment(dateRange[0]).toDate().getFullYear().toString();
        let ed = (moment(dateRange[1]).toDate().getMonth()+1).toString() + "-" + moment(dateRange[1]).toDate().getDate().toString() + "-" + moment(dateRange[1]).toDate().getFullYear().toString();
        console.log(`https://localhost:44343/data/statistics/bill/from=${sd}to=${ed}`);
        axios.get(`https://localhost:44343/data/statistics/bill/from=${sd}to=${ed}			`)
            .then(
                res=>{

                    const resData = res.data;
                    let labels = [];
                    let datas = [];
                    let start = moment(dateRange[0],"mm dd yyyy");
                    let end = moment(dateRange[1],"mm dd yyyy");
                    console.log("Chạy nè");
                    let diff = end.diff(start, 'day')
                    let range = []
                    for (let i = 0; i <= diff; i++) {
                        range.push(moment(dateRange[0]).add(i, 'day'));
                    }
                    range.forEach((ran)=>{
                        labels.push(ran.toDate().toLocaleDateString());
                        datas.push(0);
                    })
                    resData.forEach((datare)=>{                
                        const temp = (moment(datare.ngaydat).toDate().toLocaleDateString());
                        let i = labels.indexOf(temp)
                        datas[i]+=datare.tongtien;
                    });
                    setgraph(
                        {
                            labels: labels,
                            datasets: [
                                {
                                    label: "Doanh thu",
                                    data: datas,
                                    fill: true,
                                    backgroundColor: "rgba(75,192,192,0.2)",
                                    borderColor: "rgba(75,192,192,1)"
                                }
                            ]
                        }
                    );

                }
            )
            .catch(err=>{
                let labels = [];
                let datas = [];
                let start = moment(dateRange[0],"mm dd yyyy");
                let end = moment(dateRange[1],"mm dd yyyy");
                let diff = end.diff(start, 'day')
                let range = []
                for (let i = 0; i <= diff; i++) {
                    range.push(moment(dateRange[0]).add(i, 'day'));
                }
                range.forEach((ran)=>{
                    labels.push(ran.toDate().toLocaleDateString());
                });
                labels.forEach((la)=>{
                    datas.push(0);
                })
                setgraph(
                    {
                        labels: labels,
                        datasets: [
                            {
                                label: "Doanh thu",
                                data: datas,
                                fill: true,
                                backgroundColor: "rgba(75,192,192,0.2)",
                                borderColor: "rgba(75,192,192,1)"
                            }
                        ]
                    }
                );
                console.log(graph);
            });
    }

    useEffect(() => {
        selectChartFrom()
    }, [dateRange])

    const showSelect = () => {
        switch (select) {
            case "day":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label" >Nhập ngày cần tìm: </p>
                        <input type="date" className="static-input" ></input>
                    </div>);
            case "month":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label" >Nhập tháng cần tìm: </p>
                        <input type="month" className="static-input" ref={refmonth} onClick={(e)=>setMonth(e.target.value)}></input>
                    </div>)
            case "year":
                return(
                    <div className="statict-form-value">
                        <p className="static-form-label">Nhập năm cần tìm: </p>
                        <input type="number" min="1900" max="2099" step="1" defaultValue="2021" ref={refyear} className="static-input" onClick={(e)=>setYear(e.target.value)}/>
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
            case "month":
                refmonth.current.click();
                break;
            case "year":
                refyear.current.click();
                break;
            default:
                break;
        }     
    }
    return (
        <div className="statict-main">
            <div className="statict-layout">
                <div className="statict-header"> <h2>Thống kê doanh thu</h2></div>
                <div className="statict-main-page">
                    <div className="statict-top-button">
                        <select name="statict type" className="statict-select" defaultValue="month" onChange={(e)=>setSelect(e.target.value)}>
                            <option value="month">Tháng</option>
                            <option value="year">Năm</option>
                            <option value="fromto">Khoản ngày</option>
                        </select>
                        {showSelect()}
                        <button onClick={()=>handleClick()}>Chọn</button>
                    </div>
                    <div className="statict-chart-panel">
                        {graph.length!==0?
                        <div className="statict-show-panel">
                            <Line data={graph} className="statict-chart"/>
                        </div>
                        

                        :<div>Vui lòng chọn điều kiện lọc</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}