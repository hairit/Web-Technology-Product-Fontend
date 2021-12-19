import React from 'react'
import '../../CSS/Chinhsachvanchuyen.css'
export default function Chinhsachvanchuyen() {
    return (
        <div className='body-policy-delivery-wrapper'>
            <div className="lappe-delivery-static-container">
                <h2 class="lappe-delivery-static-heading2">CHÍNH SÁCH GIAO HÀNG</h2>
                <img src="https://www.hanoicomputer.vn/media/lib/chinh_sach_van_chuyen_hang.jpg" class="lappe-delivery-static-image loaded" alt="chính sách vận chuyển hàng của Lappe" data-was-processed="true" />
                <img src="https://www.hanoicomputer.vn/media/lib/banner-ship-16-05.png" class="lappe-delivery-static-image loaded" alt="Lapee giao hàng toàn quốc" data-was-processed="true" />
                <h3 class="lappe-delivery-static-heading3">1. LƯU Ý:</h3>
                <p class="lappe-delivery-static-text"> - Sau khi bạn đặt hàng, trong vòng 12 giờ làm việc chúng tôi sẽ liên lạc lại để xác nhận và kiểm tra thông tin. - Những rủi ro phát sinh trong quá trình vận chuyển (va đập, ẩm ướt, tai nạn..) có thể ảnh hưởng đến hàng hóa, vì thế xin Quý Khách vui lòng kiểm tra hàng hóa thật kỹ trước khi ký nhận. Máy tính Hà Nội sẽ không chịu trách nhiệm với những sai lệch hình thức của hàng hóa sau khi Quý khách đã ký nhận hàng.</p>
                <h3 class="lappe-delivery-static-heading3">2. BẢNG GIÁ DỊCH VỤ GIAO HÀNG:</h3>
                <table class="lappe-delivery-static-table">
                    <tbody className='body-table-delivery'>
                        <tr className='delivery-first-child-tr'>
                            <td className="delivery-table-td1"><strong className='delivery-td-strong-first-child'>Theo giá trị đơn hàng</strong></td>
                            <td className="delivery-table-td1"><strong className='delivery-td-strong-first-child'>Số Km được Miễn Phí</strong></td>
                            <td className="delivery-table-td3"><strong className='delivery-td-strong-first-child'>Thời gian đáp ứng</strong></td>
                            <td className="delivery-table-td4"><strong className='delivery-td-strong-first-child'>Thu phí</strong></td>
                        </tr>
                        <tr className='delivery-tr-child'>
                            <td>Dưới 200.000đ</td>
                            <td></td>
                            <td>Giao hàng trong vòng 6h</td>
                            <td>30.000đ / 1 lần giao (trong vòng 10km)
                                40.000đ / 1 lần giao (trong vòng 15km)
                                50.000đ / 1 lần giao (trong vòng 20km)
                                Trên 20km thu 6.000đ/km - Tối đa 30km
                            </td>
                        </tr>
                        <tr className="delivery-nth-child">
                            <td>Trên 200.000đ</td>
                            <td></td>
                            <td>Giao hàng trong vòng 2h (*)</td>
                            <td>20.000đ /1 lần giao (trong vòng
                                15km)
                                Từ km thứ 16 thu phí 6.000/km (chở hàng bằng ô tô thu phí 10.000đ/km).
                            </td>
                        </tr>
                        <tr className='delivery-tr-child'>
                            <td>Trên 500.000đ</td>
                            <td>20.km</td>
                            <td>Giao hàng trong vòng 2h (*)</td>
                            <td>Từ km thứ 21 thu phí 6.000/km (chở hàng bằng ô tô thu phí 10.000đ/km).</td>
                        </tr>
                        <tr className="delivery-nth-child">
                            <td>Trên 1 triệu đồng</td>
                            <td>25.km</td>
                            <td>Giao hàng trong vòng 3h</td>
                            <td>Từ km thứ 26 thu phí 6.000/km (chở hàng bằng ô tô thu phí 10.000đ/km).</td>
                        </tr>
                        <tr className='delivery-tr-child'>
                            <td>Trên 3 triệu đồng</td>
                            <td>35.km</td>
                            <td>Giao hàng trong vòng 4h (&lt; 36km) .  Giao hàng trong 24h (36km-45km)</td>
                            <td>Từ km thứ 36 thu phí 6.000/km (chở hàng bằng ô tô thu phí 10.000đ/km).</td>
                        </tr>
                        <tr className="delivery-nth-child">
                            <td>Trên 50 triệu đồng</td>
                            <td>50.km</td>
                            <td>Theo thỏa thuận với khách hàng</td>
                            <td>Từ km thứ 51 thu phí 10.000/km hoặc theo tư vấn từ nhân viên bán hàng.</td>
                        </tr>
                        <tr className='delivery-tr-child'>
                            <td>Trên 100 triệu đồng</td>
                            <td>100.km</td>
                            <td>Theo thỏa thuận với khách hàng</td>
                            <td>Từ km thứ 101 thu phí 10.000/km hoặc theo tư vấn từ nhân viên bán hàng.</td>
                        </tr>
                        <tr className="delivery-nth-child">
                            <td>Trên 200 triệu đồng</td>
                            <td>200.km</td>
                            <td>Theo thỏa thuận với khách hàng</td>
                            <td>Từ km thứ 201 thu phí 10.000/km hoặc theo tư vấn từ nhân viên bán hàng.</td>
                        </tr>
                        <tr className='delivery-tr-child'>
                            <td>Trên 300 triệu đồng</td>
                            <td>300.km</td>
                            <td>Theo thỏa thuận với khách hàng</td>
                            <td>Từ km thứ 301 thu phí 10.000/km hoặc theo tư vấn từ nhân viên bán hàng.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}
