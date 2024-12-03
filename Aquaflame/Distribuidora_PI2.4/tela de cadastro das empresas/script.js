function botaoCadastrar() {
  window.location.href = "/login.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('companyForm');
  const cpfInput = document.getElementById('cpf');

  // Máscara para CPF
  cpfInput.addEventListener('input', () => {
    let cpf = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput.value = cpf;
  });

  // Enviar dados para a API
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
      name: form.name.value,
      email: form.email.value,
      cpf: form.cpf.value,
      phone: form.phone.value,
    };

    try {
      const response = await fetch('https://sua-api.com/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Empresa cadastrada com sucesso!');
        form.reset();
      } else {
        alert('Erro ao cadastrar empresa.');
      }
    } catch (error) {
      alert('Falha na comunicação com a API.');
    }
  });
});
