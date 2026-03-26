import { useRecoilState } from 'recoil';
import { themeAtom } from '../recoil/atoms';
import { useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
