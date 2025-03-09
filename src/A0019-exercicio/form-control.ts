import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;

const usuarioInput = document.querySelector('.username') as HTMLInputElement;

const emailInput = document.querySelector('.email') as HTMLInputElement;

const senhaInput = document.querySelector('.password') as HTMLInputElement;

const verifySenhaInput = document.querySelector(
  '.password2',
) as HTMLInputElement;

type verifyUserFn = (
  username: string,
  email: string,
  senha: string,
  verifySenha: string,
) => boolean;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  hideErrorMessages(this);
  // checkForEmptyFields(usuarioInput, emailInput, senhaInput, verifySenhaInput);
  // checkEmail(emailInput);
  // checkEqualsPasswords(senhaInput, verifySenhaInput);
  // if (shoudSendForm(this)) console.log('Formulário enviado');

  if (
    !verifyUser(
      usuarioInput.value,
      emailInput.value,
      senhaInput.value,
      verifySenhaInput.value,
    )
  )
    return;

  console.log('Formulário enviado');

  // form.submit();
});

// function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
//   inputs.forEach((input) => {
//     if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
//   });
// }

// function checkEmail(input: HTMLInputElement): void {
//   if (!isEmail(input.value)) {
//     showErrorMessage(input, 'Email inválido');
//   }
// }

// function checkEqualsPasswords(
//   senha: HTMLInputElement,
//   verifySenha: HTMLInputElement,
// ): void {
//   if (senha.value !== verifySenha.value) {
//     showErrorMessage(verifySenha, 'Senha não confere');
//   }
// }

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

// function shoudSendForm(form: HTMLFormElement): boolean {
//   let send = true;
//   form
//     .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
//     .forEach(() => (send = false));
//   return send;
// }

const verifyUser: verifyUserFn = (username, email, senha, verifySenha) => {
  let validation = true;

  if (username.length < 3 || username.length > 255) {
    showErrorMessage(
      usuarioInput,
      'O Campo nome deve ter entre 3 e 255 caracteres',
    );
    validation = false;
  }

  if (!isEmail(email)) {
    showErrorMessage(emailInput, 'Email inválido');
    validation = false;
  }

  if (senha.length < 6) {
    showErrorMessage(senhaInput, 'Senha deve ter no mínimo 6 caracteres');
    showErrorMessage(verifySenhaInput, 'Senha deve ter no mínimo 6 caracteres');
    validation = false;
  }

  if (senha !== verifySenha) {
    showErrorMessage(senhaInput, 'Senhas não conferem');
    showErrorMessage(verifySenhaInput, 'Senhas não conferem');
    validation = false;
  }
  return validation;
};

// console.log('Exercício 1');
