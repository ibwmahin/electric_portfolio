import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faShoppingCart,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: "/", icon: faHome, label: "Home" },
    { path: "/about", icon: faUser, label: "About" },
    { path: "/projects", icon: faProjectDiagram, label: "Projects" },
    { path: "/products", icon: faShoppingCart, label: "Products" },
  ];

  return (
    // fixed top center
    <div
      className="
        fixed left-1/2 top-4 transform -translate-x-1/2 z-50
        sm:top-4 md:top-6
      "
    >
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="
          pointer-events-auto
          bg-white/8 dark:bg-black/30 backdrop-blur-md
          border border-white/6 dark:border-black/20
          rounded-2xl px-5 py-3 shadow-lg
          flex items-center gap-4
          min-w-[220px] md:min-w-[420px]
        "
      >
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={active ? "page" : undefined}
                className={`
                  flex items-center justify-center
                  w-9 h-9 rounded-lg
                  transition-all
                  ${
                    active
                      ? "bg-primary text-primary-foreground shadow-inner"
                      : "hover:bg-white/10 dark:hover:bg-white/6"
                  }
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50
                `}
                title={item.label}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                <span className="sr-only">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex-1" />

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            w-9 h-9 rounded-lg flex items-center justify-center
            hover:bg-white/10 dark:hover:bg-white/6
            transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50
          "
        >
          <FontAwesomeIcon
            icon={theme === "light" ? faMoon : faSun}
            className="w-4 h-4"
          />
        </button>

        <Link to="/contact" aria-label="Hire me">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-3 py-1.5 rounded-lg font-medium text-sm
              bg-primary text-primary-foreground
              shadow-md
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50
            "
          >
            Hire Me
          </motion.button>
        </Link>
      </motion.nav>
    </div>
  );
}

