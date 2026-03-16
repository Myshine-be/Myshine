const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const formFeedback = document.getElementById('formFeedback');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.style.display === 'block';
    mobileNav.style.display = isOpen ? 'none' : 'block';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function handleForm(event) {
  event.preventDefault();
  formFeedback.textContent = 'Formulier klaar. Voor echte automatische mails moeten we nog je mailkoppeling toevoegen.';
  return false;
}

window.handleForm = handleForm;
