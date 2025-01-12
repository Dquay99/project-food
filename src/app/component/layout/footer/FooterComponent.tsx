import './footer.scss'
import bg from "../../../../assets/img/background-footer.jpg";
import {FacebookFilled, YoutubeFilled} from "@ant-design/icons";

export const FooterComponent = () => {
  return (
    <div className={'footer-component'}>
      <img src={bg} alt="" className={'bg'}/>

      <div className={'d-flex'}>
        <div className={'footer-item'}>
          <div className={'title'}>
            Về chúng tôi
          </div>
          <div>
            <div>
              Số điện thoại: 095.366.4722
            </div>
            <div>
              Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội
            </div>
          </div>
        </div>

        <div className={'footer-item'}>
          <div className={'title'}>
            Phương thức thanh toán
          </div>
          <div className={'d-flex gap-30'}>
            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" alt=""/>
            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" alt=""/>
            <img src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png" alt=""/>
          </div>
        </div>

        <div className={'footer-item'}>
          <div className={'title'}>
            Truyền thông xã hội
          </div>
          <div>
            <div style={{marginBottom: 10}}>
              <FacebookFilled/> Facebook
            </div>
            <div>
              <YoutubeFilled/> Youtube
            </div>
          </div>
        </div>

        <div className={'footer-item'}>
          <div className={'title'}>
            Hỗ trợ khách hàng
          </div>
          <div>
            <div>
              <span className={'text-bold'}>Liên hệ Hotline:</span> 036.555.1123
            </div>
            <div>
              <span className={'text-bold'}>Email:</span> happy.@gmal.com
            </div>
          </div>
          <div>
            <span className={'text-bold'}>Địa chỉ:</span> Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội
          </div>
        </div>
      </div>
      <hr/>
      <div className={'bottom'}>
        <div>
          <div style={{marginBottom: 20}}>
            Công ty TNHH Minh Trí
          </div>
          <div>
            số CND/DN/ cấp ngày 2/1/2020
          </div>
        </div>
        <div>
          <img
            width={200}
            src="data:image/png;base64,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"
            alt=""/>
        </div>
      </div>
    </div>
  )
}