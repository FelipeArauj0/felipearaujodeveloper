# Portfólio — Felipe Araujo

Site estático em HTML, CSS e JavaScript, sem instalação ou compilação.

## Alterar conteúdo
Edite **dist/config.js**. Ele concentra nome, profissão, foto, WhatsApp, e-mail, GitHub, LinkedIn e a lista de projetos.

### WhatsApp
Preencha `whatsapp` com seu número completo, somente dígitos: país 55, DDD e número. Enquanto o campo estiver vazio, o botão avisa que o contato ainda não foi disponibilizado, sem encaminhar para um número fictício.

### Adicionar um site
1. Copie o endereço público do site (HTTPS, de preferência o domínio de produção).
2. Opcionalmente, salve uma captura em `dist/assets` para usar como alternativa.
3. Duplique um objeto da lista `projetos` e preencha:

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

## Publicar na Vercel

O arquivo `vercel.json` na raiz define este projeto como site estático, sem instalação ou build, e aponta o diretório público para `dist`.

No projeto da Vercel, confira em **Settings → Build and Deployment**:

| Configuração | Valor |
| --- | --- |
| Root Directory | Raiz do repositório (deixe vazio; não selecione `dist`) |
| Framework Preset | Other |
| Build Command | Vazio |
| Install Command | Vazio |
| Output Directory | `dist` |

A raiz deve ser o repositório para que a Vercel leia o `vercel.json`. Com o GitHub conectado à Vercel, commits na branch de produção configurada podem disparar novas publicações. Se não houver nova publicação automática, faça **Redeploy** usando o commit mais recente de `main`. A configuração vale para novas publicações; uma publicação antiga não é alterada retroativamente.

Se aparecer 404, confirme o Root Directory e o Output Directory. Se a publicação falhar, consulte o Build Log. O endereço e os logs da publicação na conta Vercel não foram verificados a partir deste repositório.

## Prévia ao vivo a partir do link

Ao preencher `url`, o cartão carrega o site em um iframe reduzido. Não é preciso enviar uma captura de tela. Exemplo:

```js
{
  titulo: 'Meu projeto',
  categoria: 'Aplicação web',
  descricao: 'Descrição do projeto.',
  url: 'https://endereco-publico-do-site.com',
  imagem: '', // opcional
  tecnologias: ['HTML', 'CSS', 'JavaScript']
}
```

- A prévia busca o conteúdo do endereço quando é carregada. Não é uma captura automática nem uma transmissão contínua; atualize a página para carregar alterações do site.
- Salvar o link no código exige uma nova publicação na Vercel para aparecer aos visitantes.
- Use links públicos de produção. Links privados, protegidos por login ou de deploys antigos podem falhar.
- Alguns sites bloqueiam iframes com `X-Frame-Options` ou `Content-Security-Policy: frame-ancestors`. Este portfólio não contorna essas restrições.
- O navegador não permite detectar de forma confiável uma falha em iframe de outra origem. Por isso há uma alternativa manual: **Ver imagem** ou **Prévia não abriu?**.
- A imagem opcional deve existir em `dist/assets` e o nome precisa coincidir, inclusive maiúsculas e minúsculas.
- Para usar apenas imagem em determinado projeto, adicione `preview: 'imagem'`. O botão **Tentar prévia ao vivo** continua disponível.
- Para navegar e interagir com o projeto, use **Ver site**. O iframe é apenas uma prévia visual.

## Três projetos no início e página completa

A página inicial exibe os **três primeiros itens** da lista `projetos`, respeitando a ordem definida em `dist/config.js`.

- Com até três itens, não há botão “Ver mais”.
- Com quatro ou mais, “Ver mais” aparece automaticamente e abre `projetos.html`.
- A página completa usa a mesma lista e apresenta todos os projetos em duas colunas no desktop e uma no celular.
- As imagens clicáveis, animações, prévias e botões de acesso continuam funcionando nas duas páginas.
- A contagem considera cada objeto cadastrado na lista, inclusive modelos sem URL. Remova modelos que não queira apresentar.
- Não é preciso criar os cartões ou alterar o HTML ao adicionar um projeto. Basta editar a lista e publicar a alteração.
