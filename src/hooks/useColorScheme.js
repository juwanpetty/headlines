import { useEffect } from "react";

export const useColorScheme = (callback) => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {
    const listener = (event) => {
      const darkModeOn = event.matches;
      console.log(`Dark mode is ${darkModeOn ? "🌒 on" : "☀️ off"}.`);

      const systemTheme = darkModeOn ? "dark" : "light";

      callback(systemTheme);
    };

    darkModeMediaQuery.addListener(listener);

    return () => {
      darkModeMediaQuery.removeListener(listener);
    };
  }, [callback, darkModeMediaQuery]);
};
