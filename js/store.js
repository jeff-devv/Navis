/* ==========================================================================
   NAVI'S MOTOS — store.js
   ==========================================================================
   COMO EDITAR OS PRODUTOS (sem precisar saber programar):

   1. Cada produto é um bloco entre chaves { ... } dentro da lista
      STORE_PRODUTOS logo abaixo.

   2. Para adicionar o PREÇO de um produto, troque:
        price: ""
      por, por exemplo:
        price: "R$ 129,90"
      Se "price" ficar vazio (""), o card mostra "Valor sob consulta" e o
      botão fica "Consultar preço". Com um valor preenchido, o card mostra
      o preço e o botão vira "Comprar no WhatsApp".

   3. Cada produto tem 2 FOTOS (array "images"). Salve os arquivos dentro de
        assets/images/produtos/
      com os MESMOS nomes indicados (ex.: "capacete-integral-1.jpg" e
      "capacete-integral-2.jpg"). Quem visita o site pode clicar nas duas
      bolinhas embaixo da foto para alternar entre elas.
      Se um arquivo ainda não existir, aparece um ícone no lugar — nada quebra.

   4. Para ADICIONAR um produto novo: copie um bloco inteiro (de "{" até "},"),
      cole antes do "];" no final da lista, e troque os textos.

   5. Para REMOVER um produto: apague o bloco inteiro dele, de "{" até "},".

   Veja também o arquivo GUIA-LOJA.txt na raiz do projeto.
   ========================================================================== */

const STORE_PRODUTOS = [
  {
    id: "capacete-integral",
    name: "Capacete integral",
    desc: "Proteção total para cabeça e queixo, indicado para uso na cidade e estrada.",
    category: "Capacetes",
    categorySlug: "capacetes",
    price: "R$ 1.299,90",
    images: ["assets/images/produtos/capacete-integral-1.jpg", "assets/images/produtos/capacete-integral-2.jpg", "assets/images/produtos/capacete-integral-3.jpg"]
  },
  {
    id: "capacete-aberto",
    name: "Capacete aberto",
    desc: "Mais ventilação e visibilidade, ideal para trajetos urbanos.",
    category: "Capacetes",
    categorySlug: "capacetes",
    price: "R$ 210,00",
    images: ["assets/images/produtos/capacete-aberto-1.jpg", "assets/images/produtos/capacete-aberto-2.jpg", "assets/images/produtos/capacete-aberto-3.jpg"]
  },
  {
    id: "luvas-protecao",
    name: "Luvas de Proteção",
    desc: "Luvas com reforço em áreas críticas, para maior segurança e conforto.",
    category: " Luvas",
    categorySlug: "luvas",
    price: "R$ 110,00",
    images: ["assets/images/produtos/luvas-protecao-1.jpg"]
  },
  {
    id: "jaqueta-impermeavel",
    name: "Corta vento",
    desc: "Proteção contra vento para o dia a dia sobre a moto.",
    category: "Jaquetas",
    categorySlug: "jaquetas",
    price: "R$ 180,00",
    images: ["assets/images/produtos/jaqueta-impermeavel-1.jpg", "assets/images/produtos/jaqueta-impermeavel-2.jpg", "assets/images/produtos/jaqueta-impermeavel-3.jpg"]
  },
  {
    id: "jaqueta-protecao",
    name: "Jaqueta com proteção",
    desc: "Jaqueta com proteções para ombro e cotovelo, indicada para uso frequente.",
    category: "Jaquetas",
    categorySlug: "jaquetas",
    price: "R$ 500,00",
    images: ["assets/images/produtos/jaqueta-protecao-1.jpg", "assets/images/produtos/jaqueta-protecao-2.jpg", "assets/images/produtos/jaqueta-protecao-3.jpg"]
  },
  {
    id: "oleo-mineral",
    name: "Óleo mineral para motor",
    desc: "Lubrificação para manutenção regular, conforme indicação do fabricante da moto.",
    category: "Óleo",
    categorySlug: "oleo",
    price: "R$ 50,00",
    images: ["assets/images/produtos/oleo-mineral-1.jpg", "assets/images/produtos/oleo-mineral-2.jpg", "assets/images/produtos/oleo-mineral-3.jpg"]
  },
  {
    id: "oleo-sintetico",
    name: "Óleo sintético para motor",
    desc: "Maior proteção e durabilidade para motos de uso intenso.",
    category: "Óleo",
    categorySlug: "oleo",
    price: "R$ 60,00",
    images: ["assets/images/produtos/oleo-sintetico-1.jpg", "assets/images/produtos/oleo-sintetico-2.jpg", "assets/images/produtos/oleo-sintetico-3.jpg"]
  },
  {
    id: "kit-relacao",
    name: "Kit de relação",
    desc: "Corrente, coroa e pinhão para troca completa do conjunto de transmissão.",
    category: "Peças",
    categorySlug: "pecas",
    price: "R$ 150,00",
    images: ["assets/images/produtos/kit-relacao-1.jpg"]
  },
  {
    id: "pastilha-freio",
    name: "Pastilha de freio",
    desc: "Reposição de pastilhas para manter a frenagem segura.",
    category: "Peças",
    categorySlug: "pecas",
    price: "R$ 40,00",
    images: ["assets/images/produtos/pastilha-freio-1.jpg", "assets/images/produtos/pastilha-freio-2.jpg"]
  },
  {
    id: "bateria-moto",
    name: "Bateria para moto",
    desc: "Reposição de bateria para partida e sistema elétrico da moto.",
    category: "Peças",
    categorySlug: "pecas",
    price: "R$ 210,00",
    images: ["assets/images/produtos/bateria-moto-1.jpg", "assets/images/produtos/bateria-moto-2.jpg"]
  }
];

(function(){
  const WHATS_NUMBER = '551137880136'; // (11) 3788-0136 — mesmo número usado no resto do site

  // ícone de reserva por categoria, usado quando a foto do produto ainda não existir
  const CATEGORY_ICON = {
    capacetes: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 15a8 8 0 0 1 16 0v2H4z"/><path d="M8 17v1a4 4 0 0 0 8 0v-1"/></svg>',
    jaquetas:  '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 4l4 2 4-2 3 3-2 3v10H7V10L5 7z"/></svg>',
    oleo:      '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 3h6l-1 5h-4z"/><path d="M8 8h8l1 4a5 5 0 0 1-10 0z"/></svg>',
    pecas:     '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3.4"/><path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/></svg>'
  };

  function placeholderHTML(categorySlug){
    return `<div class="product-card__media--placeholder">${CATEGORY_ICON[categorySlug] || ''}<span>Foto em breve</span></div>`;
  }

  function cardHTML(p){
    const imgs = p.images || [];
    const mediaHTML = imgs.length
      ? `<img src="${imgs[0]}" alt="${p.name}" loading="lazy" data-idx="0" onerror="storeImgFallback(this,'${p.categorySlug}')">`
      : placeholderHTML(p.categorySlug);

    const dotsHTML = imgs.length > 1
      ? `<div class="product-card__dots">` +
          imgs.map(function(_, i){
            return `<button class="product-card__dot${i===0 ? ' is-active' : ''}" data-idx="${i}" aria-label="Ver foto ${i+1} de ${p.name}"></button>`;
          }).join('') +
        `</div>`
      : '';

    const priceHTML = p.price
      ? `<div class="product-card__price">${p.price}</div>`
      : `<div class="product-card__price product-card__price--muted">Valor sob consulta</div>`;

    const ctaLabel = p.price ? 'Comprar no WhatsApp' : 'Consultar preço';

    return `
      <article class="product-card" data-store-cat="${p.categorySlug}" data-store-name="${p.name.toLowerCase()}" data-product-id="${p.id}">
        <div class="product-card__media">${mediaHTML}${dotsHTML}</div>
        <div class="product-card__body">
          <span class="product-card__tag">${p.category}</span>
          <h3 class="product-card__title">${p.name}</h3>
          <p class="product-card__desc">${p.desc}</p>
          ${priceHTML}
          <button class="btn btn--outline btn--sm btn--block product-card__cta" data-product="${p.name}" data-price="${p.price || ''}">${ctaLabel}</button>
        </div>
      </article>`;
  }

  // chamado automaticamente pelo navegador se uma foto do produto ainda não existir
  window.storeImgFallback = function(img, categorySlug){
    const wrap = document.createElement('div');
    wrap.className = 'product-card__media--placeholder';
    wrap.innerHTML = (CATEGORY_ICON[categorySlug] || '') + '<span>Foto em breve</span>';
    img.replaceWith(wrap);
  };

  const grid = document.getElementById('storeGrid');
  const emptyMsg = document.getElementById('storeEmpty');
  if(!grid) return;

  grid.innerHTML = STORE_PRODUTOS.map(cardHTML).join('');

  const productsById = {};
  STORE_PRODUTOS.forEach(function(p){ productsById[p.id] = p; });

  grid.addEventListener('click', function(e){
    // troca de foto (bolinhas)
    const dot = e.target.closest('.product-card__dot');
    if(dot){
      const card = dot.closest('.product-card');
      const product = productsById[card.getAttribute('data-product-id')];
      const idx = Number(dot.getAttribute('data-idx'));
      const img = card.querySelector('.product-card__media img');
      if(product && img && product.images[idx]){
        img.src = product.images[idx];
        card.querySelectorAll('.product-card__dot').forEach(function(d){ d.classList.remove('is-active'); });
        dot.classList.add('is-active');
      }
      return;
    }

    // clique na própria foto -> abre em tela cheia (com setas se houver mais de uma foto)
    const media = e.target.closest('.product-card__media');
    if(media && e.target.tagName === 'IMG'){
      const card = media.closest('.product-card');
      const product = productsById[card.getAttribute('data-product-id')];
      const activeDot = media.querySelector('.product-card__dot.is-active');
      const startIdx = activeDot ? Number(activeDot.getAttribute('data-idx')) : 0;
      if(product && typeof window.openLightboxGallery === 'function'){
        const imgs = product.images.map(function(src){ return { src: src, alt: product.name }; });
        window.openLightboxGallery(imgs, startIdx);
      }
      return;
    }

    // clique no botão de comprar/consultar -> abre WhatsApp
    const btn = e.target.closest('.product-card__cta');
    if(btn){
      const nome = btn.getAttribute('data-product');
      const preco = btn.getAttribute('data-price');
      let msg = `Olá! Tenho interesse em: ${nome}.`;
      msg += preco ? ` Vi o valor de ${preco} no site.` : ' Poderiam me informar disponibilidade e preço?';
      window.open('https://wa.me/' + WHATS_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    }
  });

  /* ----- filtro por categoria + busca por texto, juntos ----- */
  const filterBtns = document.querySelectorAll('[data-store-filter]');
  const searchInput = document.getElementById('storeSearch');
  let activeFilter = 'todos';

  function applyStoreFilters(){
    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    let visibleCount = 0;
    grid.querySelectorAll('.product-card').forEach(function(card){
      const matchesCat = activeFilter === 'todos' || card.getAttribute('data-store-cat') === activeFilter;
      const matchesSearch = !term || card.getAttribute('data-store-name').indexOf(term) !== -1;
      const show = matchesCat && matchesSearch;
      card.style.display = show ? '' : 'none';
      if(show) visibleCount++;
    });
    if(emptyMsg) emptyMsg.hidden = visibleCount !== 0;
  }

  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      activeFilter = btn.getAttribute('data-store-filter');
      applyStoreFilters();
    });
  });
  if(searchInput) searchInput.addEventListener('input', applyStoreFilters);
})();
