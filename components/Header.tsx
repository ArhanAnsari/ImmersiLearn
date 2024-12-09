// components/Header.tsx
export default function Header() {
  return (
    <nav className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            ImmersiLearn
          </span>
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a
              href="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
