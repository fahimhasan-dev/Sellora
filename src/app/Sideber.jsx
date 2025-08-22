// components/Sidebar.jsx
const categories = [
  { name: "Clothes", icon: "👕" },
  { name: "Shoes", icon: "👟" },
  { name: "Glasses", icon: "👓" },
  { name: "Bags", icon: "👜" },
  { name: "Hat", icon: "🎩" },
  { name: "Makeup", icon: "💄" },
  { name: "Cosmetics", icon: "🧴" },
  { name: "Cake", icon: "🍰" },
  { name: "Bread", icon: "🍞" },
  { name: "Tomato", icon: "🍅" },
  { name: "Lemon", icon: "🍋" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 text-white min-h-screen px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-4">
        {categories.map((cat) => (
          <li key={cat.name} className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400">
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
