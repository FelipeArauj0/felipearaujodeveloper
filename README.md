# Portfólio — Felipe Araujo

Site estático em HTML, CSS e JavaScript, sem instalação ou compilação.

## Alterar conteúdo
Edite **dist/config.js**. Ele concentra nome, profissão, foto, WhatsApp, e-mail, GitHub, LinkedIn e a lista de projetos.

### WhatsApp
Preencha `whatsapp` com seu número completo, somente dígitos: país 55, DDD e número. Enquanto o campo estiver vazio, o botão avisa que o contato ainda não foi disponibilizado, sem encaminhar para um número fictício.

### Adicionar um site
1. Salve uma captura de tela em `dist/assets`, por exemplo `meu-site.jpg`.
2. Duplique um objeto da lista `projetos` e preencha:

```js
{
  titulo: 'Nome do seu projeto',
  categoria: 'Site institucional',
  descricao: 'Descrição curta do projeto.',
  imagem: 'assets/meu-site.jpg',
  url: 'https://endereco-real-do-seu-site.com',
  tecnologias: ['HTML', 'CSS', 'JavaScript']
}
```

Com uma URL preenchida, o cartão exibe **Ver site** e abre o endereço em outra aba. Sem URL, aparece identificado como **MODELO**, sem atribuir um trabalho fictício a você. Os três espaços iniciais são modelos, não projetos realizados.

### Alterar visual
- `dist/styles.css`: cores, tipografia, espaçamento e responsividade.
- `dist/index.html`: textos de apresentação e estrutura.
- `dist/app.js`: renderização dos cartões e comportamento dos contatos.

## Visualizar localmente
Na pasta do projeto, rode `python3 -m http.server 8000 --directory dist` e abra http://localhost:8000.

## Publicar
O diretório público é `dist`. Depois de mudar o código, publique uma nova versão para refletir as alterações no endereço hospedado. Nenhum dado é salvo pelo visitante e não há painel administrativo.

## Estrutura do repositório

| Arquivo | Responsabilidade |
| --- | --- |
| `dist/index.html` | Estrutura da página, apresentação, sobre e contato |
| `dist/styles.css` | Aparência, layout e adaptação a diferentes telas |
| `dist/config.js` | Dados de identificação, contatos e projetos |
| `dist/app.js` | Cartões dinâmicos, links e diálogos |
| `dist/assets/felipe.png` | Foto de apresentação |
| `planejamento.md` | Objetivo, decisões, requisitos e próximos passos |

## Requisitos

Um navegador moderno. Para o servidor local do exemplo, Python 3. Não há dependências npm, backend, banco de dados ou etapa de build.

## Contatos e dados pessoais

Em `dist/config.js`, preencha `email`, `github` e `linkedin` para exibir os respectivos links. Nome e profissão também são lidos desse arquivo. Os textos de biografia e formação exibidos na seção Sobre estão em `dist/index.html`; o campo `formacao` da configuração está reservado e ainda não é usado na renderização.

## Estado atual

- Foto e apresentação de Felipe Araujo incluídas.
- Três cartões demonstrativos, identificados como modelos.
- WhatsApp, e-mail e redes sociais aguardam seus dados.
- Links de projetos reais e capturas de tela aguardam inclusão.

## Versão hospedada

A primeira versão foi publicada em:
https://felipe-araujo-portfolio.janinegabriela76.chatgpt.site

O acesso inicial é privado. Enviar alterações para este GitHub não atualiza automaticamente a versão hospedada em Sites. Para hospedar em outro serviço, publique o conteúdo de `dist`. Este repositório não configura GitHub Pages nem publicação automática.

## Verificações

A versão inicial passou por verificação de sintaxe de `app.js` e `config.js` e conferência dos caminhos de recursos referenciados no HTML. A publicação em Sites foi concluída. A tentativa de teste visual automatizado não pôde executar por ausência do navegador do Playwright; a revisão visual em navegador permanece recomendada.
