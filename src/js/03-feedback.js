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
