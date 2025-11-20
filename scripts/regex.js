const el = document.getElementById('telefone');

el.addEventListener('input', (e) => {
  let v = e.target.value.replace(/\D/g, ''); // só números
  if (v.length > 11) v = v.slice(0,11);

  // formato: (##) #####-####
  if (v.length <= 2) {
    e.target.value = v ? `(${v}` : '';
  } else if (v.length <= 7) {
    e.target.value = `(${v.slice(0,2)}) ${v.slice(2)}`;
  } else {
    e.target.value = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  }
});

// validação extra no submit
document.querySelector('.formulario-login').addEventListener('submit', (ev) => {
  const regex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
  if (!regex.test(el.value)) {
    ev.preventDefault();
    alert('Telefone inválido. Use (11) 11111-1111');
    el.focus();
  }
});