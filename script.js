const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const bookingDate = document.getElementById('bookingDate');
const feedback = document.getElementById('formFeedback');

function detectDevice() {
  const ua = navigator.userAgent.toLowerCase();
  const isMobileUA = /android|iphone|ipad|ipod|mobile|windows phone/.test(ua);
  const isSmallViewport = window.innerWidth <= 820;
  document.body.classList.remove('device-mobile', 'device-desktop');
  document.body.classList.add((isMobileUA || isSmallViewport) ? 'device-mobile' : 'device-desktop');
}

detectDevice();
window.addEventListener('resize', detectDevice);

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.style.display === 'block';
    mobileNav.style.display = isOpen ? 'none' : 'block';
    document.body.classList.toggle('menu-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function isAllowedDay(dateString) {
  const date = new Date(dateString + 'T12:00:00');
  const day = date.getDay();
  return day === 0 || day === 1; // zondag of maandag
}

if (bookingDate) {
  bookingDate.addEventListener('change', () => {
    if (bookingDate.value && !isAllowedDay(bookingDate.value)) {
      feedback.textContent = 'Kies een zondag of maandag.';
      bookingDate.value = '';
    } else {
      feedback.textContent = '';
    }
  });
}

function handleBooking(event) {
  event.preventDefault();

  if (!bookingDate.value) {
    feedback.textContent = 'Kies een datum.';
    return false;
  }

  if (!isAllowedDay(bookingDate.value)) {
    feedback.textContent = 'Boekingen zijn alleen mogelijk op zondag of maandag.';
    return false;
  }

  feedback.textContent = 'Formulier klaar. Voor echte automatische mails moet je nog EmailJS of Formspree koppelen.';
  return false;
}

window.handleBooking = handleBooking;
