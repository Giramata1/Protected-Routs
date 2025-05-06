import { useNavigate } from "react-router-dom";

function Login({ loginFunction }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    loginFunction();
    navigate("/dashboard"); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login Page</h2>
      <button 
        onClick={handleLogin}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4"
      >
        Click to Login
      </button>
    </div>
  );
}

export default Login;