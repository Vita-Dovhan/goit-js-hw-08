import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector(".feedback-form")

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

function onSubmit(event) {
  event.preventDefault();
  const userEmail = event.currentTarget.elements.email.value.trim();
  const userMessage = event.currentTarget.elements.message.value.trim();
  const newUser = {
    email: userEmail,
    message: userMessage,
  }

  if (!userEmail || !userMessage) return alert('Усі поля обов`язкові для заповнення')

  console.log(newUser);
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY)
}
function onInput(event) {
  const userEmail = formEl.elements.email.value.trim();
  const userMessage = formEl.elements.message.value.trim();
  const newUser = {
    email: userEmail,
    message: userMessage,
  }
  newUser[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  console.log(formData)
}
function populateMessageOutput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage !== null) {
    try {
      formEl.email.value = JSON.parse(savedMessage).email;
      formEl.message.value = JSON.parse(savedMessage).message;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}
populateMessageOutput();
