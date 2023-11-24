import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form.feedback-form'),
  input: document.querySelector("input[name='email']"),
  textarea: document.querySelector("textarea[name='message']"),
};

const formInputValues = {
  email: '',
  message: '',
};

setValueToInput();

refs.form.addEventListener('input', throttle(onInputChangesSaveValue, 500));
refs.form.addEventListener('submit', onSubmit);

function onInputChangesSaveValue(event) {
  // console.log(formInputValues);

  if (event.target.nodeName === refs.input.nodeName) {
    formInputValues.email = event.target.value;
  } else {
    formInputValues.message = event.target.value;
  }

  // console.log(formInputValues);
  saveValueToLocalStorage();
  // console.log(saveValueToLocalStorage(formInputValues));
}

function saveValueToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formInputValues));

  // return localStorage.getItem("feedback-form-state");
}

function onSubmit(event) {
  event.preventDefault();

  console.log(formInputValues);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function setValueToInput() {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  }

  const tempValues = JSON.parse(localStorage.getItem('feedback-form-state'));

  refs.input.value = tempValues.email;
  formInputValues.email = tempValues.email;
  refs.textarea.value = tempValues.message;
  formInputValues.message = tempValues.message;
}
