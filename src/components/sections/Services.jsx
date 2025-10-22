import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'


const services = [
    { title: 'Exames', text: 'Oferecemos ao mercado exames de saúde ocupacional e complementares', image: 'https://via.placeholder.com/360x220?text=Exames' },
    { title: 'Serviços', text: 'Prestamos assessoria em programas de segurança do trabalho elaborados por técnicos e engenheiros', image: 'https://via.placeholder.com/360x220?text=Serviços' }
]


export default function Services() {
    return (
        <section id="servicos" className="services container">
            <SectionTitle>SERVIÇOS</SectionTitle>
            <div className="services-grid">
                {services.map((item) => (
                    <Card key={item.title} {...item} link="saiba +" />
                ))}
            </div>
        </section>
    )
}