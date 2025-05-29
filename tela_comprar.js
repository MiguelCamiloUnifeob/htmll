const form = document.querySelector(".form_pagamento");
const numeroCartao = document.getElementById("numero-cartao");
const validade = document.getElementById("validade");
const cvv = document.getElementById("cvv");

// Formatar número do cartão com espaços
numeroCartao.addEventListener("input", () => {
  let valor = numeroCartao.value.replace(/\D/g, "");
  valor = valor.replace(/(.{4})/g, "$1 ").trim();
  numeroCartao.value = valor;
});

// Máscara para validade (MM/AA)
validade.addEventListener("input", () => {
  let valor = validade.value.replace(/\D/g, "").slice(0, 4);
  if (valor.length > 2) {
    valor = valor.slice(0, 2) + "/" + valor.slice(2);
  }
  validade.value = valor;
});

// Validação do formulário ao enviar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numeroLimpo = numeroCartao.value.replace(/\s/g, "");
  const validadeVal = validade.value;
  const cvvVal = cvv.value;

  if (numeroLimpo.length !== 16) {
    alert("O número do cartão deve conter 16 dígitos.");
    return;
  }

  if (!/^\d{2}\/\d{2}$/.test(validadeVal)) {
    alert("A validade deve estar no formato MM/AA.");
    return;
  }

  if (cvvVal.length !== 3) {
  alert("O CVV deve ter exatamente 3 dígitos.");
  return;
}

  alert("Pagamento realizado com sucesso!");
});
