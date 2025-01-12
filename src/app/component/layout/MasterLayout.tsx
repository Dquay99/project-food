import {Outlet} from "react-router-dom"
import {HeaderComponent} from "./header/HeaderComponent.tsx";
import {FooterComponent} from "./footer/FooterComponent.tsx";
import {Layout} from "antd";

const {Content} = Layout;

export const MasterLayout = () => {
  return (
    <Layout style={{background: '#fff'}}>
      <HeaderComponent/>

      <Content>
        <Outlet/>
      </Content>

      <FooterComponent/>
    </Layout>
  )
}