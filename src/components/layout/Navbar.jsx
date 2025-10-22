import React from 'react'


export default function NavBar() {
    const links = [
        { href: '#sobre', label: 'SOBRE NÓS' },
        { href: '#exames', label: 'EXAMES' },
        { href: '#servicos', label: 'SERVIÇOS' },
        { href: '#contato', label: 'CONTATO' }
    ]


    return (
        <nav className="top-nav container">
            <ul>
                {links.map((link) => (
                    <li key={link.href}><a href={link.href}>{link.label}</a></li>
                ))}
            </ul>
        </nav>
    )
}