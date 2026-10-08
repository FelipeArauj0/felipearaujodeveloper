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
  // Ao preencher url, o cartão tenta mostrar o site ao vivo, sem precisar de imagem.
  // imagem é opcional: use como alternativa quando o site bloquear a prévia.
  // Para sempre usar a captura, adicione preview: 'imagem' ao projeto.
  // Use o endereço público de produção do site (https://...), sem login.
  // Ao preencher url, o botão passa a ser “Ver site”.
  projetos: [
    { 
      titulo: 'Convite Digital 15 anos', 
      categoria: 'Convite digital', 
      descricao: 'Convite digital para festa de 15 anos, com informações do evento e confirmação de presença.', 
      imagem: '', 
      url: 'https://isabela-15-anos.vercel.app/', 
      modelo: 'app', 
      tecnologias: ['Interface', 'Web'] 
    },
    { 
      titulo: 'CapacitaAI', 
      categoria: 'Site institucional', 
      descricao: 'Capacitação gratuita para o mercado de trabalho, com orientação prática e inteligência artificial.', 
      imagem: 'assets/capacita-preview.png',
      preview: 'imagem', 
      url: 'https://capacita-ai-flow-daaox5kti-felipes-projects-af697b65.vercel.app/', modelo: 'institucional', 
      tecnologias: ['Apresentação', 'Responsivo', 'Ensino'] 
    },
    { 
      titulo: 'Sistema de Agendamento Online', 
      categoria: 'SasS', 
      descricao: 'Sistema de agendamento online para empresas e profissionais autônomos, notificações e organização de fila.', 
      imagem: '', 
      url: 'https://kyros-agenda-nine.vercel.app/', 
      modelo: 'saas', 
      tecnologias: ['Agendamento', 'Notificações', 'Organização'] 
    }
  ]
};
