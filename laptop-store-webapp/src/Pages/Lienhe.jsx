import React from 'react'
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
                        <div className="col-md-4 col-sm-5">
                            <div className="contact-form-content contact-section contact-block">
                                <div className="contact-form-group">
                                    <div className="contact-form-title"><em className="pvi-Contact_PhoneCall"></em>Tổng đài miễn phí</div>
                                    <p>Tư vấn mua hàng: <a href="tel:18006868">1800 6867</a></p>
                                    <p>Chăm sóc khách hàng: <a href="tel:18006869">1800 6865</a></p>
                                    <p>Email: <a href="mailto:cskh@lappe.vn">cskh@lappe.vn</a></p>
                                </div>
                                <div className="contact-form-group">
                                    <div className="contact-form-title"><em className="pvi-Contact_Envelope"></em>Liên hệ báo giá</div>
                                    <p>Email: <a href="mailto:baogia@lappe.vn">baogia@lappe.vn</a></p>
                                </div>
                                <div className="contact-form-group">
                                    <div className="contact-form-title"><em className="pvi-Contact_Envelope"></em>Hợp tác phát triển</div>
                                    <p>Email: <a href="mailto:hoptac@lappe.vn">hoptac@lappe.vn</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-7 pl-0'>
                            <div className="contact-form-content contact-section contact-block">
                                <div className="row contact-main-info-row">
                                    <div className="col-xs-6">
                                        <div className="contact-main-info-title">Lappe luôn cung cấp dịch vụ bán hàng và phục vụ hàng đầu:</div>
                                        <div className="row">
                                            <div class="col-xs-6">
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <p><strong>Sản phẩm đa dạng</strong> cho mọi khách hàng có nhu cầu về giá, tính năng, hãng sản xuất...</p>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <p><strong>Miễn phí giao hàng tận nơi</strong> trên Toàn Quốc với mọi đơn hàng từ 500.000Đ* (<a href="https://phongvu.vn/landing/chinh-sach-van-chuyen-lap-dat.html">Chi tiết chính sách vận chuyển và lắp đặt</a>)</p>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <p><strong>Khách hàng thoải mái trải nghiệm</strong> sản phẩm yêu thích và hot nhất thị trường</p>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <p><strong>Nhân viên tư vấn nhiệt tình</strong> giúp khách hàng lựa chọn được sản phẩm ưng ý và phù hợp nhất</p>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <p><strong>Bảo hành chính hãng</strong> cho các sản phẩm mua tại Lappe (<a href="https://phongvu.vn/landing/chinh-sach-bao-hanh.html" target="_blank">Chi tiết chính sách bảo hành</a>)</p>
                                                </div>
                                                <div class="contact-main-info-section"><em class="pvi-Contact_Checked"></em>
                                                    <p><strong>Chính sách đổi trả ưu đãi</strong> dành cho khách hàng (<a href="https://phongvu.vn/landing/chinh-sach-doi-tra-hang-va-hoan-tien.html" target="_blank">Chi tiết chính sách đổi trả</a>)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="col-xs-12">
                            <div className="contact-main-info-block contact-block contact-section">
                                <div className="row contact-main-info-row contact-company-info">
                                    <div className="col-xs-6">
                                        <a class="contact-map-block">
                                            <iframe className="bando" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6696584237025!2d106.68006961509548!3d10.759922362439628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1638173238125!5m2!1svi!2s" allowfullscreen="" loading="lazy"></iframe>

                                        </a>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="contact-company-title">Văn phòng điều hành Lappe Miền Nam</div>
                                        <p>Địa chỉ: A75 Nguyễn Thần Hiến Phường 18 Quận 4,TP. Hồ Chí Minh</p>
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
