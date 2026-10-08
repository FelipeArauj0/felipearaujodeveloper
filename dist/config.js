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
      titulo: 'Seu site institucional', 
      categoria: 'Site institucional', 
      descricao: 'Uma apresentação clara para sua empresa, serviços e canais de contato.', 
      imagem: 'assets/capacitaAI.png', 
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
