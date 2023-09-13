import { ReactNode, createContext, useState } from "react";

interface GlobalSettingsProviderProps {
  children: ReactNode;
}

interface SettingsData {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  viewingProjectId: string | null;
  setViewingProjectId: (value: string | null) => void;
}

export const GlobalSettingsContext = createContext<SettingsData>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  viewingProjectId: null,
  setViewingProjectId: () => {},
});

function GlobalSettingsProvider({ children }: GlobalSettingsProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewingProjectId, setViewingProjectId] = useState<string | null>(null);

  return (
    <GlobalSettingsContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        viewingProjectId,
        setViewingProjectId,
      }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export default GlobalSettingsProvider;
