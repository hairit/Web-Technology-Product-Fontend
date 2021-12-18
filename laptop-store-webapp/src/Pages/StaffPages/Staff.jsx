import axios from 'axios'
import React from 'react'
import StaffBills from './StaffBills'
import StaffCustomers from './StaffCustomers'
import { useState , useEffect } from 'react'
import { RiBillFill} from 'react-icons/ri'
import { BiLogOut } from 'react-icons/bi';
import {FaUserTie , FaUserFriends} from 'react-icons/fa';
import { BrowserRouter as Router , Route, NavLink, useHistory } from 'react-router-dom'
import '../../CSS/Staff.css'
export default function Staff({changeAdminMode,match,logout}) {
    const history = useHistory();
    useEffect(() => {
        changeAdminMode("on");
        axios.get(`https://localhost:44343/data/user/${match.match.params.idUser}`,null)
            .then(res => {
                if(res.data.mode !== "STAFF"){
                    changeAdminMode("off");
                    history.push("/login");
                }
            })
            .catch(() => {
                history.push("/login");
                changeAdminMode("off");
            })
    }, [])
    return (
        <Router>
        <div className="staff">
            <div className="staff-menu">
                <div className="staff-menu-left">
                    <NavLink className="staff-menu-tab" to={`/staff/${match.match.params.idUser}/bills`}><RiBillFill className="staff-menu-icon" />Quản lý đơn hàng</NavLink>
                    <NavLink className="staff-menu-tab" to={`/staff/${match.match.params.idUser}/customers`}><FaUserFriends className="staff-menu-icon" />Tra cứu khách hàng</NavLink>
                </div>
                <div className="staff-logout" onClick={() => {
                                logout(history);
                            }} ><BiLogOut className="staff-logout-icon" />Thoát
                </div>
            </div>
            <div className="staff-main">
                <Route path="/staff/:idUser/bills" component={() => <StaffBills  /> }></Route>
                <Route path="/staff/:idUser/Customers" component={() => <StaffCustomers  /> }></Route>
            </div>
        </div>
        </Router>
    )
}