import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export type Theme = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('calcsaathi-theme') as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      // Check system preference, defaulting to dark mode
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      const initialTheme: Theme = prefersLight ? 'light' : 'dark';
      setTheme(initialTheme);
      applyTheme(initialTheme);
      localStorage.setItem('calcsaathi-theme', initialTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('calcsaathi-theme', nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-theme bg-theme-secondary flex items-center justify-center opacity-70">
        <Moon className="w-4 h-4 text-theme-secondary" />
      </div>
    );
  }

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-theme bg-theme-secondary hover:bg-theme-tertiary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00D09C]/50 cursor-pointer shadow-xs"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 hover:rotate-45 transition-transform duration-200" />
      ) : (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B6DFF] hover:-rotate-12 transition-transform duration-200" />
      )}
    </button>
  );
}
