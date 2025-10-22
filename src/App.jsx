import { useState } from 'react';
import './index.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './pages/ApiData';

function App() {
  
  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
         <Navbar />      

      {/* Main content area */}
        <TaskManager />

        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <ApiData />
        </div>
      

      {/* Footer component will go here */}
          <Footer />
    </div>
    </>
  );
}

export default App; 