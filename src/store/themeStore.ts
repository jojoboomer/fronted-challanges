import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";
interface State {
  theme: Theme;
  toggleTheme: () => void;
};

const useThemeStore = create(
  persist(
    (set) => {
      // Leer la preferencia del navegador
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialTheme: Theme = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-color-mode", initialTheme);

      return {
        theme: initialTheme,
        toggleTheme: () =>
          set((state : State) => {
            const newTheme: Theme = state.theme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-color-mode", newTheme); 
            return { theme: newTheme };
          }),
      };
    },
    {
      name: "todo-theme",
      onRehydrateStorage: () => (state?: State) => {
        if (state?.theme) {
          // Sincronizar el tema en el DOM cuando se hidrata el estado
          document.documentElement.setAttribute("data-color-mode", state.theme);
        }
      },
    }
  )
);

export default useThemeStore;
