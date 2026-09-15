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
  },
  {
    id: "filtro-ar",
    name: "Filtro de ar",
    desc: "Filtro de ar para manutenção do sistema de admissão de ar da moto.",
    category: "Peças",
    categorySlug: "pecas",
    price: "R$ 40,00",
    images: ["assets/images/produtos/filtro-ar-1.jpg"]
  },
  {
    id: "luva-frio",
    name: "Luva de frio",
    desc: "Luva de frio para proteção durante o uso em ambientes frios.",
    category: "Luvas",
    categorySlug: "luvas",
    price: "R$ 120,00",
    images: ["assets/images/produtos/luva-frio-1.jpg"]
  },
  {
    id: "pneus-moto",
    name: "Pneus para moto",
    desc: "Pneus de alta performance para motocicletas.",
    category: "Peças",
    categorySlug: "pecas",
    price: "R$ 400,00",
    images: ["assets/images/produtos/pneus-moto-1.jpg"]
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

    return `
      <article class="product-card" data-store-cat="${p.categorySlug}" data-store-name="${p.name.toLowerCase()}" data-product-id="${p.id}">
        <div class="product-card__media">${mediaHTML}${dotsHTML}</div>
        <div class="product-card__body">
          <span class="product-card__tag">${p.category}</span>
          <h3 class="product-card__title">${p.name}</h3>
          <p class="product-card__desc">${p.desc}</p>
          ${priceHTML}
          <button class="btn btn--outline btn--sm btn--block product-card__cta" data-action="view-product" data-product-id="${p.id}">Ver produto</button>
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

    // clique em "Ver produto" -> abre modal com foto + descrição + adicionar ao carrinho
    const viewBtn = e.target.closest('[data-action="view-product"]');
    if(viewBtn){
      const product = productsById[viewBtn.getAttribute('data-product-id')];
      if(product) openProductModal(product);
    }
  });

  /* ----- filtro por categoria + busca por texto, com paginação (12 produtos por página) ----- */
  const filterBtns = document.querySelectorAll('[data-store-filter]');
  const searchInput = document.getElementById('storeSearch');
  const pagination = document.getElementById('storePagination');
  const PAGE_SIZE = 12;
  let activeFilter = 'todos';
  let currentPage = 1;

  function getFilteredCards(){
    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    return Array.from(grid.querySelectorAll('.product-card')).filter(function(card){
      const matchesCat = activeFilter === 'todos' || card.getAttribute('data-store-cat') === activeFilter;
      const matchesSearch = !term || card.getAttribute('data-store-name').indexOf(term) !== -1;
      return matchesCat && matchesSearch;
    });
  }

  function renderPagination(totalPages){
    if(!pagination) return;
    if(totalPages <= 1){
      pagination.innerHTML = '';
      pagination.hidden = true;
      return;
    }
    pagination.hidden = false;
    let html = '<button class="store-pagination__arrow" data-page-action="prev"' + (currentPage === 1 ? ' disabled' : '') + ' aria-label="Página anterior">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg></button>';
    for(let i = 1; i <= totalPages; i++){
      html += '<button class="store-pagination__num' + (i === currentPage ? ' is-active' : '') + '" data-page="' + i + '"' + (i === currentPage ? ' aria-current="page"' : '') + '>' + i + '</button>';
    }
    html += '<button class="store-pagination__arrow" data-page-action="next"' + (currentPage === totalPages ? ' disabled' : '') + ' aria-label="Próxima página">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></button>';
    pagination.innerHTML = html;
  }

  function applyStoreFilters(resetPage){
    if(resetPage) currentPage = 1;
    const filtered = getFilteredCards();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if(currentPage > totalPages) currentPage = totalPages;

    grid.querySelectorAll('.product-card').forEach(function(card){ card.style.display = 'none'; });
    const start = (currentPage - 1) * PAGE_SIZE;
    filtered.slice(start, start + PAGE_SIZE).forEach(function(card){ card.style.display = ''; });

    if(emptyMsg) emptyMsg.hidden = filtered.length !== 0;
    renderPagination(totalPages);
  }

  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      activeFilter = btn.getAttribute('data-store-filter');
      applyStoreFilters(true);
    });
  });
  if(searchInput) searchInput.addEventListener('input', function(){ applyStoreFilters(true); });

  if(pagination){
    pagination.addEventListener('click', function(e){
      const btn = e.target.closest('button');
      if(!btn || btn.disabled) return;
      const totalPages = Math.max(1, Math.ceil(getFilteredCards().length / PAGE_SIZE));
      if(btn.getAttribute('data-page-action') === 'prev') currentPage = Math.max(1, currentPage - 1);
      else if(btn.getAttribute('data-page-action') === 'next') currentPage = Math.min(totalPages, currentPage + 1);
      else if(btn.getAttribute('data-page')) currentPage = Number(btn.getAttribute('data-page'));
      applyStoreFilters(false);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  applyStoreFilters(true);

  /* ==========================================================================
     Modal "Ver produto" — mostra foto(s) + descrição e permite escolher
     quantidade antes de adicionar ao carrinho.
     ========================================================================== */
  const productModal = document.getElementById('productModal');
  const productModalOverlay = document.getElementById('productModalOverlay');
  const productModalClose = document.getElementById('productModalClose');
  const productModalMedia = document.getElementById('productModalMedia');
  const productModalDots = document.getElementById('productModalDots');
  const productModalTag = document.getElementById('productModalTag');
  const productModalTitle = document.getElementById('productModalTitle');
  const productModalDesc = document.getElementById('productModalDesc');
  const productModalPrice = document.getElementById('productModalPrice');
  const productModalQtyValue = document.getElementById('productModalQtyValue');
  const productModalQtyMinus = document.getElementById('productModalQtyMinus');
  const productModalQtyPlus = document.getElementById('productModalQtyPlus');
  const productModalAdd = document.getElementById('productModalAdd');

  let modalProduct = null;
  let modalImgIndex = 0;
  let modalQty = 1;

  function placeholderMediaHTML(categorySlug){
    return '<div class="product-card__media--placeholder">' + (CATEGORY_ICON[categorySlug] || '') + '<span>Foto em breve</span></div>';
  }

  function renderModalMedia(){
    if(!modalProduct || !productModalMedia) return;
    const imgs = modalProduct.images || [];
    const src = imgs[modalImgIndex];
    if(src){
      productModalMedia.innerHTML = '<img src="' + src + '" alt="' + modalProduct.name + '">';
      const imgEl = productModalMedia.querySelector('img');
      if(imgEl){
        imgEl.addEventListener('error', function(){
          productModalMedia.innerHTML = placeholderMediaHTML(modalProduct.categorySlug);
        });
      }
    } else {
      productModalMedia.innerHTML = placeholderMediaHTML(modalProduct.categorySlug);
    }
    if(productModalDots){
      productModalDots.innerHTML = imgs.length > 1
        ? imgs.map(function(_, i){
            return '<button class="product-modal__dot' + (i === modalImgIndex ? ' is-active' : '') + '" data-idx="' + i + '" aria-label="Ver foto ' + (i + 1) + ' de ' + modalProduct.name + '"></button>';
          }).join('')
        : '';
    }
  }

  function openProductModal(product){
    if(!productModal) return;
    modalProduct = product;
    modalImgIndex = 0;
    modalQty = 1;
    if(productModalQtyValue) productModalQtyValue.textContent = modalQty;
    if(productModalTag) productModalTag.textContent = product.category.trim();
    if(productModalTitle) productModalTitle.textContent = product.name;
    if(productModalDesc) productModalDesc.textContent = product.desc;
    if(productModalPrice) productModalPrice.textContent = product.price ? product.price : 'Valor sob consulta';
    renderModalMedia();
    productModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeProductModal(){
    if(!productModal) return;
    productModal.classList.remove('is-open');
    document.body.style.overflow = '';
    modalProduct = null;
  }

  if(productModalClose) productModalClose.addEventListener('click', closeProductModal);
  if(productModalOverlay) productModalOverlay.addEventListener('click', closeProductModal);
  if(productModalDots){
    productModalDots.addEventListener('click', function(e){
      const dot = e.target.closest('.product-modal__dot');
      if(!dot) return;
      modalImgIndex = Number(dot.getAttribute('data-idx'));
      renderModalMedia();
    });
  }
  if(productModalQtyMinus){
    productModalQtyMinus.addEventListener('click', function(){
      modalQty = Math.max(1, modalQty - 1);
      productModalQtyValue.textContent = modalQty;
    });
  }
  if(productModalQtyPlus){
    productModalQtyPlus.addEventListener('click', function(){
      modalQty = Math.min(20, modalQty + 1);
      productModalQtyValue.textContent = modalQty;
    });
  }
  if(productModalAdd){
    productModalAdd.addEventListener('click', function(){
      if(!modalProduct) return;
      addToCart(modalProduct, modalQty);
      closeProductModal();
      openCartDrawer();
    });
  }

  /* ==========================================================================
     Carrinho — soma os produtos escolhidos e monta um único pedido
     para enviar pelo WhatsApp.
     ========================================================================== */
  const CART_KEY = 'navisMotosCart';
  const cartFab = document.getElementById('cartFab');
  const cartBadge = document.getElementById('cartBadge');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartDrawerClose = document.getElementById('cartDrawerClose');
  const cartDrawerList = document.getElementById('cartDrawerList');
  const cartDrawerEmpty = document.getElementById('cartDrawerEmpty');
  const cartDrawerTotal = document.getElementById('cartDrawerTotal');
  const cartWhatsBtn = document.getElementById('cartWhatsBtn');

  let cart = [];
  try {
    const saved = window.localStorage ? localStorage.getItem(CART_KEY) : null;
    if(saved) cart = JSON.parse(saved) || [];
  } catch(e){ cart = []; }

  function saveCart(){
    try { if(window.localStorage) localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e){}
  }

  function formatPrice(val){
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  function parsePrice(str){
    if(!str) return null;
    const normalized = String(str).replace(/[^0-9.,]/g, '').replace(/\./g, '').replace(',', '.');
    const val = parseFloat(normalized);
    return isNaN(val) ? null : val;
  }

  function addToCart(product, qty){
    const existing = cart.find(function(i){ return i.id === product.id; });
    if(existing) existing.qty += qty;
    else cart.push({ id: product.id, name: product.name, price: product.price || '', qty: qty });
    saveCart();
    renderCart();
  }
  function removeFromCart(id){
    cart = cart.filter(function(i){ return i.id !== id; });
    saveCart();
    renderCart();
  }
  function updateCartQty(id, qty){
    const item = cart.find(function(i){ return i.id === id; });
    if(!item) return;
    if(qty < 1){ removeFromCart(id); return; }
    item.qty = qty;
    saveCart();
    renderCart();
  }
  function cartCount(){
    return cart.reduce(function(sum, i){ return sum + i.qty; }, 0);
  }

  function renderCart(){
    const count = cartCount();
    if(cartBadge){
      cartBadge.textContent = count;
      cartBadge.hidden = count === 0;
    }
    if(!cartDrawerList) return;

    if(cart.length === 0){
      cartDrawerList.innerHTML = '';
      if(cartDrawerEmpty) cartDrawerEmpty.hidden = false;
      if(cartDrawerTotal) cartDrawerTotal.textContent = formatPrice(0);
      if(cartWhatsBtn) cartWhatsBtn.disabled = true;
      return;
    }
    if(cartDrawerEmpty) cartDrawerEmpty.hidden = true;
    if(cartWhatsBtn) cartWhatsBtn.disabled = false;

    let total = 0;
    let hasConsult = false;
    cartDrawerList.innerHTML = cart.map(function(item){
      const unit = parsePrice(item.price);
      let priceLabel;
      if(unit !== null){
        total += unit * item.qty;
        priceLabel = formatPrice(unit * item.qty);
      } else {
        hasConsult = true;
        priceLabel = 'Sob consulta';
      }
      return '<div class="cart-item" data-cart-id="' + item.id + '">' +
          '<div class="cart-item__info">' +
            '<span class="cart-item__name">' + item.name + '</span>' +
            '<span class="cart-item__price">' + priceLabel + '</span>' +
          '</div>' +
          '<div class="cart-item__qty">' +
            '<button class="cart-item__qty-btn" data-cart-action="minus" aria-label="Diminuir quantidade de ' + item.name + '">&minus;</button>' +
            '<span>' + item.qty + '</span>' +
            '<button class="cart-item__qty-btn" data-cart-action="plus" aria-label="Aumentar quantidade de ' + item.name + '">+</button>' +
          '</div>' +
          '<button class="cart-item__remove" data-cart-action="remove" aria-label="Remover ' + item.name + ' do carrinho">&times;</button>' +
        '</div>';
    }).join('');

    if(cartDrawerTotal){
      cartDrawerTotal.textContent = formatPrice(total) + (hasConsult ? ' + itens sob consulta' : '');
    }
  }

  function openCartDrawer(){
    if(!cartDrawer) return;
    renderCart();
    cartDrawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeCartDrawer(){
    if(!cartDrawer) return;
    cartDrawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if(cartFab) cartFab.addEventListener('click', openCartDrawer);
  if(cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
  if(cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  if(cartDrawerList){
    cartDrawerList.addEventListener('click', function(e){
      const itemEl = e.target.closest('.cart-item');
      const action = e.target.closest('[data-cart-action]');
      if(!itemEl || !action) return;
      const id = itemEl.getAttribute('data-cart-id');
      const item = cart.find(function(i){ return i.id === id; });
      if(!item) return;
      if(action.getAttribute('data-cart-action') === 'plus') updateCartQty(id, item.qty + 1);
      else if(action.getAttribute('data-cart-action') === 'minus') updateCartQty(id, item.qty - 1);
      else if(action.getAttribute('data-cart-action') === 'remove') removeFromCart(id);
    });
  }

  if(cartWhatsBtn){
    cartWhatsBtn.addEventListener('click', function(){
      if(cart.length === 0) return;
      const linhas = ['Olá! Gostaria de fazer o seguinte pedido na Navi\'s Motos:', ''];
      let total = 0;
      let hasConsult = false;
      cart.forEach(function(item){
        const unit = parsePrice(item.price);
        let linha = '- ' + item.qty + 'x ' + item.name;
        if(unit !== null){
          total += unit * item.qty;
          linha += ' (' + formatPrice(unit * item.qty) + ')';
        } else {
          hasConsult = true;
          linha += ' (valor sob consulta)';
        }
        linhas.push(linha);
      });
      linhas.push('');
      linhas.push('Total: ' + formatPrice(total) + (hasConsult ? ' + itens sob consulta' : ''));
      const texto = encodeURIComponent(linhas.join('\n'));
      window.open('https://wa.me/' + WHATS_NUMBER + '?text=' + texto, '_blank', 'noopener');
    });
  }

  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape') return;
    if(productModal && productModal.classList.contains('is-open')) closeProductModal();
    if(cartDrawer && cartDrawer.classList.contains('is-open')) closeCartDrawer();
  });

  renderCart();
})();