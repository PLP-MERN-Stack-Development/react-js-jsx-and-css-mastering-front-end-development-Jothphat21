import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* LEFT SIDE: Title + Nav links */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-bold">My Task Manager</h1>
          {/* Nav links below the title */}
          <ul className="flex gap-6 mt-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Tasks</a></li>
            <li><a href="#" className="hover:underline">Daily Boost</a></li>
          </ul>
        </div>

        {/* RIGHT SIDE: Toggle Button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded transition-colors h-fit"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
