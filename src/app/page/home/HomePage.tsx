import {SliderComponent, SliderProps} from "../../component/slider/SliderComponent.tsx";
import {BannerComponent} from "../../component/banner/BannerComponent.tsx";
import {PostComponent, PostProps} from "../../component/post/PostComponent.tsx";
import {StepComponent, StepProps} from "../../component/step/StepComponent.tsx";
import './home-page.scss';
import {Button, DatePicker, InputNumber, Space} from "antd";
import {useState} from "react";
import dayjs, {Dayjs} from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {DownOutlined, UpOutlined} from "@ant-design/icons";
import img1 from '../../../assets/img/pexels-nerfee-mirandilla-1656989-3186654.jpg'
import img2 from '../../../assets/img/pexels-chanwalrus-958545.jpg'
import img3 from '../../../assets/img/pexels-elevate-1267320.jpg'
import img4 from '../../../assets/img/pexels-ella-olsson-572949-1640772.jpg'
import img5 from '../../../assets/img/pexels-robinstickel-70497.jpg'
import img6 from '../../../assets/img/pexels-vanmalidate-769289.jpg'


dayjs.extend(customParseFormat);

const posts: PostProps[] = [
  {
    name: 'sự lựa chọn ẩm thực số 1',
    image: img1,
    title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
  },
  {
    name: 'sự lựa chọn ẩm thực số 1',
    image: img2,
    title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
  },
  {
    name: 'sự lựa chọn ẩm thực số 1',
    image: img3,
    title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
  },
  {
    name: 'sự lựa chọn ẩm thực số 1',
    image: 'https://intern-project-chi.vercel.app/static/media/bg1.da6d3327978f205184d6.jpg',
    title: 'Thuộc Golden Gate Group - 15 năm kinh nghiệp, hơn 400 nhà hàng toàn quốc'
  }
]

const sliderItems: SliderProps = {
  items: [
    {
      image: 'https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg',
      title: `
          <div>
            Ưu đãi lên tới 30%
               <br/>
            Khi đặt set menu sum vầy
          </div> 
        `,
      path: '/#',
      description: 'Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2025'
    },
    {
      image: img1,
      title: `
          <div>
            Ưu đãi lên tới 30%
               <br/>
            Khi đặt set menu sum vầy
          </div> 
        `,
      path: '/#',
      description: 'Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2025'
    },
    {
      image: img4,
      title: `
          <div>
            Ưu đãi lên tới 30%
               <br/>
            Khi đặt set menu sum vầy
          </div> 
        `,
      path: '/#',
      description: 'Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2025'
    },
    {
      image: img5,
      title: `
          <div>
            Ưu đãi lên tới 30%
               <br/>
            Khi đặt set menu sum vầy
          </div> 
        `,
      path: '/#',
      description: 'Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2025'
    },
    {
      image: img6,
      title: `
          <div>
            Ưu đãi lên tới 30%
               <br/>
            Khi đặt set menu sum vầy
          </div> 
        `,
      path: '/#',
      description: 'Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2025'
    }
  ]
}

const steps: StepProps[] = [
  {
    svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
      <path
        d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
    </svg>,
    description: 'Khách hàng tìm hiểu thông tin và đăng kí tư vấn',
    title: 'Tìm hiểu thông tin'
  },
  {
    svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
      <path
        d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"></path>
    </svg>,
    description: 'Nhân vân liên hệ trong 2 tiếng để nhận thông tin',
    title: 'Liên hệ tư vấn'
  },
  {
    svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
      <path
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
    </svg>,
    description: 'Hai bên ký kết thỏa thuận hợp đồng',
    title: 'Ký kết hợp đống'
  },
  {
    svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
      <path
        d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
    </svg>,
    description: 'Phục vụ tiệc cho khách hàng',
    title: 'Phục vụ tiệc'
  },
  {
    svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
      <path
        d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
    </svg>,
    description: 'Xử lý thanh toán hóa đơn',
    title: 'Thanh toán'
  },
]

const initDateOrder = dayjs(new Date());

export const HomePage = () => {
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [dateOrder, setDateOrder] = useState<Dayjs>(initDateOrder);

  const onChangeDate = (date: Dayjs) => {
    console.log(date)
    if (date) {
      setDateOrder(dayjs(date))
    }
  }

  const onChangeTableNumber = (number: number | null) => {
    console.log(number);
    if (number) {
      setTableNumber(number);
    }
  }

  return (
    <div className={'home-page'}>
      <SliderComponent {...sliderItems}/>

      <BannerComponent/>

      <div className={'box-step'}>
        <h3 className={'text-bold text-uppercase title'}>5 bước để đặt tiệc</h3>
        <div className={'steps'}>
          {
            steps.map((step, index) => {
              return (
                <Space key={index}>
                  <StepComponent  stepNumber={index + 1} {...step}/>
                  {index + 1 !== steps.length && (
                    <div className={'dots'}>
                      <div className={'dot'}/>
                      <div className={'dot'}/>
                      <div className={'dot'}/>
                      <div className={'dot'}/>
                      <div className={'dot'}/>
                    </div>
                  )}
                </Space>
              )
            })
          }
        </div>
      </div>

      <div className={'box-event'}>
        <img src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg" alt=""/>

        <div className={'event-item'}>
          <div className={'text-uppercase text-bold title'} style={{fontSize: '40px'}}>
            đặt tiệc ở đây
          </div>
          <div>
            Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên đơn giản và dễ dàng hơn bao giờ hết
          </div>
        </div>

        <div className={'event-item'}>
          <div className={'text-bold text-uppercase title'}>
            chọn ngày đặt
          </div>
          <div>
            <DatePicker
              className={'date-picker'}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
              }}
              size={'large'}
              value={dateOrder}
              format='DD/MM'
              onChange={onChangeDate}/>
          </div>
        </div>

        <div className={'event-item'}>
          <div className={'text-uppercase text-bold title'}>
            Số bàn tiệc
          </div>
          <div>
            <InputNumber
              className={'ipt'}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
              }}
              controls={{
                upIcon: <UpOutlined/>,
                downIcon: <DownOutlined/>
              }}
              size={'large'}
              type={'number'}
              min={0}
              defaultValue={tableNumber}
              onChange={onChangeTableNumber}/>
          </div>
        </div>

        <div className={'event-item btns'}>
          <Button type={'primary'} size={'large'} className={'text-uppercase br-0'}>Đặt tiệc ngay</Button>
          <Button type={'default'} size={'large'} className={'text-uppercase br-0'}>xem thực đơn</Button>
        </div>
      </div>

      <div className={'box-menu'}>
        <div className={'menu flex-d-column'}>
          <div className={'item'}>
            <div className={'text-uppercase text-bold'} style={{fontSize: 30}}>
              Dich vụ
            </div>
            <div className={'text-uppercase d-flex gap-30'}>
              <div>Tiệc tại gia</div>
              <div>Tiệc cưới hỏi</div>
            </div>
            <div className={'text-uppercase d-flex gap-30'}>
              <div className={'text-center'}>
                Tiệc buffet
              </div>
              <div className={'text-center'}>
                Tiệc sự kiện
              </div>
            </div>
            <div className={'text-uppercase'}>
              Tiệc tea break
            </div>
          </div>
          <div  className={'item contact'}>
            <div className={'text-uppercase text-bold'} style={{fontSize: 30}}>
              Liên hệ
            </div>
            <div>
              Address: abc@cmcglobal.vn
            </div>
            <div>
              <span className={'text-bold'}>Hotline</span>: 0919319071
            </div>
          </div>
        </div>
        {/*<div className={'menu'}>*/}
        {/*  <MenuComponent/>*/}
        {/*</div>*/}
      </div>

      <div className={'box-posts'}>
        <h3 className={'text-bold text-uppercase'} style={{fontSize: 35}}>Vì sao lựa chọn chúng tôi?</h3>
        <div className={'posts'}>
          {
            posts.map((props: PostProps, index: number) => (
              <PostComponent key={index} {...props}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}