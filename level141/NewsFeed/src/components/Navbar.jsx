import { Search, Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const links = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-blue-900 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="md:text-2xl text-lg font-bold text-blue-600 dark:text-gray-100"
        >
          NewsApp
        </NavLink>

        {/* Desktop links */}
        <div className="hidden xl:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link === "General" ? "/" : `/${link.toLowerCase()}`}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>

        {/* Search + Dark mode + Mobile menu */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative bg-gray-200 p-2 rounded-lg hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search news..."
              className="pl-8 w-56 bg-transparent outline-none"
            />
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-blue-500 dark:text-gray-200 px-3 py-2 rounded-lg"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="block xl:hidden p-2 rounded-lg bg-gray-200"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white dark:bg-blue-900 w-full px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link}
              to={link === "General" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-600"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
