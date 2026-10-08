const c = window.PORTFOLIO;
const dialog = document.querySelector('#dialog');
function aviso(titulo, mensagem, label = 'CONTATO') {
  document.querySelector('#dialog-title').textContent = titulo;
  document.querySelector('#dialog-text').textContent = mensagem;
  document.querySelector('#dialog-label').textContent = label;
  dialog.showModal();
}
document.querySelectorAll('.close,.dismiss').forEach(b => b.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', e => { if(e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close(); }});
document.querySelectorAll('[data-nome]').forEach(e => e.textContent = c.nome);
document.querySelectorAll('[data-profissao]').forEach(e => e.textContent = c.profissao);
document.querySelector('#foto').src = c.foto;
document.querySelector('#foto').alt = c.nome + ' com seu notebook';
document.querySelector('#ano').textContent = new Date().getFullYear();
const wa = document.querySelector('#whatsapp');
const numero = c.whatsapp.replace(/\D/g, '');
if(numero) { wa.href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(c.mensagemWhatsApp); wa.target='_blank'; wa.rel='noopener noreferrer'; }
else wa.addEventListener('click',e=>{e.preventDefault();aviso('Contato em breve','O número de WhatsApp ainda não foi disponibilizado neste portfólio.');});
if(c.email) { const e=document.querySelector('#email');e.hidden=false;e.href='mailto:'+c.email; }
function urlValida(url){ try { return ['https:','http:'].includes(new URL(url,location.href).protocol); } catch {return false;} }
for(const [label,url] of [['GitHub',c.github],['LinkedIn',c.linkedin]]) if(url && urlValida(url)){ const a=document.createElement('a');a.textContent=label;a.href=url;a.target='_blank';a.rel='noopener noreferrer';document.querySelector('#socials').append(a); }
function mock(tipo){
 const box=document.createElement('div');box.className='mock';box.setAttribute('aria-hidden','true');
 const demos={institucional:'<div class="mock-nav"><b>studio.</b><span>Sobre &nbsp; Serviços &nbsp; Contato</span></div><div class="mock-title">Uma boa ideia.<br>Uma nova presença.</div><span class="mock-button">Conheça nossa empresa</span>',landing:'<div class="mock-nav"><b>nova /</b><span>Uma ideia. Novas possibilidades.</span></div><div class="mock-title">Seu próximo passo<br>começa aqui.</div><span class="mock-button">Quero conhecer</span>',app:'<div class="mock-nav"><b>workspace</b><span>Visão geral</span></div><div class="stats"><b><small>Projetos</small>12</b><b><small>Concluídos</small>08</b><b><small>Em andamento</small>04</b></div><div class="bars"><i style="height:35%"></i><i style="height:55%"></i><i style="height:45%"></i><i style="height:80%"></i><i style="height:65%"></i><i style="height:100%"></i></div>'};
 box.innerHTML='<div class="mock-bar"><i></i><i></i><i></i></div><div class="mock-body">'+(demos[tipo]||demos.institucional)+'</div>';return box;
}

function previewProjeto(p, real) {
  const box = document.createElement('div');
  box.className = 'project-preview';
  const visual = document.createElement(real ? 'a' : 'div');
  visual.className = 'project-image ' + (p.modelo || '');
  if (real) {
    visual.href = p.url;
    visual.target = '_blank';
    visual.rel = 'noopener noreferrer';
    visual.setAttribute('aria-label', 'Abrir ' + p.titulo + ' em uma nova aba');
  }
  const controls = document.createElement('div');
  controls.className = 'preview-controls';
  box.append(visual, controls);
  let observer;
  function limpar() {
    if (observer) observer.disconnect();
    visual.replaceChildren();
    controls.replaceChildren();
  }
  function linkExterno() {
    const a = document.createElement('a');
    a.href = p.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Abrir site';
    return a;
  }
  function mensagem(texto) {
    const note = document.createElement('p');
    note.className = 'preview-empty';
    note.textContent = texto;
    visual.replaceChildren(note);
  }
  function imagem() {
    limpar();
    if (p.imagem) {
      const img = document.createElement('img');
      img.src = p.imagem;
      img.alt = 'Prévia de ' + p.titulo;
      img.loading = 'lazy';
      img.addEventListener('error', () => mensagem('Imagem indisponível. Abra o site para conhecer o projeto.'), { once: true });
      visual.append(img);
    } else {
      mensagem('Este site pode bloquear a prévia incorporada. Conheça o projeto em uma nova aba.');
    }
    if (real) {
      const voltar = document.createElement('button');
      voltar.type = 'button';
      voltar.textContent = 'Tentar prévia ao vivo';
      voltar.addEventListener('click', aoVivo);
      controls.append(voltar, linkExterno());
    }
  }
  function aoVivo() {
    limpar();
    const url = new URL(p.url, location.href);
    if (location.protocol === 'https:' && url.protocol !== 'https:') {
      imagem();
      return;
    }
    const frame = document.createElement('iframe');
    frame.className = 'live-preview';
    frame.title = 'Prévia ao vivo de ' + p.titulo;
    frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer';
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    frame.tabIndex = -1;
    frame.src = url.href;
    visual.append(frame);
    const dimensionar = () => {
      const escala = visual.clientWidth / 1280;
      if (!escala) return;
      frame.style.width = '1280px';
      frame.style.height = Math.ceil(visual.clientHeight / escala) + 'px';
      frame.style.transform = 'scale(' + escala + ')';
    };
    observer = new ResizeObserver(dimensionar);
    observer.observe(visual);
    const label = document.createElement('span');
    label.textContent = 'Prévia ao vivo';
    const alternativa = document.createElement('button');
    alternativa.type = 'button';
    alternativa.textContent = p.imagem ? 'Ver imagem' : 'Prévia não abriu?';
    alternativa.addEventListener('click', imagem);
    controls.append(label, alternativa);
  }
  if (real && p.preview !== 'imagem') aoVivo();
  else if (p.imagem) imagem();
  else visual.append(mock(p.modelo));
  return box;
}

c.projetos.forEach((p,i)=>{
 const real=Boolean(p.url && urlValida(p.url));
 const article=document.createElement('article');article.className='project';
 const visual=previewProjeto(p,real);
 const body=document.createElement('div');body.className='project-content';
 const meta=document.createElement('div');meta.className='project-index';meta.textContent=String(i+1).padStart(2,'0')+' / '+p.categoria.toUpperCase();
 if(!real){const badge=document.createElement('span');badge.className='model-badge';badge.textContent='MODELO';meta.append(badge);}
 const title=document.createElement('h3');title.textContent=p.titulo;
 const desc=document.createElement('p');desc.textContent=p.descricao;
 const tags=document.createElement('div');tags.className='tags';(p.tecnologias||[]).forEach(t=>{const tag=document.createElement('span');tag.textContent=t;tags.append(tag);});
 const action=document.createElement(real?'a':'button');action.className='button secondary project-button';action.textContent=real?'Ver site':'Sobre o modelo';
 if(real){action.href=p.url;action.target='_blank';action.rel='noopener noreferrer';}else action.addEventListener('click',()=>aviso(p.titulo,p.descricao+' Este espaço demonstra a apresentação de um projeto. O site correspondente ainda não foi adicionado.','MODELO DE PROJETO'));
 body.append(meta,title,desc,tags,action);article.append(visual,body);document.querySelector('#project-list').append(article);
});
