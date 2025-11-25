ParaleloMed - Medicina e Segurança do Trabalho

Grupo: 
Bianca Gonçalves Dizio
Diogo Gianezi de Melo
Lucas Jacinto Mariano
Rafael Jun Morita
Raphael Monteiro Consoni Bonaccorsi

Este projeto é uma aplicação web para a ParaleloMed, uma clínica especializada em Medicina e Segurança do Trabalho, localizada em São Carlos-SP. A aplicação foi desenvolvida em React com Vite e inclui recursos de acessibilidade como alternância de tema, controle de tamanho da fonte e VLibras.

🚀 Tecnologias Utilizadas

    React - Biblioteca JavaScript para interface

    Vite - Build tool e dev server

    Lucide React - Ícones

    React Icons - Biblioteca adicional de ícones

    CSS - Estilização

📋 Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

    Node.js (versão 16 ou superior)

    npm (geralmente vem com o Node.js)

⚙️ Configuração do Ambiente

1. Clone o repositório

    git clone <URL_DO_REPOSITORIO>
    cd PARALELOMED-ACESSIBILITY

2. Instale as dependências

Usando npm (não utilizar outros pacotes de instalação como yarn, etc pois ele conflita com o npm e quebra as dependências):
    npm install

3. Execute a aplicação em modo de desenvolvimento

    npm run dev

A aplicação estará rodando em http://localhost:5173 (ou outra porta, se 5173 estiver em uso).

🏗️ Scripts Disponíveis

No diretório do projeto, você pode executar:

    npm run dev - Inicia o servidor de desenvolvimento

📁 Estrutura do Projeto

PARALELOMED-ACESSIBILITY/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e outros recursos estáticos
│   ├── components/
│   │   ├── layout/        # Componentes de layout (Header, Footer, etc.)
│   │   ├── sections/      # Seções da página (Hero, About, etc.)
│   │   └── ui/            # Componentes de interface reutilizáveis
│   ├── contexts/          # Contextos do React (Tema, Tamanho da Fonte)
│   ├── hooks/             # Hooks customizados
│   ├── styles/            # Estilos globais
│   ├── App.jsx            # Componente principal
│   ├── index.css          # Estilos de entrada
│   └── main.jsx           # Ponto de entrada da aplicação
├── package.json
├── vite.config.js         # Configuração do Vite
└── README.md

🎨 Recursos de Acessibilidade

A aplicação inclui os seguintes recursos de acessibilidade:

    - Alternância de Tema: Permite alternar entre tema claro e escuro

    - Controle de Tamanho da Fonte: Botões para aumentar e diminuir o tamanho da fonte em toda a aplicação

    - Design Responsivo: Adaptável a diferentes tamanhos de tela

    - VLibras disponível para pessoas surdas e com deficiência auditiva

    - Paleta de cores compatível com os recursos de acessibilidade
