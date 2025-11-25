import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontSizeContext } from "../../contexts/FontSizeContext";
import "./Header.css";
import { Sun, Moon } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { fontSize, increase, decrease } = useContext(FontSizeContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');
    const headerRef = useRef(null);

    function handleNav(e, id) {
        e.preventDefault();
        // If on another page, navigate to home with hash and let Home.jsx handle the scroll
        if (location.pathname !== '/') {
            navigate('/' + (id ? `#${id}` : ''));
            // set immediate feedback
            setActiveSection(id || 'home');
            return;
        }

        // If already on home, scroll directly to element
        if (!id) {
            // scroll to the top/hero
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '/');
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', '#' + id);
            setActiveSection(id);
        }
    }

    // Update active link depending on scroll position and closest section to viewport middle
    useEffect(() => {
        const ids = ['home', 'sobre', 'exames', 'servicos', 'contato'];

        let ticking = false;

        function checkActiveSection() {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            const viewportMid = window.scrollY + headerHeight + (window.innerHeight - headerHeight) / 2;
            let closestId = activeSection;
            let minDistance = Number.POSITIVE_INFINITY;

            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const elCenter = window.scrollY + rect.top + rect.height / 2;
                const dist = Math.abs(elCenter - viewportMid);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestId = id;
                }
            });

            if (closestId !== activeSection) {
                setActiveSection(closestId);
            }
        }

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        }

        // On location change (direct navigation with hash), re-run.
        function onLocationChange() {
            setTimeout(checkActiveSection, 80);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        window.addEventListener('hashchange', onLocationChange, { passive: true });

        // Run initially
        checkActiveSection();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.removeEventListener('hashchange', onLocationChange);
        };
    }, [location, activeSection]);

    return (
        <header ref={headerRef} className="header">
            <div className="header-left">
                <img
                    src="./src/assets/logo-paralelomed.png"
                    alt="ParaleloMed"
                    className="logo"
                    style={{
                        height: '100px',
                        marginLeft: '20px',
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
                <a href="/#home" className={activeSection === 'home' ? 'active' : ''} aria-current={activeSection === 'home' ? 'true' : undefined} onClick={(e) => handleNav(e, 'home')}>HOME</a>
                <a href="/#sobre" className={activeSection === 'sobre' ? 'active' : ''} aria-current={activeSection === 'sobre' ? 'true' : undefined} onClick={(e) => handleNav(e, 'sobre')}>EMPRESA</a>
                <a href="/#exames" className={activeSection === 'exames' ? 'active' : ''} aria-current={activeSection === 'exames' ? 'true' : undefined} onClick={(e) => handleNav(e, 'exames')}>EXAMES</a>
                <a href="/#servicos" className={activeSection === 'servicos' ? 'active' : ''} aria-current={activeSection === 'servicos' ? 'true' : undefined} onClick={(e) => handleNav(e, 'servicos')}>SERVIÇOS</a>
                <a href="/#contato" className={activeSection === 'contato' ? 'active' : ''} aria-current={activeSection === 'contato' ? 'true' : undefined} onClick={(e) => handleNav(e, 'contato')}>CONTATO</a>
            </nav>
        </header>
    );
}
