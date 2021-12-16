import React from 'react'
import { useEffect, useState } from "react";
import LogoFT from "../../Images/LogoFT.png";
import win11 from "../../Images/win11.png";
import halo from "../../Images/halo.png";
import halo1 from "../../Images/halo1.png";
import msi from "../../Images/msi.png";
import awards from "../../Images/awards.png";
import pacman from "../../Images/pacman.png";
import dowappadroi from "../../Images/dowappadroi.png";
import sacvachoi from "../../Images/sacvachoi.png";
import tincongnghe from "../../Images/tincongnghe.png";
import chipm11 from "../../Images/chipm11.png";
import gpixel6 from "../../Images/gpixel6.png";
import airpoid from "../../Images/airpoid.png";
import macpro from "../../Images/macpro.png";
import gocgame from "../../Images/gocgame.png";
import thuthuat from "../../Images/thuthuat.png";
import shell from "../../Images/shell.png";
import checkpin from "../../Images/checkpin.png";
import offws from "../../Images/offws.png";
import cauhinhlap from "../../Images/cauhinhlap.png";
import fblite from "../../Images/fblite.png";
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
                    <div className="home-top">
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
                    <div className="home-center-tintuc ">
                        <div className="home-center-left ">
                            <div className="center-post-left">
                                <div className="title-post">
                                    <p>GÓC CÔNG NGHỆ</p>
                                </div>
                                <div className="center-left">
                                    <div className="left-left">
                                        <img src={tincongnghe} />
                                        <div className="left-txt">
                                            <p className="title-congnghe">MacOS 12 Monterey có gì mới: 10 tính năng hay...</p>
                                            <p className="dateUp">19 Tháng Mười Một, 2021</p>
                                            <p className="article-summary">Apple đã phát hành MacOS 12 Monterey được vài tuần rồi, anh em đã biết hết tính năng thú vị...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img src={chipm11} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Chip M1 Pro và M1 Max có thật sự mạnh khủng...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">5 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={gpixel6} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Google Pixel 6 và Pixel 6 Pro đối đầu iPhone 13,...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">22 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={macpro} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Macbook Pro 2021 gây tranh cãi với tai thỏ, giá từ...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">20 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={airpoid} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Đánh giá AirPods 3: thiết kế hoàn toàn mới, giá...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">20 Tháng Mười, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="center-post-left second">
                                <div className="title-post">
                                    <p>GÓC GAMING</p>
                                </div>
                                <div className="center-left">
                                    <div className="left-left">
                                        <img src={gocgame} />
                                        <div className="left-txt">
                                            <p className="title-congnghe">Naraka: Bladepoint - game PUBG "kiếm hiệp" cực hot không thể...</p>
                                            <p className="dateUp">15 Tháng Mười Hai, 2021</p>
                                            <p className="article-summary">Là một tựa game mới ra mắt không lâu, Naraka: Bladepoint đã càn quét thế giới game vì hội tủ rất nhiều...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img src={halo1} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Siêu phẩm Halo Infinite ra mắt: cấu hình và cách tải...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">15 Tháng Mười Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={msi} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">MSI – bạn đồng hành đỉnh nhất để chiến cùng game...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">15 Tháng Mười Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={awards} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Pac-Man Community sắp đổ bộ trên Facebook Gaming dự kiến sẽ siêu...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">8 Tháng Mười Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={pacman} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">Đánh giá AirPods 3: thiết kế hoàn toàn mới, giá...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">8 Tháng Hai, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="center-post-left second">
                                <div className="title-post">
                                    <p>GÓC THỦ THUẬT</p>
                                </div>
                                <div className="center-left">
                                    <div className="left-left">
                                        <img src={thuthuat} />
                                        <div className="left-txt">
                                            <p className="title-congnghe">4 cách xóa, gỡ các ứng dụng trên Macbook đơn giản</p>
                                            <p className="dateUp">3 Tháng Mười Hai, 2021</p>
                                            <p className="article-summary">Bạn từng cài đặt một ứng dụng trên Macbook và muốn xoá nó đi khi không sử dụng nữa? Hoặc cần gỡ...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img src={cauhinhlap} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">5 cách kiểm tra cấu hình laptop đầy đủ, đơn giản...</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">24 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={offws} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">5 cách tắt Windows Defender (Windows Security) trên Windows 10</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">20 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={checkpin} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">2 cách kiểm tra độ chai pin laptop cực nhanh, cực...</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">19 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img src={shell} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc">6 cách sửa lỗi “Shell Infrastructure Host Has Stopped Working” trên...</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">19 Tháng Mười, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-center-right">
                            <div className="center-right">
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/Cong-nghe-KM-T12.jpg" />
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/Cong-nghe-Apple.png" />
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2020/07/Covid.jpg" />
                            </div>
                            <div className="title-post-right">
                                <span>BÀI VIẾT QUAN TÂM</span>
                            </div>
                            <div className="center-left">
                                <div className="right-top">
                                    <img src={fblite} />
                                    <div className="right-txt-care">
                                        <p className="title-congnghe">Facebook lite có thực sự tối ưu như bạn tưởng?</p>
                                        <p className="dateUp">25 Tháng Bảy, 2018</p>
                                        <p className="article-summary">Có bao giờ các bạn tự hỏi, mục đích ra đời của Facebook lite là gì, trong khi đó Facebook gốc đã là...</p>
                                    </div>
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
