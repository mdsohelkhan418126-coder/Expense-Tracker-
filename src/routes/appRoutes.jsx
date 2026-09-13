import Mainlayout from '../layouts/Mainlayout';
import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const appRoutes = [
  {
    path: '/',
    element: <Mainlayout/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element:<Login/>
  
  }


];
