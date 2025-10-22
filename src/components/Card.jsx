export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h3 className="font-bold mb-2 text-lg">{title}</h3>
      {children}
    </div>
  );
}
