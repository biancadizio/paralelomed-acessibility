import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    const links = [
        { href: '/', label: 'INÍCIO', isRoute: true },
        { href: '#sobre', label: 'SOBRE NÓS', isRoute: true },
        { href: '#exames', label: 'EXAMES', isRoute: true },
        { href: '#servicos', label: 'SERVIÇOS', isRoute: true },
        { href: '#contato', label: 'CONTATO', isRoute: true }
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