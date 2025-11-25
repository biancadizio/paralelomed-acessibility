import "./Hero.css"

export default function Hero() {
    const heroImg = './src/assets/imagem-hero.png' // TODO: Substituir
    return (
        <section id="home" className="hero-container">
            <div className="hero-card">
                <img src={heroImg} alt="Pessoa segurando um capacete de segurança e estetoscópio enquanto, ao fundo, dois trabalhadores com capacete ajudam um colega ferido em um ambiente de construção com título Medicina e Segurança do Trabalho" />
                <div className="hero-badge">Medicina e Segurança do Trabalho</div>
            </div>
        </section>
    )
}