# Planejamento do portfólio — Felipe Araujo

## 1. Objetivo

Apresentar Felipe Araujo como desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas (ADS), reunir sites e aplicações em um portfólio e facilitar o contato de potenciais clientes e parceiros.

A prioridade técnica é permitir adicionar ou alterar projetos pelo código de forma simples, sem instalar um framework ou operar um painel administrativo.

## 2. Informações e referências recebidas

- Nome: Felipe Araujo.
- Atuação: desenvolvedor de software.
- Formação: ADS — Análise e Desenvolvimento de Sistemas.
- Protótipo desenhado: fundo escuro, apresentação no topo e três blocos de projetos com imagem e botão para visitar o site.
- Foto fornecida para a apresentação.
- Pedido de métodos de contato, incluindo botão para WhatsApp.
- Pedido posterior de armazenamento do código no repositório `FelipeArauj0/felipearaujodeveloper`, acompanhado de documentação e planejamento.

Não foram fornecidos número de WhatsApp, e-mail, LinkedIn ou links de projetos. Esses dados foram deixados vazios para configuração posterior.

## 3. Público e percurso esperado

O visitante deve entender quem é Felipe, conhecer os projetos disponíveis e iniciar uma conversa.

1. Ler a apresentação e identificar a atuação profissional.
2. Ir para a seção de projetos.
3. Ver uma prévia e abrir o endereço de um projeto, quando configurado.
4. Consultar a formação e biografia.
5. Entrar em contato por WhatsApp, e-mail ou redes sociais disponíveis.

## 4. Organização da página

| Seção | Conteúdo e finalidade |
| --- | --- |
| Cabeçalho | Marca tipográfica `fa.`, navegação para projetos, sobre e contato |
| Apresentação | Nome, profissão, mensagem sobre soluções digitais, foto e acesso aos projetos |
| Projetos | Lista de cartões com prévia, categoria, descrição, etiquetas e ação |
| Sobre | Biografia breve e formação em ADS |
| Contato | Chamada para conversa, WhatsApp e links configurados |
| Rodapé | Nome, ano atualizado automaticamente e retorno ao início |

Uma única página foi escolhida porque atende ao protótipo e reduz o esforço de manutenção.

## 5. Direção visual

- Fundo escuro e superfícies discretamente diferenciadas, seguindo o protótipo.
- Verde claro como cor de destaque para chamadas e detalhes.
- Tipografia sem serifa, títulos grandes e leitura direta.
- Bordas finas e cantos arredondados nos blocos.
- Fotografia com destaque no topo, ao lado do texto em telas maiores.
- Cartões horizontais no desktop e empilhados no celular.
- Prévias demonstrativas de interfaces nos espaços sem captura de tela.

As prévias são modelos de apresentação; não representam projetos realizados por Felipe.

## 6. Decisões técnicas

| Decisão | Motivo |
| --- | --- |
| HTML, CSS e JavaScript sem framework | Facilitar leitura, edição e publicação, sem instalação de dependências |
| Conteúdo público em `dist` | Separar os arquivos do site da documentação |
| `config.js` para dados e projetos | Concentrar as alterações mais frequentes em um arquivo |
| Renderização dos cartões em `app.js` | Permitir adicionar projetos sem duplicar marcação HTML |
| Imagens locais em `dist/assets` | Manter foto e capturas junto ao código |
| Links externos em nova aba | Manter o portfólio disponível enquanto o visitante explora um projeto |
| Sem backend, banco ou upload pelo navegador | O fluxo solicitado é manutenção via código |

`formacao` está presente na configuração, mas a seção Sobre ainda contém o texto diretamente no HTML. Essa limitação está documentada no README.

## 7. Comportamentos implementados

- Projetos são criados a partir da lista `projetos`.
- Com URL HTTP/HTTPS válida, a ação é “Ver site”.
- Sem URL, o cartão recebe a identificação “MODELO” e oferece uma explicação em diálogo.
- Capturas fornecidas aparecem nos cartões; uma falha de carregamento usa a prévia demonstrativa.
- WhatsApp configurado abre `wa.me` com a mensagem inicial codificada.
- Sem número, o botão informa que o contato ainda não foi disponibilizado.
- E-mail, GitHub e LinkedIn aparecem quando seus dados são preenchidos.
- Navegação por âncoras, foco visível, textos alternativos e redução de movimento conforme preferência do navegador.
- Layout responsivo com regras para desktop, tablet e celular.

## 8. Etapas e estado

| Etapa | Estado |
| --- | --- |
| Leitura do protótipo e da foto | Concluída |
| Definição da estrutura e direção visual | Concluída |
| Implementação da página e configuração | Concluída |
| Conferência de sintaxe JavaScript e recursos HTML | Concluída |
| Publicação inicial em Sites | Concluída, com acesso privado |
| Teste visual automatizado | Não executado: navegador do Playwright indisponível |
| Revisão visual manual em desktop e celular | Pendente |
| Inclusão dos projetos e contatos reais | Aguardando dados de Felipe |

## 9. Manutenção e próximos passos

1. Preencher o WhatsApp com país, DDD e número, além dos demais contatos desejados.
2. Substituir os modelos por projetos reais e respectivas capturas.
3. Revisar a biografia e os textos da apresentação.
4. Conferir navegação, contraste, recorte da foto e ausência de rolagem horizontal em telas menores.
5. Conferir o funcionamento dos links de projetos e contato.
6. Publicar uma nova versão após alterações. O envio de código ao GitHub não atualiza automaticamente o site hospedado em Sites.

Melhoria opcional futura: usar o campo `formacao` da configuração na seção Sobre para concentrar também esse texto. GitHub Pages, domínio próprio, formulário de contato e painel administrativo não foram configurados nesta versão.
