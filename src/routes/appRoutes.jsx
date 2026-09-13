import DashboardLayout from '../layouts/DashboardLayout';
import Mainlayout from '../layouts/Mainlayout';
import About from '../pages/About';
import AddExpense from '../pages/expense/AddExpense';
import Manage from '../pages/expense/Manage';
import Overview from '../pages/expense/Overview';
import Profile from '../pages/expense/Profile';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const appRoutes = [
  {
    path: '/',
    element: <Mainlayout />, 
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
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: 'add-expense',
        element:<AddExpense/>
      
      },
      
      {
      path:'manage',
      element:<Manage/>
      },
      {
        path: 'profile',
        element:<Profile/>
      
      }
    ],
  },
];
