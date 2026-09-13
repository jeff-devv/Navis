/* ==========================================================================
   NAVI'S MOTOS — main.js
   ========================================================================== */
(function(){

  /* ----- dados de contato / endereço (fonte única, usada em vários pontos) ----- */
  const WHATS_NUMBER = '551137880136';
  const WHATS_MSG = encodeURIComponent("Olá! Vim pelo site da Navi's Motos e gostaria de mais informações.");
  const WHATS_URL = 'https://wa.me/' + WHATS_NUMBER + '?text=' + WHATS_MSG;
  const ADDRESS = 'Rua Kenkiti Shimomoto, 494, Jardim Boa Vista, São Paulo - SP, 05583-000';
  const ADDRESS_ENC = encodeURIComponent(ADDRESS);

  document.querySelectorAll('#heroWhatsBtn, #mobileWhatsBtn, #whatsTile, #footerWhatsBtn, #footerWhatsText')
    .forEach(function(el){ if(el) el.href = WHATS_URL; });

  const dirBtn = document.getElementById('dirBtn');
  const mapsBtn = document.getElementById('mapsBtn');
  const mapEmbed = document.getElementById('mapEmbed');
  if(dirBtn) dirBtn.href = 'https://www.google.com/maps/dir/?api=1&destination=' + ADDRESS_ENC;
  if(mapsBtn) mapsBtn.href = 'https://www.google.com/maps/search/?api=1&query=' + ADDRESS_ENC;
  if(mapEmbed) mapEmbed.src = 'https://www.google.com/maps?q=' + ADDRESS_ENC + '&output=embed';

  /* ----- "Saiba mais" dos cards de serviço -> WhatsApp com o serviço já indicado ----- */
  document.querySelectorAll('.service-card__link').forEach(function(btn){
    btn.addEventListener('click', function(){
      const nome = btn.getAttribute('data-service') || '';
      const msg = encodeURIComponent('Olá! Quero saber mais sobre o serviço de ' + nome + ' da Navi\'s Motos.');
      window.open('https://wa.me/' + WHATS_NUMBER + '?text=' + msg, '_blank', 'noopener');
    });
  });

  /* ----- animação única de abertura (porta de garagem) ----- */
  const shutter = document.getElementById('shutter');
  if(shutter){
    window.addEventListener('load', function(){
      requestAnimationFrame(function(){
        shutter.classList.add('is-open');
      });
      shutter.addEventListener('animationend', function(){
        shutter.remove();
      });
      // segurança: remove mesmo se animationend não disparar (ex: reduced motion)
      setTimeout(function(){ if(shutter.parentNode) shutter.remove(); }, 1600);
    });
  }

  /* ----- header: encolhe / escurece ao rolar ----- */
  const header = document.getElementById('header');
  function onScrollHeader(){
    if(window.scrollY > 12) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScrollHeader, { passive:true });
  onScrollHeader();

  /* ----- destaca o link do menu correspondente à seção visível ----- */
  const sections = ['topo','sobre','servicos','galeria','avaliacoes','localizacao','contato']
    .map(function(id){ return document.getElementById(id); })
    .filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('.nav__link'));

  if('IntersectionObserver' in window && sections.length){
    const observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          const id = entry.target.id;
          navLinks.forEach(function(link){
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin:'-45% 0px -50% 0px' });
    sections.forEach(function(sec){ observer.observe(sec); });
  }

  /* ----- ticker: duplica o conteúdo para o loop infinito ficar contínuo ----- */
  const track = document.getElementById('tickerTrack');
  if(track){
    track.innerHTML += track.innerHTML;
  }

  /* ----- medidor de avaliação (gauge) anima uma vez ao entrar na tela ----- */
  const gaugeFill = document.getElementById('gaugeFill');
  if(gaugeFill && 'IntersectionObserver' in window){
    const total = 270;               // comprimento total do arco (stroke-dasharray)
    const rating = 4.1, max = 5;
    const target = total - (rating / max) * total;
    const gaugeObserver = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          gaugeFill.style.transition = 'stroke-dashoffset 1.1s cubic-bezier(.22,.61,.36,1)';
          gaugeFill.style.strokeDashoffset = target;
          obs.disconnect();
        }
      });
    }, { threshold:0.4 });
    gaugeObserver.observe(gaugeFill);
  }

  /* ----- galeria: filtro por categoria ----- */
  const filters = document.querySelectorAll('.gallery-filter');
  const items = document.querySelectorAll('.gallery-item');
  filters.forEach(function(btn){
    btn.addEventListener('click', function(){
      filters.forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      const cat = btn.getAttribute('data-filter');
      items.forEach(function(item){
        const cats = (item.getAttribute('data-cat') || '').split(' ');
        item.style.display = (cat === 'todos' || cats.indexOf(cat) !== -1) ? '' : 'none';
      });
    });
  });

  /* ----- lightbox: abre foto em tela cheia, com setas quando há mais de uma ----- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxFallback = document.getElementById('lightboxFallback');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCount = document.getElementById('lightboxCount');

  let lbImages = [];
  let lbIndex = 0;

  function renderLightbox(){
    const src = lbImages[lbIndex];
    lightboxFallback.hidden = true;
    lightboxImg.hidden = false;
    lightboxImg.src = src.src;
    lightboxImg.alt = src.alt || '';
    const multi = lbImages.length > 1;
    lightboxPrev.hidden = !multi;
    lightboxNext.hidden = !multi;
    lightboxCount.textContent = multi ? (lbIndex + 1) + ' / ' + lbImages.length : '';
  }
  lightboxImg.addEventListener('error', function(){
    if(!lightboxImg.src) return;
    lightboxImg.hidden = true;
    lightboxFallback.hidden = false;
  });

  // usada tanto pela Galeria quanto pela Loja.
  // images: [{src, alt}, ...] — startIndex: qual foto abre primeiro
  window.openLightboxGallery = function(images, startIndex){
    lbImages = images;
    lbIndex = startIndex || 0;
    renderLightbox();
    lightbox.classList.add('is-open');
  };

  function closeLightbox(){
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
    lightboxImg.hidden = false;
    lightboxFallback.hidden = true;
    lbImages = [];
  }
  function showPrev(){ if(!lbImages.length) return; lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length; renderLightbox(); }
  function showNext(){ if(!lbImages.length) return; lbIndex = (lbIndex + 1) % lbImages.length; renderLightbox(); }

  document.querySelectorAll('.gallery-item:not(.gallery-item--empty)').forEach(function(item){
    const img = item.querySelector('img');
    if(!img) return;
    const open = function(){ window.openLightboxGallery([{ src: img.src, alt: img.alt }], 0); };
    item.addEventListener('click', open);
    item.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
    });
  });

  if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if(lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
  if(lightboxNext) lightboxNext.addEventListener('click', showNext);
  if(lightbox){
    lightbox.addEventListener('click', function(e){ if(e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener('keydown', function(e){
    if(!lightbox.classList.contains('is-open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') showPrev();
    if(e.key === 'ArrowRight') showNext();
  });

})();
