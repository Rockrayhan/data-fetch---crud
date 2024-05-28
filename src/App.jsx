import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex gap-10">
      <div className="w-1/4 flex flex-col gap-10 bg-orange-300 p-5 min-h-screen">
        <Link to='/dashboard'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-gray-100">
            DashBoard
          </button>
        </Link>

        <Link to='/all-products'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-gray-100">
            All Products
          </button>
        </Link>

        <Link to='/'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-gray-100">
            Home
          </button>
        </Link>
      </div>

      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
