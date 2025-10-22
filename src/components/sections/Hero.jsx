import "./Hero.css"

export default function Hero() {
    const heroImg = './src/assets/imagem-hero.png' // TODO: Substituir
    return (
        <section className="hero-container">
            <div className="hero-card">
                <img src={heroImg} alt="Imagem da empresa Paralelomed com título Medicina e Segurança do Trabalho" />
                <div className="hero-badge">Medicina e Segurança do Trabalho</div>
            </div>
        </section>
    )
}