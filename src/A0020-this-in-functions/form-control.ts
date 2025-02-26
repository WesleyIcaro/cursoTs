import { isEmail } from 'validator';

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

form.addEventListener('submit', (e: Event) => {
  // Cuidado com o this dentro de arrow function
  e.preventDefault();

  const target = e.target as HTMLFormElement;

  hideErrorMessages(target);

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
