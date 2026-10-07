// EDITE AQUI: todos os dados e projetos do portfólio.
window.PORTFOLIO = {
  nome: 'Felipe Araujo',
  profissao: 'Desenvolvedor de software',
  formacao: 'Formado em Análise e Desenvolvimento de Sistemas',
  foto: 'assets/felipe.png',
  // Número com país e DDD, somente dígitos. Exemplo de formato: 55 + DDD + número.
  whatsapp: '5571981062268',
  email: '',
  github: '',
  linkedin: 'https://www.linkedin.com/in/felipe-araujo-9303b720b/',
  mensagemWhatsApp: 'Olá, Felipe! Gostaria de conversar sobre um projeto.',
  // Para adicionar um site, duplique um objeto e preencha os campos.
  // Coloque a captura de tela em dist/assets e informe o caminho em imagem.
  // Ao preencher url, o botão passa a ser “Ver site”.
  projetos: [
    { 
      titulo: 'Seu site institucional', 
      categoria: 'Site institucional', 
      descricao: 'Uma apresentação clara para sua empresa, serviços e canais de contato.', 
      imagem: 'assets/capacitaAi.png', 
      url: 'https://capacita-ai-flow-daaox5kti-felipes-projects-af697b65.vercel.app/', modelo: 'institucional', 
      tecnologias: ['Apresentação', 'Responsivo', 'Ensino'] 
    },
    { 
      titulo: 'Sua landing page', 
      categoria: 'Landing page', 
      descricao: 'Uma página focada em apresentar uma solução e conectar pessoas ao seu negócio.', 
      imagem: '', 
      url: '', 
      modelo: 'landing', 
      tecnologias: ['Página única', 'Contato'] 
    },
    { 
      titulo: 'Sua aplicação web', 
      categoria: 'Aplicação web', 
      descricao: 'Um espaço para apresentar sistemas, plataformas e outras soluções digitais.', 
      imagem: '', 
      url: '', 
      modelo: 'app', 
      tecnologias: ['Interface', 'Web'] 
    }
  ]
};
