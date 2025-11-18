import React from 'react'
import styled from 'styled-components'

// Styled Components
const ExamesSection = styled.section`
    width: 100%;
`

const ExamesGrid = styled.div`
    display: flex;
    flex-direction: column;
`

const ExamesHeader = styled.div`
    background-color: #004b3b;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 80px;
    border-radius: 10px 10px 0 0;
`

const ExamesTitle = styled.h2`
    color: white;
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
`

const ExamesList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

const ExameCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #f5f5f5;
    padding: 25px;
    border-radius: 12px;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 75, 59, 0.2);
    }
`

const ExameImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 12px;
    background-color: #ddd;
`

const ExameText = styled.div`
    width: 100%;

    h3 {
        margin: 0 0 12px 0;
        color: #004b3b;
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.4;
    }

    p {
        margin: 0;
        color: #666;
        font-size: 0.95rem;
        line-height: 1.5;
    }
`

// Component
export default function ExamesComponent() {
    const exames = [
        {
            id: 1,
            image: "https://via.placeholder.com/100",
            alt: "Exames Ocupacionais",
            title: "Oferecemos ao mercado exames de saúde ocupacional:",
            description: "Admissional, Periódico e Demissional."
        },
        {
            id: 2,
            image: "https://via.placeholder.com/100",
            alt: "Exames Complementares",
            title: "Exames complementares:",
            description: "ECG, EEG, Espirometria, Audiometria, Exames Laboratoriais, entre outros."
        }
    ]

    return (
        <ExamesSection id="exames" className="container">
            <ExamesGrid>
                <ExamesHeader>
                    <ExamesTitle>EXAMES</ExamesTitle>
                </ExamesHeader>
                
                <ExamesList>
                    {exames.map((exame) => (
                        <ExameCard key={exame.id}>
                            <ExameImage 
                                src={exame.image} 
                                alt={exame.alt} 
                            />
                            <ExameText>
                                <h3>{exame.title}</h3>
                                <p>{exame.description}</p>
                            </ExameText>
                        </ExameCard>
                    ))}
                </ExamesList>
            </ExamesGrid>
        </ExamesSection>
    )
}