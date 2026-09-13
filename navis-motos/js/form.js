/* ==========================================================================
   NAVI'S MOTOS — form.js
   Validação client-side do formulário "Solicite um orçamento".
   IMPORTANTE: nesta versão não existe backend. Ao validar com sucesso,
   o pedido é montado como mensagem e aberto no WhatsApp da oficina —
   nada é enviado, armazenado ou processado automaticamente ainda.
   ========================================================================== */
(function(){
  const WHATS_NUMBER = '551137880136'; // (11) 3788-0136 — trocar se a oficina definir outro número

  const form = document.getElementById('orderForm');
  if(!form) return;
  const success = document.getElementById('formSuccess');

  function setError(field, message){
    const wrap = field.closest('.form-field');
    const errorEl = wrap.querySelector('.form-field__error');
    if(message){
      wrap.classList.add('has-error');
      errorEl.textContent = message;
    } else {
      wrap.classList.remove('has-error');
      errorEl.textContent = '';
    }
  }

  function validate(){
    let ok = true;

    const nome = form.nome;
    if(!nome.value.trim()){ setError(nome, 'Informe seu nome.'); ok = false; }
    else setError(nome, '');

    const telefone = form.telefone;
    const phoneDigits = telefone.value.replace(/\D/g,'');
    if(phoneDigits.length < 10){ setError(telefone, 'Informe um telefone válido com DDD.'); ok = false; }
    else setError(telefone, '');

    const modelo = form.modelo;
    if(!modelo.value.trim()){ setError(modelo, 'Informe o modelo da moto.'); ok = false; }
    else setError(modelo, '');

    const ano = form.ano;
    const anoValue = ano.value.trim();
    if(!/^\d{4}$/.test(anoValue)){ setError(ano, 'Informe um ano válido (ex: 2020).'); ok = false; }
    else setError(ano, '');

    const servico = form.servico;
    if(!servico.value){ setError(servico, 'Selecione um serviço.'); ok = false; }
    else setError(servico, '');

    return ok;
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!validate()){
      success.classList.remove('is-visible');
      const firstError = form.querySelector('.has-error input, .has-error select, .has-error textarea');
      if(firstError) firstError.focus();
      return;
    }

    const linhas = [
      'Olá! Gostaria de solicitar um orçamento na Navi\'s Motos.',
      '',
      'Nome: ' + form.nome.value.trim(),
      'Telefone: ' + form.telefone.value.trim(),
      'Moto: ' + form.modelo.value.trim() + ' (' + form.ano.value.trim() + ')',
      'Serviço desejado: ' + form.servico.value
    ];
    if(form.mensagem.value.trim()){
      linhas.push('Mensagem: ' + form.mensagem.value.trim());
    }

    const texto = encodeURIComponent(linhas.join('\n'));
    const url = 'https://wa.me/' + WHATS_NUMBER + '?text=' + texto;

    success.classList.add('is-visible');
    window.open(url, '_blank', 'noopener');
  });
})();
