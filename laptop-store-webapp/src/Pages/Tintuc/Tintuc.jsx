import React from 'react'
import { useEffect, useState } from "react";
import LogoFT from "../../Images/LogoFT.png";
import win11 from "../../Images/win11.png";
import halo from "../../Images/halo.png";
import dowappadroi from "../../Images/dowappadroi.png";
import sacvachoi from "../../Images/sacvachoi.png";
import Tintucs from "../../CSS/Tintucs.css";
import { NavLink } from "react-router-dom";

import { FaFacebookSquare,FaGooglePlusSquare,FaLinkedin,FaFacebookMessenger } from "react-icons/fa";
export default function Tintuc({changeAdminMode}) {
    useEffect(() =>{
        changeAdminMode('on');
    },[])
    return (
        <div className="wrapper full-page">
            <div className="container ">
                <div className="header">
                    <div className="all-header">
                        <div className="top-header">
                            <FaGooglePlusSquare className="icon-top-header" />
                            <FaLinkedin className="icon-top-header" />
                            <FaFacebookMessenger className="icon-top-header" />
                            <FaFacebookSquare className="icon-top-header"/>
                        </div>
                        <div className="center-header">
                            <div className="logo-store">
                                <img src={LogoFT} />
                            </div>
                            <div className="banner-header">
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/728x90-2.jpg"/>
                            </div>
                        </div>
                        <nav className="menu" role='navigation'>
                            <ol className="ol-nav">
                                <li className="menu-item"><NavLink activeClassName='active-tintuc' exact to="">Tin tức</NavLink></li>
                                <li className="menu-item"><NavLink to="">Windows 11</NavLink></li>
                                <li className="menu-item" aria-haspopup="true">
                                <NavLink to="">Review</NavLink>
                                <ol className="sub-menu" aria-label="submenu">
                                    <li className="menu-item"><a href="#0">Laptop Gaming</a></li>
                                    <li className="menu-item"><a href="#0">Bàn phím cơ</a></li>
                                    <li className="menu-item"><a href="#0">Bild PC</a></li>
                                </ol>
                                </li>
                                <li className="menu-item" aria-haspopup="true">
                                <NavLink to="">Thủ thuật - Hướng dẫn</NavLink>
                                <ol className="sub-menu" aria-label="submenu">
                                    <li className="menu-item"><a href="#0">Phần mềm</a></li>
                                    <li className="menu-item"><a href="#0">Mẹo công nghệ</a></li>
                                    <li className="menu-item"><a href="#0">Giải pháp doanh nghiệp</a></li>
                                </ol>
                                </li>
                                <li className="menu-item"><NavLink to="">Laptop Sinh viên 2021</NavLink></li>
                                <li className="menu-item"><NavLink to="">Contact</NavLink></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div id="body" className="home">
                    <div className="home-right">
                        <NavLink to="congnghe" className="congnghe" >
                            <img src={win11} />
                        </NavLink>
                        <div className="title-tintuc">
                            <p>6 Cách tắt windows 11 "vi diệu" nhanh gọn lẹ có thể bạn chưa biết</p>
                        </div>
                    </div>
                    <div className="home-left">
                        <div className="home-left-top">
                            <NavLink to="game" className="congnghe game" >
                                <img src={halo} />
                            </NavLink>
                            <div className="title-game">
                                <p>Siêu phẩm Halo Infinite ra mắt: cấu hình và cách tải chơi ngay kẻo tiếc!</p>
                            </div>
                        </div>
                        <div className="home-left-bottom">
                            <div className="home-left-bottom-right">
                            <NavLink to="game" className="congnghe left-bottom" >
                                <img src={dowappadroi} />
                            </NavLink>
                            <div className="title-left-bottom">
                                <p>Cách tải và cài đặt ứng dụng Android trên Windows 11</p>
                            </div>
                            </div>
                            <div className="home-left-bottom-left left-bottom">
                                <NavLink to="game" className="congnghe" >
                                    <img src={sacvachoi} />
                                </NavLink>
                                <div className="title-right-bottom">
                                    <p>Vừa sạc vừa dùng laptop có sao không? Cách sạc laptop đúng không bị chai pin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                
                </div>
            </div>
        </div>

    )
}
