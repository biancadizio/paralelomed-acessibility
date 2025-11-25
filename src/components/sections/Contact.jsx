import SectionTitle from '../ui/SectionTitle'


export default function Contact() {
    return (
        <section id="contato" className="contact container">
            <div className="section-sentinel" data-section-id="contato" aria-hidden="true"></div>
            <SectionTitle>CONTATO</SectionTitle>
            <p>Entre em contato conosco pelo telefone ou e-mail abaixo:</p>
            <p><strong>Telefone:</strong> +55 (16) 3371-4100</p>
            <p><strong>Email:</strong> contato@paralelomed.com.br</p>
        </section>
    )
}