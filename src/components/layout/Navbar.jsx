import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    const links = [
        { href: '/', label: 'INÍCIO', isRoute: true },
        { href: '#sobre', label: 'SOBRE NÓS', isRoute: false },
        { href: '#exames', label: 'EXAMES', isRoute: false },
        { href: '#servicos', label: 'SERVIÇOS', isRoute: false },
        { href: '/empresa', label: 'EMPRESA', isRoute: true },
        { href: '#contato', label: 'CONTATO', isRoute: false }
    ]


    return (
        <nav className="top-nav container">
            <ul>
                {links.map((link) => (
                    <li key={link.href}>
                        {link.isRoute ? (
                            <Link to={link.href}>{link.label}</Link>
                        ) : (
                            <a href={link.href}>{link.label}</a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}