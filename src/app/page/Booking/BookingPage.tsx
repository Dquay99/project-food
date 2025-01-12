import React, {useState} from 'react';
import './BookingPage.scss';

function BookingPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        guestCount: '',
        eventDate: '',
        eventType: '',
        fullService: false,
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        let fullService = false;
        if (type === 'checkbox' && checked && formData.fullName && formData.phone && formData.address && formData.guestCount && formData.eventDate && formData.eventType) {
            fullService = true
        }
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
            fullService: fullService
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
        const phoneRegex = /^(0|\+84)(3[2-9]|5[2-9]|7[0|6-9]|8[1-9]|9[0-9])\d{7}$/;
        const numberRegex = /^\d+$/;

        if (!nameRegex.test(formData.fullName)) {
            alert('Họ và Tên chỉ được chứa chữ cái.');
            return;
        }

        if (!phoneRegex.test(formData.phone)) {
            alert('Số điện thoại không hợp lệ.');
            return;
        }

        if (!numberRegex.test(formData.guestCount)) {
            alert('Số lượng khách chỉ được chứa số.');
            return;
        }

        alert('Thông tin hợp lệ! Gửi thành công.');
        console.log(formData)

        setFormData({
            fullName: '',
            phone: '',
            address: '',
            guestCount: '',
            eventDate: '',
            eventType: '',
            fullService: false,
        })
    };


    return (
        <div className={"BookingPage"}>

            <div className="form-container">
                <h1>Liên Hệ Đặt Tiệc</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Họ và Tên</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Nhập họ và tên"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Nhập địa chỉ"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="guestCount">Số lượng khách</label>
                        <input
                            type="text"
                            id="guestCount"
                            name="guestCount"
                            placeholder="0"
                            value={formData.guestCount}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="eventDate">Ngày tổ chức sự kiện</label>
                        <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="eventType">Loại sự kiện</label>
                        <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Chọn loại sự kiện</option>
                            <option value="wedding">Tiệc cưới</option>
                            <option value="birthday">Tiệc sinh nhật</option>
                            <option value="tea_party">Tiệc trà bánh</option>
                            <option value="grand_opening">Tiệc khai trương</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                id="fullService"
                                name="fullService"
                                checked={formData.fullService}
                                onChange={handleChange}
                            />
                            Xác Nhận Thông Tin .
                        </label>
                    </div>

                    <button type="submit" disabled={!formData.fullService}>Gửi Thông Tin</button>
                </form>
            </div>
        </div>
    )
        ;
}

export default BookingPage;
