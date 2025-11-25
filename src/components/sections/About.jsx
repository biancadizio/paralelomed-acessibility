import SectionTitle from '../ui/SectionTitle'
import "./About.css"

export default function About() {
    const aboutImg = './src/assets/imagem-fachada-clinica-paralelomed.png'


    return (
        <section id="sobre" className="about container">
            <div className="section-sentinel" data-section-id="sobre" aria-hidden="true"></div>
            <SectionTitle>SOBRE NÓS</SectionTitle>
            <div className="about-grid">
                <div className="about-image"><img src={aboutImg} alt="Fachada de uma clínica chamada Paralelo Med, com paredes e estrutura em tons de azul e duas entradas de vidro." /></div>
                <div className="about-text">
                    <p>
                        A ParaleloMed atua na cidade de São Carlos, região central do Estado de São Paulo. É clínica completa e preparada para aplicar as normas regulamentadoras do ministério do trabalho aos empregadores.
                    </p>
                </div>
            </div>
        </section>
    )
}