import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));


refs.form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  const formdata = JSON.parse(localStorage.getItem(STORAGE_KEY))
  console.log(formdata)
})


function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)



}

function onTextareaInput(event) {
  const message = event.target.value;
}

function populateVessageOutput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}




// console.log(localStorage)
// localStorage.setItem('date', JSON.stringify({ name: 'vita', age: 33 }))
// const savedData = localStorage.getItem('date')
// console.log("saveddata:", savedData)
// const parsedData = JSON.parse(savedData)
// console.log("parseddata:", parsedData)




