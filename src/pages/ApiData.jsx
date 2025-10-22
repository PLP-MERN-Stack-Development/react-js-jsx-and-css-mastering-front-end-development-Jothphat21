import React, { useEffect, useState } from "react";

export default function ApiDataSection() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAdvice();
  }, []);

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Daily Spark</h2>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading advice...</p>
      ) : (
        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
          “{advice}”
        </p>
      )}
    </div>
  );
}
