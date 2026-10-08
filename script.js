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
  overlayWrap.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
  comparisonLine.style.left = value + '%';
  comparisonHandle.style.left = value + '%';
}

if (comparisonRange) {
  updateComparison(comparisonRange.value);
  comparisonRange.addEventListener('input', (e) => updateComparison(e.target.value));
}

// "Kies"-knoppen: behandeling vooraf invullen in het formulier
const serviceSelect = document.getElementById('serviceSelect');
const headlightSelect = document.getElementById('headlightSelect');

document.querySelectorAll('[data-service]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!serviceSelect) return;
    serviceSelect.value = btn.dataset.service;
    if (btn.dataset.service === 'Enkel koplampen herstel' && headlightSelect && !headlightSelect.value) {
      headlightSelect.selectedIndex = 2; // beide koplampen
    }
  });
});

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
      // Mark the date input as invalid and show feedback.
      bookingDate.classList.add('invalid-date');
      bookingDate.classList.remove('valid-date');
      feedback.innerText = "Kies een zondag of maandag.";
    } else {
      // Mark the date input as valid and clear feedback.
      bookingDate.classList.remove('invalid-date');
      bookingDate.classList.add('valid-date');
      feedback.innerText = "";
    }
  });
}

// EmailJS
(function () {
  if (window.emailjs) emailjs.init(EMAILJS_PUBLIC_KEY);
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

    if (form.elements['behandeling']?.value === 'Enkel koplampen herstel' && !form.elements['koplampen']?.value) {
      feedback.innerText = "Kies 1 koplamp of beide koplampen.";
      return;
    }

    // Build a templateParams object that maps the form fields
    // to the variable names defined in the EmailJS template.
    const service = form.elements['behandeling']?.value || '';
    const customerName = form.elements['naam']?.value || '';
    const customerEmail = form.elements['email']?.value || '';
    const customerPhone = form.elements['telefoon']?.value || '';
    // The date input is named 'datum'.
    const dateValue = form.elements['datum']?.value || '';
    // There are currently no time or extras fields in the form,
    // so leave these empty. EmailJS will receive empty strings for these.
    const bookingTime = '';
    // Extras: koplampen herstel en/of glas polijsten
    const extras = [
      form.elements['koplampen']?.value || '',
      form.elements['glaspolijsten']?.checked ? form.elements['glaspolijsten'].value : ''
    ].filter(Boolean).join(', ');
    const merkVal = form.elements['merk']?.value || '';
    const modelVal = form.elements['model']?.value || '';
    const kleurVal = form.elements['kleur']?.value || '';
    const jaarVal = form.elements['bouwjaar']?.value || '';
    const comments = form.elements['bericht']?.value || '';
    const quoteCar = `${merkVal} ${modelVal}`.trim();

    const templateParams = {
      // These keys must match the variables in your EmailJS template.
      request_type: 'Offerte',
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      package: service,
      booking_date: dateValue,
      booking_time: bookingTime,
      extras: extras,
      car_make: merkVal,
      car_model: modelVal,
      car_color: kleurVal,
      car_year: jaarVal,
      comments: comments,
      quote_car: quoteCar,
      quote_services: service,
      quote_message: comments
    };

    if (!window.emailjs) {
      feedback.innerText = "Verzenden is momenteel niet beschikbaar. Mail naar myshine.carpolishing@hotmail.com.";
      return;
    }
    const submitButton = form.querySelector("button[type=submit]");
    submitButton.disabled = true;
    submitButton.textContent = "Aanvraag verzenden…";
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    ).then(function () {
      feedback.innerText = "Aanvraag verzonden. MyShine neemt snel contact met je op.";
      form.reset();
      // Reset the slider to the default midpoint after successful submission
      if (comparisonRange) { comparisonRange.value = 50; updateComparison(50); }
      bookingDate.classList.remove("invalid-date", "valid-date");
    }).catch(function (error) {
      feedback.innerText = "Fout bij verzenden. Probeer opnieuw.";
      console.error("EmailJS error:", error);
    }).finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Verstuur aanvraag";
    });
  });
});
