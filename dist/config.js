// EDITE AQUI: todos os dados e projetos do portfólio.
window.PORTFOLIO = {
  nome: 'Felipe Araujo',
  profissao: 'Desenvolvedor de software',
  formacao: 'Formado em Análise e Desenvolvimento de Sistemas',
  foto: 'assets/felipe.png',
  // Número com país e DDD, somente dígitos. Exemplo de formato: 55 + DDD + número.
  whatsapp: '',
  email: '',
  github: '',
  linkedin: '',
  mensagemWhatsApp: 'Olá, Felipe! Gostaria de conversar sobre um projeto.',
  // Para adicionar um site, duplique um objeto e preencha os campos.
  // Coloque a captura de tela em dist/assets e informe o caminho em imagem.
  // Ao preencher url, o botão passa a ser “Ver site”.
  projetos: [
    { titulo: 'Seu site institucional', categoria: 'Site institucional', descricao: 'Uma apresentação clara para sua empresa, serviços e canais de contato.', imagem: '', url: '', modelo: 'institucional', tecnologias: ['Apresentação', 'Responsivo'] },
    { titulo: 'Sua landing page', categoria: 'Landing page', descricao: 'Uma página focada em apresentar uma solução e conectar pessoas ao seu negócio.', imagem: '', url: '', modelo: 'landing', tecnologias: ['Página única', 'Contato'] },
    { titulo: 'Sua aplicação web', categoria: 'Aplicação web', descricao: 'Um espaço para apresentar sistemas, plataformas e outras soluções digitais.', imagem: '', url: '', modelo: 'app', tecnologias: ['Interface', 'Web'] }
  ]
};
