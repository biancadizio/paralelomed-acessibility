import SectionTitle from '../ui/SectionTitle'
import './Services.css'
import imgPPRA from '../../assets/imagem_servicoPPRA.jpg'
import imgPCMSO from '../../assets/imagem_servicoPCMSO.jpg'
import imgLTCAT from '../../assets/imagem_servicoLTCAT.jpg'
import imgPPP from '../../assets/imagem_servicoPPP.jpg'

const servicesData = [
  {
    key: 'ppra',
    title: 'PPRA:',
    img_alt: 'A imagem mostra uma profissional em um uniforme azul (possivelmente um profissional de saúde ou segurança do trabalho) escrevendo ou preenchendo um formulário em uma prancheta. Sobre uma superfície branca, em um ambiente limpo e profissional.',
    text: 'Conjunto de ações visando à preservação da saúde e da integridade/segurança dos trabalhadores, através de etapas que visam a antecipação, reconhecimento, avaliação (qualitativa / quantitativa) e consequente controle da ocorrência de riscos ambientais existentes ou que venham a existir no ambiente de trabalho, tendo em consideração a proteção do meio ambiente e dos recursos naturais.'
  },
  {
    key: 'pcmso',
    title: 'PCMSO:',
    img_alt: 'A imagem mostra um profissional de saúde (médico ou enfermeiro) medindo a pressão arterial de um paciente. O profissional está usando um estetoscópio e um esfigmomanômetro (medidor de pressão) em um ambiente clínico. O paciente está com o braço estendido e relaxado enquanto o profissional realiza o exame.',
    text: 'O conjunto dos procedimentos que devem ser adotados pelas empresas com o objetivo de prevenir e diagnosticar precocemente os danos à saúde decorrentes do trabalho. Obrigatoriamente é realizado por médicos dos serviços especializados em engenharia de segurança e medicina do trabalho.'
  },
  {
    key: 'ltcat',
    title: 'LTCAT:',
    img_alt: 'A imagem mostra um profissional (médico ou gestor de saúde ocupacional) em um ambiente corporativo, vestindo uma camisa branca e uma gravata azul. O profissional está analisando documentos em uma prancheta.',
    text: 'Seu objetivo é identificar a exposição do trabalhador a agentes físicos, químicos ou biológicos prejudiciais à saúde ou à integridade física. É um documento onde são avaliadas as condições do ambiente de trabalho para determinar se o trabalhador tem direito (ou não) a aposentadoria especial. É necessário que seja realizada a verificação da situação fática de trabalho, in loco.'
  },
  {
    key: 'ppp',
    title: 'PPP:', 
    img_alt: 'A imagem mostra uma mão segurando uma caneta e escrevendo ou assinando um documento em uma prancheta. O fundo está desfocado com tons de azul, sugerindo um ambiente profissional ou corporativo.',
    text: 'Documento histórico-laboral que contém várias informações relativas às atividades do trabalhador na empresa, dados administrativos e resultado de monitoração biológica e ambiental. Visa apresentar o resumo de todas as informações relativas à fiscalização do gerenciamento de riscos e à existência de agentes nocivos no ambiente de trabalho, além de ser o documento que orienta o processo de reconhecimento de aposentadoria especial, podendo também ser usado para caracterizar o nexo técnico em caso de acidente de trabalho.'
  }
]

const images = [
  imgPPRA,
  imgPCMSO,
  imgLTCAT,
  imgPPP
]


export default function Services() {
  return (
    <section id="servicos" className="services container">
      <SectionTitle>SERVIÇOS</SectionTitle>
      <div className="services-content">
        {servicesData.map((s, i) => (
          <div className="service-row" key={s.key}>
            <figure className="service-img">
              <img src={images[i]} alt={s.img_alt} />
            </figure>
            <div className="service-item">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}