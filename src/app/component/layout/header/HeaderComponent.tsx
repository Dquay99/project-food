import './header.scss'
import {Button, Dropdown, MenuProps, Space} from "antd";

import cart from '../../../../assets/img/cart.png';
import logo from '../../../../assets/img/logo.png';
import {DownOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


export const HeaderComponent = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" href="#">
          Đặt tiệc
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" href="#">
          Khách đoàn
        </a>
      ),
    }
  ];

  const itemsAccount: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" href="#" className={'menu-item'}>
          Thông tin cá nhân
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" href="#" className={'menu-item'}>
          Cài đặt địa chỉ
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" href="#" className={'menu-item'}>
          Quản lý đơn hàng
        </a>
      )
    },
    {
      key: '4',
      label: (
        <a rel="noopener noreferrer" href="#" className={'menu-item'}>
          Mã đã lưu
        </a>
      )
    },
    {
      key: '5',
      label: (
        <a rel="noopener noreferrer" href="#" className={'menu-item text-danger'}>
          Đăng xuất
        </a>
      )
    }
  ]

  return (
    <div className={'header-component'}>
      <div className={'item'}>
        <ul>
          <li>
            <img src={logo} alt="" className={'logo'}/>
          </li>
          <li>
            <a href="/#" className={'active'}>Trang chủ</a>
          </li>
          <li>
            <Link to={'/menu'}>
              <a href="">Thực đơn</a>
            </Link>
          </li>
          <li>
            <Dropdown menu={{items}}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Dịch vụ
                  <DownOutlined size={1}/>
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <a href="#">Về chúng tôi</a>
          </li>
          <li>
            <a href="#">Tin tức</a>
          </li>
          <li>
            <Button type='primary' className={'booking-now'} >
              <Link to={"/booking"}> Đặt tiệc ngay</Link>
            </Button>
          </li>
        </ul>
      </div>
      <div className={'item'}>

        <div className={'box-input'}>
          <input type="text" id={'search'} required/>
          <label htmlFor="search">Tìm kiếm món ăn</label>
          <SearchOutlined/>
        </div>

        <div className='box-account'>
          <Dropdown menu={{items: itemsAccount}}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span><UserOutlined/></span> Tài khoản
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className='box-cart'>
          <div className={'label'}>3</div>
          <img src={cart} alt=""/>
        </div>

      </div>
    </div>
  )
}