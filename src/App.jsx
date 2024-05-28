import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex gap-10">
      <div className="w-1/4 flex flex-col gap-10 bg-orange-300 p-5 min-h-screen">
        <Link to='/dashboard'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-orange-500 hover:text-white custom-btn">
            DashBoard
          </button>
        </Link>

        <Link to='/'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-orange-500 hover:text-white custom-btn">
            All Products
          </button>
        </Link>

        <Link to='/home'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-orange-500 hover:text-white custom-btn">
            Home
          </button>
        </Link>


        <Link to='/add-product'>
          <button className="w-full py-2 bg-white text-black rounded hover:bg-orange-500 hover:text-white custom-btn">
            Add Product
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
