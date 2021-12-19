import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/Lienhe.css'
export default function LienHe() {
    return (
        <div className="main">
            <div className="content">
                <div className="wrapper-text-infor">
                    <div className="text-infor">
                        <h2 className='text'>Thông Tin Liên Hệ</h2>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="row-contact-form">
                        <div className="contact-col1">
                            <div className="contact-form-content contact-section contact-block">
                                <div className="contact-form-group">
                                    <div className="contact-form-title"><em className="pvi-Contact_PhoneCall"></em>Tổng đài miễn phí</div>
                                    <div className="text-contact"><p>Tư vấn mua hàng: <a href="tel:18006868" className="contact-href">1800 6867</a></p></div>
                                    <div className="text-contact"><p>Chăm sóc khách hàng: <a href="tel:18006869" className="contact-href">1800 6865</a></p></div>
                                    <div className="text-contact"><p>Email: <a href="mailto:cskh@lappe.vn" className="contact-href">cskh@lappe.vn</a></p></div>
                                </div>
                                <div className="contact-form-group">
                                    <div className="contact-form-title"><em className="pvi-Contact_Envelope"></em>Liên hệ báo giá</div>
                                    <div className="text-contact"><p>Email: <a href="mailto:baogia@lappe.vn" className="contact-href">baogia@lappe.vn</a></p></div>
                                </div>
                                <div className="contact-form-group">
                                    <div className="contact-form-title"><em className="pvi-Contact_Envelope" ></em>Hợp tác phát triển</div>
                                    <div className="text-contact"> <p>Email: <a href="mailto:hoptac@lappe.vn" className="contact-href">hoptac@lappe.vn</a></p> </div>
                                </div>
                            </div>
                        </div>
                        <div className='contact-col2'>
                            <div className="contact-form-content contact-section contact-block">
                                <div className="row contact-main-info-row">
                                    <div className="contact-col2-row1">
                                        <div className="contact-main-info-title">Lappe luôn cung cấp dịch vụ bán hàng và phục vụ hàng đầu:</div>
                                        <div className="contact-row-1">
                                            <div class="contact-row-1-col-1">
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <div className="text-contact"> <p><strong>Sản phẩm đa dạng</strong> cho mọi khách hàng có nhu cầu về giá, tính năng, hãng sản xuất...</p> </div>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <div className="text-contact"><p><strong>Miễn phí giao hàng tận nơi</strong> trên Toàn Quốc với mọi đơn hàng từ 500.000Đ* (<NavLink to='/chinhsachvanchuyen' className="contact-href">Chi tiết chính sách vận chuyển và lắp đặt</NavLink>)</p> </div>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <div className="text-contact"> <p><strong>Khách hàng thoải mái trải nghiệm</strong> sản phẩm yêu thích và hot nhất thị trường</p> </div>
                                                </div>
                                            </div>
                                            <div class="contact-row-1-col-2">
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <div className="text-contact"><p><strong>Nhân viên tư vấn nhiệt tình</strong> giúp khách hàng lựa chọn được sản phẩm ưng ý và phù hợp nhất</p> </div>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <div className="text-contact"><p><strong>Bảo hành chính hãng</strong> cho các sản phẩm mua tại Lappe (<NavLink to='/chinhsachbaohanh' className="contact-href">Chi tiết chính sách bảo hành</NavLink>)</p> </div>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <div className="text-contact"><p><strong>Chính sách đổi trả ưu đãi</strong> dành cho khách hàng (<a href="https://phongvu.vn/landing/chinh-sach-doi-tra-hang-va-hoan-tien.html" target="_blank" className="contact-href">Chi tiết chính sách đổi trả</a>)</p> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-row-map">
                        <div className="contact-col-map">
                            <div className="contact-main-info-block contact-block contact-section">
                                <div className="row contact-main-info-row contact-company-info">
                                    <div className="contact-map-col-1">
                                        <a className="contact-map-block">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7339457671546!2d106.71451131483632!3d10.754976262530107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7b4f97c553%3A0x383bc1d9ca1a872c!2zQTc1IE5ndXnhu4VuIFRo4bqnbiBIaeG6v24sIFBoxrDhu51uZyAxOCwgUXXhuq1uIDQsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1639799723685!5m2!1svi!2sus" className='contact-map' allowfullscreen="" loading="lazy"></iframe>
                                        </a>
                                    </div>
                                    <div className="contact-map-col-2">
                                        <div className="contact-company-title">Trung tâm bảo hành Lappe Miền Nam</div>
                                        <div className="text-contact">  <p>Địa chỉ: A75 Nguyễn Thần Hiến Phường 18 Quận 4,TP. Hồ Chí Minh</p> </div>
                                        <div className="text-contact">  <p>Điện thoại: 0902535188</p> </div>
                                        <div className="text-contact">  <p>Thời gian làm việc: 9h-17h</p> </div>
                                    </div>

                                </div>
                                <div className="row contact-main-info-row contact-company-info">
                                    <div className="contact-map-col-1">
                                        <a className="contact-map-block">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3918.230664301628!2d106.59947381483698!3d10.870052760430818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMjIvMWEg4bqkcCBDaMOhbmggMiwgeMOjIFTDom4gWHXDom4sIEjDs2MgTcO0biwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1639802599500!5m2!1svi!2s" className="contact-map" allowfullscreen="" loading="lazy"></iframe>
                                        </a>
                                    </div>
                                    <div className="contact-map-col-2">
                                        <div className="contact-company-title">Trung tâm bảo hành Lappe Miền Nam</div>
                                        <div className="text-contact">  <p>Địa chỉ: 22/1A ấp chánh 2 , xã Tân Xuân , Hóc Môn</p> </div>
                                        <div className="text-contact">  <p>Điện thoại: 0903412298</p> </div>
                                        <div className="text-contact">  <p>Thời gian làm việc: 9h-17h</p> </div>
                                    </div>

                                </div>
                                <div className="row contact-main-info-row contact-company-info">
                                    <div className="contact-map-col-1">
                                        <a className="contact-map-block">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31410.94766671419!2d106.22649737229612!3d10.231837715577145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa0c92d16ad2b%3A0x3543e46285944c21!2zUGjDuiBTxqFuLCBDaOG7oyBMw6FjaCwgQuG6v24gVHJlLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1639802381913!5m2!1svi!2s" className="contact-map" allowfullscreen="" loading="lazy"></iframe>
                                        </a>
                                    </div>
                                    <div className="contact-map-col-2">
                                        <div className="contact-company-title">Văn phòng điều hành Lappe Miền Tây</div>
                                        <div className="text-contact">  <p>Địa chỉ: 184/88 Phú Sơn Chợ Lách Bến Tre</p> </div>
                                        <div className="text-contact">  <p>Điện thoại: 090678149</p> </div>
                                    </div>

                                </div>

                                <div className="row contact-main-info-row contact-company-info">
                                    <div className="contact-map-col-1">
                                        <a className="contact-map-block">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2761035174967!2d109.1848061148429!3d11.9553758395941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170f2b324f27d09%3A0x273228f3e6a2f3d1!2zSMOyYQ!5e0!3m2!1svi!2s!4v1639804156438!5m2!1svi!2s" className="contact-map" allowfullscreen="" loading="lazy"></iframe>
                                        </a>
                                    </div>
                                    <div className="contact-map-col-2">
                                        <div className="contact-company-title">Văn phòng điều hành Lappe Miền Trung</div>
                                        <div className="text-contact">  <p>Địa chỉ: Hoà do 1B, Cam Phúc Bắc, Cam Ranh, Khánh Hoà</p> </div>
                                        <div className="text-contact">  <p>Điện thoại: 0779038245</p> </div>
                                        <div className="text-contact">  <p>Thời gian làm việc: 9h-17h</p> </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}
