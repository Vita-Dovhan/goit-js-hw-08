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






----------------------------css-----------------------------------------------------
  body.show - modal.backdrop {
  opacity: 1;
  visibility: visible;
  pointer - events: initial;
}
body.show - modal.modal {
  transform: scale(1);
}
.backdrop {
  display: flex;
  justify - content: center;
  align - items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background - color: rgba(0, 0, 0, 0.3);
  z - index: 999;

  pointer - events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms ease -in -out, visibillity 200ms ease -in -out;
}

.modal {
  padding: 24px;
  border - radius: 4px;
  max - width: 640px;
  width: 100 %;
  min - height: 320px;
  background - color: #ffffff;
  box - shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px - 1px rgba(0, 0, 0, 0.12);
  transform: scale(1.1);
  transition: transform 200ms ease -in -out;
}
.button {
  font - weight: 700;
  font - size: 16px;
  line - height: 1.87;
  letter - spacing: 0.06em;
  cursor: pointer;

  display: inline - block;
  min - width: 200px;
  height: 50px;
  padding: 10px 32px;
  text - align: center;
  background - color: royalblue;
  border: 1px solid transparent;
  border - radius: 4px;
}
------------------------------- html-------------------------------

    <button class="button" data-action="open-modal">Open modal</button>
    <div class="backdrop js-backdrop">
      <div class="modal">
        <h2>Modal window</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum dolorum quos saepe
          maiores ea commodi, facilis tempore laborum harum ipsum laboriosam necessitatibus omnis
          animi nemo assumenda. Quaerat, provident quisquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium cum dolorum quos saepe maiores ea commodi, facilis tempore
          laborum harum ipsum laboriosam necessitatibus omnis animi nemo assumenda. Quaerat,
        </p>
      </div>
    </div>

--------------------------- js-------------------------
      const refs = {
  openBtn: document.querySelector('[data-action="open-modal"]'),
  backdrop: document.querySelector('.js-backdrop')
}
refs.openBtn.addEventListener("click", onOpenModal)
refs.backdrop.addEventListener("click", onBackdrop)


function onOpenModal() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('show-modal')
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscPress)
  document.body.classList.remove('show-modal')
}
function onBackdrop(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}