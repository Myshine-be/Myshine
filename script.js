const EMAILJS_PUBLIC_KEY = "u0KzLNT7749wf-gue";
const EMAILJS_SERVICE_ID = "service_muilh95";
const EMAILJS_TEMPLATE_ID = "template_8igu34c";

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

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

// Before / After slider
const comparisonRange = document.getElementById('comparisonRange');
const overlayWrap = document.getElementById('overlayWrap');
const comparisonLine = document.getElementById('comparisonLine');
const comparisonHandle = document.getElementById('comparisonHandle');

function updateComparison(value) {
  if (!overlayWrap || !comparisonLine || !comparisonHandle) return;
  overlayWrap.style.width = value + '%';
  comparisonLine.style.left = value + '%';
  comparisonHandle.style.left = value + '%';
}

if (comparisonRange) {
  updateComparison(comparisonRange.value);
  comparisonRange.addEventListener('input', (e) => updateComparison(e.target.value));
}

// Booking date restriction: Sunday or Monday only
const bookingDate = document.getElementById("bookingDate");
const feedback = document.getElementById("formFeedback");

function isAllowedBookingDay(dateString) {
  const date = new Date(dateString + "T12:00:00");
  const day = date.getDay();
  return day === 0 || day === 1;
}

if (bookingDate) {
  bookingDate.addEventListener("change", function () {
    if (bookingDate.value && !isAllowedBookingDay(bookingDate.value)) {
      feedback.innerText = "Kies een zondag of maandag.";
      bookingDate.value = "";
    } else {
      feedback.innerText = "";
    }
  });
}

// EmailJS
(function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!bookingDate.value) {
      feedback.innerText = "Kies een gewenste datum.";
      return;
    }

    if (!isAllowedBookingDay(bookingDate.value)) {
      feedback.innerText = "Boekingen zijn alleen mogelijk op zondag en maandag.";
      return;
    }

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form
    ).then(function () {
      feedback.innerText = "Aanvraag verzonden. MyShine neemt snel contact met je op.";
      form.reset();
      if (comparisonRange) updateComparison(50);
    }).catch(function (error) {
      feedback.innerText = "Fout bij verzenden. Probeer opnieuw.";
      console.error("EmailJS error:", error);
    });
  });
});
