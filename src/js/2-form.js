const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    formData.email = typeof parsed.email === 'string' ? parsed.email : '';
    formData.message = typeof parsed.message === 'string' ? parsed.message : '';
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  emailEl.value = formData.email;
  messageEl.value = formData.message;
}

loadFromStorage();

formEl.addEventListener('input', event => {
  const { target } = event;

  if (target.name !== 'email' && target.name !== 'message') {
    return;
  }

  formData[target.name] = target.value.trim();
  saveToStorage();
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  formEl.reset();
});
