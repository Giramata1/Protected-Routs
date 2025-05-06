function Home() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the Home Page</h2>
        <div className="mt-4 p-4 bg-gray-200 rounded text-gray-700">
          <h2 className="font-medium mb-2 text-xl"> This is a public page that anyone can access. Try navigating to the Dashboard page 
          before logging in to see how route protection works.</h2>
         
        </div>
      </div>
    );
  }
  
  export default Home;