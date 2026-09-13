import { Link, Outlet } from 'react-router-dom';
import Button from '../ui/Button';

const DashboardLayout = () => {
  return (
    <div className=" flex w-full bg-zinc-200 min-h-screen">
      <aside className=" w-1/4 p-8 bg-white flex flex-col justify-between ">
        <h1 className=" text-base font-bold mb-8">Expense Trcaker</h1>
        <nav className=" flex flex-col gap-2">
          <Link to="/dashboard" className=' font-semibold'>Overview</Link>
          <Link to="/dashboard/add-expense" className=' font-semibold'>Add Expense</Link>
          <Link to="/dashboard/manage" className=' font-semibold'>ManageExpense</Link>
          <Link to="/dashboard/profile" className=' font-semibold'>Profile</Link>
          
        </nav>
        <Button text='Logout'/>
      </aside>
      <main className='w-3/4 bg-white m-2 p-4 rounded-lg'>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
