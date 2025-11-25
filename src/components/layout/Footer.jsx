import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer id="footer" className="site-footer">
            <div className="container footer-grid">
                <div className="footer-column footer-location">
                    <h4>LOCALIZAÇÃO</h4>
                    <address>
                        <p><FaMapMarkerAlt className="icon" /> Rua 7 de Setembro, 2363</p>
                        <p>Centro - São Carlos - SP</p>
                        <p>CEP: 13.560-181</p>
                    </address>
                </div>
                <div className="footer-column footer-social">
                    <h4>REDES SOCIAIS</h4>
                    <div className="social-icons" aria-label="Redes sociais">
                        <a href="#" aria-label="Facebook" className="social-link"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram" className="social-link"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer-column footer-contact">
                    <h4>CONTATO</h4>
                    <ul>
                        <li><FaPhoneAlt className="icon" /> <span>+55 (16) 3371-4100</span></li>
                        <li><FaPhoneAlt className="icon" /> <span>+55 (16) 3501-3253</span></li>
                        <li><FaWhatsapp className="icon" /> <span>+55 (16) 99575-6126</span></li>
                        <li><FaEnvelope className="icon" /> <span><a href="mailto:contato@paralelomed.com.br">contato@paralelomed.com.br</a></span></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                Paralelo Assessoria Ltda - A vida e a saúde dos colaboradores em primeiro lugar!
            </div>

            <div className="footer-textareas">
                <div className="footer-textarea-group">
                    <label htmlFor="namesTextArea" className="footer-textarea-label">Criado por:</label>
                        <ul>
                           <li>Bianca Gonçalves</li>
                           <li>Diogo</li>
                           <li>Lucas Mariano</li>
                           <li>Rafael Jun Morita</li>
                           <li>Raphael</li> 
                        </ul>
                </div>
                <div className="footer-textarea-group">
                    <label htmlFor="imageSourceTextArea" className="footer-textarea-label">Origem das imagens:</label>    
                       Cedidas pelo cliente: <a href="https://www.paralelomed.com.br/index.php "> paralelomed.com.br </a>                        
                </div>
            </div>
        </footer>
    )
}
