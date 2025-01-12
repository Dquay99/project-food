import {createBrowserRouter, RouteObject} from "react-router-dom";
import {MasterLayout} from "../component/layout/MasterLayout.tsx";
import {HomePage} from "../page/home/HomePage.tsx";
import BookingPage from "../page/Booking/BookingPage.tsx";
import MenuComponent from "../component/menu/MenuComponent.tsx";
import RecipeDetails from "../component/menu/RecipeDetails/RecipeDetails.tsx";

// Định nghĩa kiểu cấu hình cho future flags
interface RouterConfig {
  future?: {
    v7_startTransition?: boolean;
    v7_relativeSplatPath?: boolean;
  };
}


const routes: RouteObject[] = [
  // USER ROUTE
  {
    element: <MasterLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/menu',
        element: <MenuComponent/>
      },
      {
        path: '/menu/:id',
        element: <RecipeDetails />
      },
      {
        path: '/booking',
        element: <BookingPage/>
      },
    ]
  },
]

export const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  } as RouterConfig['future'],
})