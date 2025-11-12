import Styled from 'styled-components';
import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <styledTextHeader>LOCALIZAÇÃO<br /></styledTextHeader>
                    <styledText>Rua 7 de Setembro, 2363<br />Centro - São Carlos - SP<br />CEP: 13560-181</styledText>
                </div>
                <div>
                    <styledTextHeader>REDES SOCIAIS<br/></styledTextHeader>
                    <styledText>Facebook • Instagram</styledText>
                </div>
                <div>
                    <styledTextHeader>CONTATO<br/></styledTextHeader>
                    <styledText>+55 (16) 3371-4100<br />contato@paralelomed.com.br</styledText>
                </div>
            </div>
            <div className="footer-bottom">
                Paralelo Assessoria Ltda - A vida e a saúde dos colaboradores em primeiro lugar!
            </div>
        </footer>
    )
}

const styledText = Styled('Text')`
    color: white;
`;

const styledTextHeader = Styled('Text')`
    color: white;
    size: 20px;
    font-weight: bold;
`;