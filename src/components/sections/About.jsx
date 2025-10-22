import SectionTitle from '../ui/SectionTitle'
import "./About.css"

export default function About() {
    const aboutImg = './src/assets/imagem-fachada-clinica-paralelomed.png'


    return (
        <section id="sobre" className="about container">
            <SectionTitle>SOBRE NÓS</SectionTitle>
            <div className="about-grid">
                <div className="about-image"><img src={aboutImg} alt="Clínica ParaleloMed" /></div>
                <div className="about-text">
                    <p>
                        A ParaleloMed atua na cidade de São Carlos, região central do Estado de São Paulo. É clínica completa e preparada para aplicar as normas regulamentadoras do ministério do trabalho aos empregadores.
                    </p>
                </div>
            </div>
        </section>
    )
}