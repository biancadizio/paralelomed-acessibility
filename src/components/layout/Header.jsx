import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontSizeContext } from "../../contexts/FontSizeContext";
import "./Header.css";
import { Sun, Moon } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { fontSize, increase, decrease } = useContext(FontSizeContext);

    return (
        <header className="header">
            <div className="header-left">
                <img
                    src="./src/assets/logo-paralelomed.png"
                    alt="ParaleloMed"
                    className="logo"
                    style={{
                        height: '50px',
                        transform: `scale(${fontSize / 100})`,
                        transformOrigin: 'left center'
                    }}
                />
            </div>

            <div className="header-center">
                <button className="accessibility-btn" onClick={decrease} title="Reduzir fonte">
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>A</span>
                    <FaMinus size={10} style={{ marginLeft: '2px' }} />
                </button>
                <button className="accessibility-btn" onClick={increase} title="Aumentar fonte">
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>A</span>
                    <FaPlus size={10} style={{ marginLeft: '2px' }} />
                </button>
                <button className="accessibility-btn" onClick={toggleTheme} title="Alternar tema">
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
            </div>

            <nav className="header-right">
                <a href="#home" className="active">HOME</a>
                <a href="#empresa">EMPRESA</a>
                <a href="#exames">EXAMES</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#contato">CONTATO</a>
            </nav>
        </header>
    );
}
