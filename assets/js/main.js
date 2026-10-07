/**
 * Vinícius Amaral Portfolio JavaScript
 */

const PROJECTS_DATA = {
  "modelagem-3d": {
    id: "modelagem-3d",
    title: "Modelagem 3D & Unity",
    category: "Desenvolvimento 3D",
    year: "2023",
    lead: "Estudos focados na criação de cenários e objetos 3D utilizando a engine Unity. Este projeto me ajudou a entender como funcionam os ambientes virtuais interativos e a lógica por trás da renderização em tempo real.",
    credits: {
      date: "Atual",
      context: "Projeto Acadêmico",
      tools: "Unity 3D, C#",
      focus: "Modelagem e Lógica"
    },
    gallery: [
      { caption: "Visão Geral do Cenário 3D" },
      { caption: "Detalhes da Modelagem" },
      { caption: "Teste de Iluminação na Unity" }
    ],
    next: "dev-software",
    prev: "logica-programacao"
  },
  "dev-software": {
    id: "dev-software",
    title: "Projetos de Software",
    category: "Programação",
    year: "2023",
    lead: "Aplicações desenvolvidas durante o curso, com foco em resolver problemas práticos utilizando conceitos de engenharia de software e estruturação limpa de código.",
    credits: {
      date: "2023",
      context: "Estudos Independentes",
      tools: "Python, C, Git",
      focus: "Arquitetura e Clean Code"
    },
    gallery: [
      { caption: "Interface da Aplicação" },
      { caption: "Estrutura do Código" },
      { caption: "Diagrama de Arquitetura" }
    ],
    next: "sistemas-embarcados",
    prev: "modelagem-3d"
  },
  "sistemas-embarcados": {
    id: "sistemas-embarcados",
    title: "Sistemas Embarcados",
    category: "Hardware & IoT",
    year: "2022",
    lead: "Trabalhando na fronteira entre o hardware e o software. Projetos utilizando microcontroladores para automação e interação com o mundo físico através de sensores e atuadores.",
    credits: {
      date: "2022 - Atual",
      context: "Laboratório de Engenharia",
      tools: "C++, Microcontroladores",
      focus: "Automação e Controle"
    },
    gallery: [
      { caption: "Protótipo na Protoboard" },
      { caption: "Leitura de Sensores Seriais" },
      { caption: "Projeto Final de Automação" }
    ],
    next: "logica-programacao",
    prev: "dev-software"
  },
  "logica-programacao": {
    id: "logica-programacao",
    title: "Lógica de Programação",
    category: "Estudos Acadêmicos",
    year: "2021",
    lead: "A base de todo engenheiro da computação. Repositório focado em resolução de algoritmos, estruturas de dados clássicas e desafios de programação competitiva.",
    credits: {
      date: "Início do Curso",
      context: "Fundamentos",
      tools: "C, C++",
      focus: "Otimização e Algoritmos"
    },
    gallery: [
      { caption: "Desafios Resolvidos" },
      { caption: "Gráfico de Desempenho (Big-O)" },
      { caption: "Estudo de Árvores Binárias" }
    ],
    next: "modelagem-3d",
    prev: "sistemas-embarcados"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initMobileNav();
  initProjectModals();
  initContactModal();
  initDynamicProjectPage();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('quinn-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('quinn-theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      menuBtn.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      menuBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  const links = drawer.querySelectorAll('.mobile-nav-link');
  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuBtn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initProjectModals() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const triggers = document.querySelectorAll('[data-project-trigger]');

  triggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey) return;
      const projectId = trig.getAttribute('data-project-trigger');
      if (projectId && PROJECTS_DATA[projectId]) {
        e.preventDefault();
        openProjectModal(PROJECTS_DATA[projectId]);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(data) {
  const modal = document.getElementById('case-study-modal');
  const title = modal.querySelector('.case-modal-title');
  const cat = modal.querySelector('.case-modal-cat');
  const lead = modal.querySelector('.case-modal-lead');
  const credits = modal.querySelector('.case-modal-credits');
  const gallery = modal.querySelector('.case-modal-gallery');
  const fullPageLink = modal.querySelector('.case-modal-fullpage');

  if (title) title.textContent = data.title;
  if (cat) cat.textContent = data.category;
  if (lead) lead.textContent = data.lead;
  if (fullPageLink) fullPageLink.href = `project.html?id=${data.id}`;

  if (credits) {
    credits.innerHTML = `
      <div class="credit-item">
        <div class="credit-item-label">Data</div>
        <div class="credit-item-value">${data.credits.date}</div>
      </div>
      <div class="credit-item">
        <div class="credit-item-label">Contexto</div>
        <div class="credit-item-value">${data.credits.context}</div>
      </div>
      <div class="credit-item">
        <div class="credit-item-label">Ferramentas</div>
        <div class="credit-item-value">${data.credits.tools}</div>
      </div>
      <div class="credit-item">
        <div class="credit-item-label">Foco</div>
        <div class="credit-item-value">${data.credits.focus}</div>
      </div>
    `;
  }

  if (gallery) {
    gallery.innerHTML = data.gallery.map(item => `
      <div style="margin-bottom: 2rem;">
        <div class="img-placeholder" style="min-height: 400px; margin-bottom: 0.5rem;">[ Espaço para Imagem: ${item.caption} ]</div>
        <p style="font-size:0.8rem; color:var(--text-subtle); margin-top:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">${item.caption}</p>
      </div>
    `).join('');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  const triggers = document.querySelectorAll('[data-contact-trigger]');
  const closeBtn = modal.querySelector('.modal-close-btn');
  const form = modal.querySelector('form');

  triggers.forEach(trig => {
    trig.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit-btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Mensagem Recebida. Obrigado!';
        submitBtn.style.backgroundColor = '#2e7d32';
        setTimeout(() => {
          form.reset();
          modal.classList.remove('active');
          document.body.style.overflow = '';
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
        }, 1800);
      }, 700);
    });
  }
}

function initDynamicProjectPage() {
  const projectPage = document.querySelector('.project-detail-section');
  if (!projectPage) return;

  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = urlParams.get('id') || 'modelagem-3d';
  const project = PROJECTS_DATA[requestedId] || PROJECTS_DATA['modelagem-3d'];

  document.title = `${project.title} — Vinícius Amaral`;

  const titleEl = document.getElementById('proj-title');
  const catEl = document.getElementById('proj-cat');
  const statementEl = document.getElementById('proj-statement');
  const creditsEl = document.getElementById('proj-credits');
  const galleryEl = document.getElementById('proj-gallery');
  const nextEl = document.getElementById('proj-next');
  const prevEl = document.getElementById('proj-prev');

  if (titleEl) titleEl.textContent = project.title;
  if (catEl) catEl.textContent = project.category;
  if (statementEl) statementEl.textContent = project.lead;

  if (creditsEl) {
    creditsEl.innerHTML = `
      <div class="credit-item">
        <div class="credit-item-label">Data</div>
        <div class="credit-item-value">${project.credits.date}</div>
      </div>
      <div class="credit-item">
        <div class="credit-item-label">Contexto</div>
        <div class="credit-item-value">${project.credits.context}</div>
      </div>
      <div class="credit-item">
        <div class="credit-item-label">Ferramentas</div>
        <div class="credit-item-value">${project.credits.tools}</div>
      </div>
      <div class="credit-item">
        <div class="credit-item-label">Foco</div>
        <div class="credit-item-value">${project.credits.focus}</div>
      </div>
    `;
  }

  if (galleryEl) {
    galleryEl.innerHTML = project.gallery.map((item, idx) => {
      const isLarge = idx === 0 || idx === 3;
      return `
        <div class="gallery-row ${isLarge ? 'single-full' : 'split-half'}">
          <div>
             <div class="img-placeholder" style="min-height: 500px;">[ Espaço para Imagem: ${item.caption} ]</div>
          </div>
          ${!isLarge && project.gallery[idx + 1] ? `
            <div>
              <div class="img-placeholder" style="min-height: 500px;">[ Espaço para Imagem: ${project.gallery[idx+1].caption} ]</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  if (nextEl && project.next && PROJECTS_DATA[project.next]) {
    const nextProj = PROJECTS_DATA[project.next];
    nextEl.href = `project.html?id=${nextProj.id}`;
    const nameEl = nextEl.querySelector('.project-nav-name');
    if (nameEl) nameEl.textContent = nextProj.title;
  }

  if (prevEl && project.prev && PROJECTS_DATA[project.prev]) {
    const prevProj = PROJECTS_DATA[project.prev];
    prevEl.href = `project.html?id=${prevProj.id}`;
    const nameEl = prevEl.querySelector('.project-nav-name');
    if (nameEl) nameEl.textContent = prevProj.title;
  }
}
