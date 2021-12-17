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
import Minecraft from "../../Images/Minecraft.png";
import computer from "../../Images/computer.png";
import theyear from "../../Images/theyear.png";
import thegame from "../../Images/thegame.png";
import ggmeet from "../../Images/ggmeet.png";
import asuszen from "../../Images/asuszen.png";
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
                                        <img className="hover-p" src={tincongnghe} />
                                        <div className="left-txt">
                                            <p className="title-congnghe hover-p">MacOS 12 Monterey có gì mới: 10 tính năng hay...</p>
                                            <p className="dateUp">19 Tháng Mười Một, 2021</p>
                                            <p className="article-summary">Apple đã phát hành MacOS 12 Monterey được vài tuần rồi, anh em đã biết hết tính năng thú vị...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img className="hover-p" src={chipm11} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Chip M1 Pro và M1 Max có thật sự mạnh khủng...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">5 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={gpixel6} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Google Pixel 6 và Pixel 6 Pro đối đầu iPhone 13,...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">22 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={macpro} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Macbook Pro 2021 gây tranh cãi với tai thỏ, giá từ...</p>
                                                <span className="ttcn">Tin tức công nghệ</span>
                                                <p className="dateUp">20 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img  className="hover-p"src={airpoid} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Đánh giá AirPods 3: thiết kế hoàn toàn mới, giá...</p>
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
                                        <img className="hover-p" src={gocgame} />
                                        <div className="left-txt">
                                            <p className="title-congnghe hover-p">Naraka: Bladepoint - game PUBG "kiếm hiệp" cực hot không thể...</p>
                                            <p className="dateUp">15 Tháng Mười Hai, 2021</p>
                                            <p className="article-summary">Là một tựa game mới ra mắt không lâu, Naraka: Bladepoint đã càn quét thế giới game vì hội tủ rất nhiều...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img className="hover-p" src={halo1} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Siêu phẩm Halo Infinite ra mắt: cấu hình và cách tải...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">15 Tháng Mười Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={msi} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">MSI – bạn đồng hành đỉnh nhất để chiến cùng game...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">15 Tháng Mười Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={awards} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Pac-Man Community sắp đổ bộ trên Facebook Gaming dự kiến sẽ siêu...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">8 Tháng Mười Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={pacman} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Đánh giá AirPods 3: thiết kế hoàn toàn mới, giá...</p>
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
                                        <img className="hover-p"src={thuthuat} />
                                        <div className="left-txt">
                                            <p className="title-congnghe hover-p">4 cách xóa, gỡ các ứng dụng trên Macbook đơn giản</p>
                                            <p className="dateUp">3 Tháng Mười Hai, 2021</p>
                                            <p className="article-summary">Bạn từng cài đặt một ứng dụng trên Macbook và muốn xoá nó đi khi không sử dụng nữa? Hoặc cần gỡ...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img className="hover-p" src={cauhinhlap} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">5 cách kiểm tra cấu hình laptop đầy đủ, đơn giản...</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">24 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={offws} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">5 cách tắt Windows Defender (Windows Security) trên Windows 10</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">20 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={checkpin} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">2 cách kiểm tra độ chai pin laptop cực nhanh, cực...</p>
                                                <span className="ttcn">Thủ thuật</span>
                                                <p className="dateUp">19 Tháng Mười Một, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={shell} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">6 cách sửa lỗi “Shell Infrastructure Host Has Stopped Working” trên...</p>
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
                                    <img className="hover-p" src={fblite} />
                                    <div className="right-txt-care">
                                        <p className="title-congnghe hover-p">Facebook lite có thực sự tối ưu như bạn tưởng?</p>
                                        <p className="dateUp">25 Tháng Bảy, 2018</p>
                                        <p className="article-summary">Có bao giờ các bạn tự hỏi, mục đích ra đời của Facebook lite là gì, trong khi đó Facebook gốc đã là...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-product">
                        <div className="title-post-rv">
                            <p>Review sản phẩm</p>
                        </div>
                        <div className="review">
                            <div className="video-review">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/a2Lu9FwTc58" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/W3MfHBEJ0JI" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6eZTTElk31k" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zyVawxHagnI" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1_lFYLprTFw" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KVg6HxKhlbg" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="old-post">
                        <div className="title-post-rv">
                            <p>Bài viết cũ hơn</p>
                        </div>
                        <div className="posts-tt">
                            <div className="post-old">
                                <div className="posts-info">
                                    <img className="hover-p" src={Minecraft} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Minecraft 1.18 đã ra mắt và đây là những update mới siêu hay ho...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">17 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Minecraft 1.18, hay The Caves and Cliffs phần 2 đã chính thức ra mắt và được đặt kỳ vọng sẽ tiếp tục "phá đảo" vũ trụ hình khối và...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={computer} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">10+ cách sửa loa laptop bị mất tiếng đơn giản tại nhà cho Win...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Mẹo hay công nghệ</span>
                                            <p className="dateUp">17 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Laptop bị mất tiếng là một trong những lỗi nhỏ nhưng lại thường xảy ra và gây khó chịu rất nhiều khi đang làm việc hoặc giải trí...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={sacvachoi} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Vừa sạc vừa dùng laptop có sao không? Cách sạc laptop đúng không bị...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Thủ thuật - hướng dẫn</span>
                                            <p className="dateUp">16 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Với nhu cầu sử dụng laptop để làm việc và giải trí ngày càng tăng cao và liên tục như hiện nay thì dung lượng pin mặc định trên...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={theyear} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Hot: It Takes Two đoạt giải Game hay nhất của năm trong The Game...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">10 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Khi mua hoặc build một chiếc máy tính mới, RAM là vấn đề vô cùng quan trọng cần lưu tâm. Đặc biệt với những ai có nhu cầu chơi...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={thegame} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">The Game Awards 2021 có gì hot? Điểm danh những tựa game được đề...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">8 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Một lần nữa, các nhà phát triển, công ty và người chơi từ khắp nơi trên thế giới sẽ tham gia vào lễ kỷ niệm lớn nhất trong ngành...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={ggmeet} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Cách tải Google Meet về máy tính và điện thoại Android, iOS đơn giản...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Thủ thuật công nghệ</span>
                                            <p className="dateUp">7 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Google meet thì không còn xa lạ gì đối với người dùng internet khi thời gian work from home ngày càng trở nên quen thuộc.</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={asuszen} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Tậu laptop ASUS ZenBook OLED UX325 và UX363, nhận ngay chuột Newmen bao mượt!</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin tức</span>
                                            <p className="dateUp">24 Tháng Mười Một, 2021</p>
                                        </p>
                                        <p className="article-summary">Đều cùng ra mắt trong năm nay, 2 chiếc ZenBook mỏng gọn nhà Asus  UX325 & UX363 đều gây ấn tượng cực mạnh vì giá rẻ mà có màn...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/12/makey-makey-la-gi-218x150.jpg" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Makey Makey là gì? Bất ngờ khi có thể chơi game bằng chuối!</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin tức công nghệ</span>
                                            <p className="dateUp">6 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Makey Makey là một thiết bị điện tử mới sẽ khiến mọi người phải trầm trồ khi lần đầu nghe về nó. Chỉ cần một nút bấm, bạn đã...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/12/Snapdragon-8-Gen-1-3-218x150.png" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Siêu chip Snapdragon 8 Gen 1 ra mắt với thông số gây ngỡ ngàng</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin tức công nghệ</span>
                                            <p className="dateUp">3 Tháng Mười Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Snapdragon 8 Gen 1 - con mới nhất, đỉnh nhất hiện tại của nhà sản xuất chip hàng đầu thế giới Qualcomm vừa chính thức được trình làng ngày...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/maxresdefault-1-16216810338771745108916-218x150.jpg" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Cấu hình chơi GTA 5 và link tải free đầy đủ nhất</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">30 Tháng Mười Một, 2021</p>
                                        </p>
                                        <p className="article-summary">Grand Theft Auto hay GTA luôn là cái tên được nằm trong bảng xếp hạng top game có lượt tải nhiều nhất thời đại. Và gần đây là GTA...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/screen-0-218x150.jpg" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Cách tải và mẹo chơi Play Together trên PC chi tiết nhất</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin tức</span>
                                            <p className="dateUp">30 Tháng Mười Một, 2021</p>
                                        </p>
                                        <p className="article-summary">Play Together là game hot hiện nay đang được giới trẻ yêu thích. Play Together nếu bạn dịch nó sang Tiếng Anh đó là để chơi cùng nhau. Nhưng...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/cach-scan-tai-lieu-bang-dien-thoai-218x150.jpg"/>
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Cách scan tài liệu bằng điện thoại iPhone, Android đơn giản</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin tức</span>
                                            <p className="dateUp">17 Tháng Mười Một, 2021</p>
                                        </p>
                                        <p className="article-summary">Với sự phát triển công nghệ ngày nay, chúng ta không nhất thiết phải đánh tài liệu thủ công bằng tay nữa mà luôn có thể scan (quét) trực...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-tintuc">
                <div id="footer">
                    <div className="ft-top">
                        <div className="ft-top-expost">
                            <div className="title-expost">
                                <p>BÀI VIẾT TIÊU BIỂU</p>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/12/71CWZzoFlL._SL1500_-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Nhiều lần bị tai nghe “vặt đầu”, mình mua hẳn tai...</p>
                                    <p className="dateUp">17/12/2021</p>
                                </div>
                            </div>
                            <div className="item-post-ft ct">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/12/ihbijnk-100x70.jpg"/>
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Vì ai cũng cần điện thoại ấn tượng, mời tải bộ...</p>
                                    <p className="dateUp">17/12/2021</p>
                                </div>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/12/243132-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Hướng dẫn cho phép ứng dụng quyền “lên tiếng” khi đang...</p>
                                    <p className="dateUp">17/12/2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="ft-top-plpost">
                            <div className="title-expost">
                                <p>BÀI VIẾT PHỔ BIẾN</p>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/11/dadawd-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Top 10 loài khủng long nguy hiểm nhất thời tiền sử,...</p>
                                    <p className="dateUp">16/08/2020</p>
                                </div>
                            </div>
                            <div className="item-post-ft ct">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2019/07/87161149_1005006939882359_347389113952894976_n-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">TFTactics – Ứng dụng “nhắc bài” cực đỉnh cho game thủ...</p>
                                    <p className="dateUp">23/07/2019</p>
                                </div>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gvn360.com/wp-content/uploads/2019/12/%C3%A1df-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Điều gì đã giúp các loài cá vùng biển sâu chịu...</p>
                                    <p className="dateUp">14/12/2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="ft-top-xemnhieu">
                            <div className="title-expost">
                                <p>MỤC XEM NHIỀU NHẤT</p>
                            </div>
                            <div className="txt-xemnhieu">
                                <p>Công nghệ</p>
                                <p>Tin công nghệ</p>
                                <p>Tin game</p>
                                <p>TOP GAME</p>
                                <p>Thủ thuật</p>
                                <p>Hình nền</p>
                                <p>Review</p>
                                <p>Anime</p>
                            </div>
                        </div>
                    </div>
                    <div className="ft-bottom">
                        <div className="logo-ft"><img src={LogoFT} /></div>
                        <div className="about-us">
                            <div className="ft-top-xemnhieu">
                                <div className="title-expost">
                                    <p>VỀ CHÚNG TÔI</p>
                                </div>
                                <div className="ab-us-txt">
                                    <p>LAPPEE - NEWS</p>
                                    <p>Liên hệ chúng tôi: <span>info@.com</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="follow">
                            <div className="ft-top-xemnhieu">
                                <div className="title-expost">
                                    <p>THEO DÕI CHÚNG TÔI</p>
                                </div>
                                <div className="item-follow">
                                    <FaFacebookSquare className="item-fl" />
                                    <FaFacebookMessenger className="item-fl" />
                                    <FaGooglePlusSquare className="item-fl" />
                                    <FaLinkedin className="item-fl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
