import { create } from "zustand";

interface TokenState {
  colorBgContainer: string;
  borderRadiusLG: string;
}

interface AppState {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  token: TokenState;
}

const useStore = create<AppState>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => set({ collapsed }),
  token: {
    colorBgContainer: '#ffffff',
    borderRadiusLG: '10px',
  },
}));

export { useStore };
