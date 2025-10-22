import React from 'react';

export default function Footer (){  
  return (
  <footer className="bg-white dark:bg-gray-800 text-center py-4 shadow mt-8">
    <p className="text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
    </p>
  </footer>
  );
}
