import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {router} from "./app/core/RouteConfig.tsx";
import {RouterProvider} from 'react-router-dom';
import './main.scss'
import {ConfigProvider} from "antd";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          colorBgContainer: '#fff',
          colorPrimary: '#D2691E'
        }
      }}
    >
      <RouterProvider router={router}/>
    </ConfigProvider>
  </StrictMode>,
)
