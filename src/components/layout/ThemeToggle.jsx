import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'


export default function ThemeToggle() {
    const { dark, toggleTheme, increaseFont, decreaseFont, resetFont } = useContext(ThemeContext)


    return (
        <div className="theme-toggle">
            <button onClick={toggleTheme} className="icon-btn" title="Alternar tema">
                {dark ? '☀️' : '🌙'}
            </button>
            <div className="font-controls">
                <button onClick={decreaseFont} className="icon-btn" title="Diminuir fonte">A-</button>
                <button onClick={resetFont} className="icon-btn" title="Resetar">A</button>
                <button onClick={increaseFont} className="icon-btn" title="Aumentar fonte">A+</button>
            </div>
        </div>
    )
}