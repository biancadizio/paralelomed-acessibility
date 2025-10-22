import { createContext, useState, useEffect } from "react";

export const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
    const [fontSize, setFontSize] = useState(100);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    const increase = () => setFontSize((prev) => Math.min(prev + 10, 150));
    const decrease = () => setFontSize((prev) => Math.max(prev - 10, 80));
    const reset = () => setFontSize(100);

    return (
        <FontSizeContext.Provider value={{ fontSize, increase, decrease, reset }}>
            {children}
        </FontSizeContext.Provider>
    );
}
