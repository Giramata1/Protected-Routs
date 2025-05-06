import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="container flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
          {isLoggedIn && <span className="text-green-600">● Logged In</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;