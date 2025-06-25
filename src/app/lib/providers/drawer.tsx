import { createContext, useContext } from "react";

// Context for drawer state
export const DrawerContext = createContext<{
    closeDrawer: () => void;
} | null>(null);

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within DrawerProvider');
    }
    return context;
};