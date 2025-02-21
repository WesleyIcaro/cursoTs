console.log('opa');

const form = document.querySelector('.form') as HTMLFormElement;

const usuarioInput = document.querySelector('.username') as HTMLInputElement;

const spanElement = document.querySelector('.error-message') as HTMLSpanElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e.target);

  if (usuarioInput.value.length < 3 && usuarioInput.value.length >= 255) {
    console.log('Valor inválido');
    spanElement.classList.contains('error-message');
    usuarioInput.
  }

  // if (cpf.length !== 14) {
  //   formErrors = true;
  //   toast.error('CPF inválido');
  // }

  console.log('a');
});
