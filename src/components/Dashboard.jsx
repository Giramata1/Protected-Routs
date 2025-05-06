function Dashboard() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold mr-3">
            U
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to your Dashboard</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Congratulations! You successfully logged in.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Post1</h3>
            <div className="h-24 bg-gray-200 rounded-md"></div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Post2</h3>
            <div className="h-24 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;