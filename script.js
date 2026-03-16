/*
 * Myshine website logic: translations, booking wizard, and EmailJS submission.
 */

const EMAILJS_PUBLIC_KEY = "u0KzLNT7749wf-gue";
const EMAILJS_SERVICE_ID = "service_muilh95";
const EMAILJS_TEMPLATE_ID = "template_8igu34c";

const translations = {
    nl: {
        nav_home: 'Home',
        nav_services: 'Services',
        nav_pricing: 'Tarieven',
        nav_booking: 'Boeken',
        nav_quote: 'Offerte',

        hero_heading: 'Professioneel auto polijsten',
        hero_subtitle: 'Laat je auto weer stralen met Myshine',
        hero_cta: 'Boek een afspraak',

        services_title: 'Onze polijstbeurten',
        service1_title: '1-staps polijsten',
        service1_feature1: 'Lichte lakdefecten verwijderd',
        service1_feature2: 'Een enkele polijstfase voor glans',
        service1_feature3: 'Keramische coating (±2 jaar)',
        service2_title: '2-staps polijsten',
        service2_feature1: 'Grovere correctie + verfijnen',
        service2_feature2: 'Verwijdert matige krassen en hologrammen',
        service2_feature3: 'Keramische coating (±2 jaar)',
        service3_title: '3-staps polijsten',
        service3_feature1: 'Intensieve cut, polish en finish',
        service3_feature2: 'Maximale glans en defectherstel',
        service3_feature3: 'Keramische coating (±2 jaar)',

        service4_title: 'Glas polijsten',
        service4_feature1: 'Verwijdert fijne krassen op autoruiten',
        service4_feature2: 'Herstelt helderheid en zicht',
        service4_price: '€10 / ruit\n€25 / voor-/achterruit',
        service5_title: 'Spotrepair',
        service5_feature1: 'Lokaal herstel van krassen of schade',
        service5_feature2: 'Alleen het aangetaste paneel wordt aangepakt',
        service5_price: 'Prijs op aanvraag',

        benefits_title: 'Waarom kiezen voor Myshine?',
        benefit1_title: 'Vakkundige specialisten',
        benefit1_desc: 'Ons team bestaat uit ervaren detailers die jouw auto behandelen alsof het hun eigen voertuig is.',
        benefit2_title: 'Duurzame bescherming',
        benefit2_desc: 'Wij gebruiken professionele SiO₂-gebaseerde coatings die 1–2 jaar bescherming bieden tegen vuil en UV.',
        benefit3_title: 'Persoonlijke aanpak',
        benefit3_desc: 'We stemmen onze diensten af op de staat van jouw auto en jouw wensen voor een perfect resultaat.',

        pricing_title: 'Tarieven',
        pricing_package: 'Pakket',
        pricing_includes: 'Inclusief',
        pricing_price: 'Prijs',
        pricing1_name: '1-staps polijsten',
        pricing1_desc: 'Enkel polijstfase, lichte correctie, keramische coating ±2 jaar',
        pricing2_name: '2-staps polijsten',
        pricing2_desc: 'Cut & polish, verwijdert matige krassen, keramische coating ±2 jaar',
        pricing3_name: '3-staps polijsten',
        pricing3_desc: 'Cut, polish & finish, maximale defectcorrectie, keramische coating ±2 jaar',
        pricing_note: '* Alle prijzen zijn inclusief keramische coating met een verwachte levensduur van 1–2 jaar.',

        cta_title: 'Klaar voor glans?',
        cta_desc: 'Plan nu jouw polijstbeurt en ervaar het verschil.',
        cta_button: 'Maak een afspraak',

        booking_title: 'Boek jouw polijstbeurt',
        step1_title: 'Stap 1: Kies je pakket',
        step1_option1_title: '1-stap',
        step1_option2_title: '2-staps',
        step1_option3_title: '3-staps',
        step2_title: 'Stap 2: Kies datum en tijd',
        date_label: 'Datum',
        time_label: 'Tijd',
        step3_title: 'Stap 3: Jouw gegevens',
        name_label: 'Naam',
        email_label: 'E-mail',
        phone_label: 'Telefoon',
        car_make_label: 'Merk',
        car_model_label: 'Model',
        car_color_label: 'Kleur',
        car_year_label: 'Bouwjaar',
        comments_label: 'Opmerkingen',
        step4_title: 'Bedankt voor je boeking!',
        submit_label: 'Bevestig',
        step_next: 'Volgende',
        step_prev: 'Vorige',
        confirmation_message: 'Dank je wel, <span id="summary-name"></span>! We hebben je aanvraag ontvangen voor het <span id="summary-package"></span>-staps pakket op <span id="summary-date"></span> om <span id="summary-time"></span>. We nemen zo snel mogelijk contact met je op om de afspraak te bevestigen.',
        return_home: 'Terug naar start',

        extras_title: 'Extra’s (optioneel)',
        extra_glass_label: 'Glas polijsten',
        extra_glass_price: '€10 / ruit, €25 voor-/achterruit',
        extra_spot_label: 'Spotrepair',
        extra_spot_price: 'Prijs op aanvraag',
        summary_extras_label: 'Extra’s:',
        summary_car_make_label: 'Merk:',
        summary_car_model_label: 'Model:',
        summary_car_color_label: 'Kleur:',
        summary_car_year_label: 'Bouwjaar:',
        summary_comments_label: 'Opmerkingen:',
        invalid_day_message: 'Je kunt alleen een afspraak maken op zondag of maandag.',
        invalid_car_details_message: 'Vul automerk, model, kleur en bouwjaar in.',

        quote_title: 'Vraag een offerte aan',
        quote_desc: 'Laat je gegevens en wensen achter, dan nemen we contact met je op met een vrijblijvende offerte.',
        quote_name_label: 'Naam',
        quote_email_label: 'E-mail',
        quote_phone_label: 'Telefoon',
        quote_car_label: 'Automodel',
        quote_service_label: 'Gewenste service',
        quote_option1: '1-stap polijsten',
        quote_option2: '2-staps polijsten',
        quote_option3: '3-staps polijsten',
        quote_option4: 'Glas polijsten',
        quote_option5: 'Spotrepair',
        quote_message_label: 'Opmerkingen / details',
        quote_submit: 'Verzend aanvraag',

        extras_none: 'Geen',
        booking_sent_message: 'Je boeking is verzonden! We nemen snel contact met je op.',
        booking_error_message: 'Er is een fout opgetreden bij het versturen. Probeer het later opnieuw.',
        quote_sent_message: 'Je offerteaanvraag is verzonden! We nemen snel contact met je op.',
        quote_error_message: 'Er is een fout opgetreden bij het versturen van de offerteaanvraag.'
    },
    fr: {
        nav_home: 'Accueil',
        nav_services: 'Services',
        nav_pricing: 'Tarifs',
        nav_booking: 'Réserver',
        nav_quote: 'Devis',

        hero_heading: 'Polissage professionnel de voiture',
        hero_subtitle: 'Faites briller votre voiture à nouveau avec Myshine',
        hero_cta: 'Réservez un rendez-vous',

        services_title: 'Nos prestations de polissage',
        service1_title: 'Polissage en 1 étape',
        service1_feature1: 'Élimination des légers défauts de peinture',
        service1_feature2: 'Une seule phase de polissage pour la brillance',
        service1_feature3: 'Revêtement céramique (~2 ans)',
        service2_title: 'Polissage en 2 étapes',
        service2_feature1: 'Correction grossière et finition',
        service2_feature2: 'Élimine les rayures modérées et hologrammes',
        service2_feature3: 'Revêtement céramique (~2 ans)',
        service3_title: 'Polissage en 3 étapes',
        service3_feature1: 'Correction intensive (cut, polish & finish)',
        service3_feature2: 'Brillance maximale et restauration des défauts',
        service3_feature3: 'Revêtement céramique (~2 ans)',

        service4_title: 'Polissage de vitres',
        service4_feature1: 'Élimine les fines rayures sur les vitres de voiture',
        service4_feature2: 'Restaure la clarté et la visibilité',
        service4_price: '10€ / vitre\n25€ / pare-brise ou lunette arrière',
        service5_title: 'Réparation localisée',
        service5_feature1: 'Réparation localisée de rayures ou dommages',
        service5_feature2: 'Seul le panneau endommagé est traité',
        service5_price: 'Prix sur demande',

        benefits_title: 'Pourquoi choisir Myshine ?',
        benefit1_title: 'Spécialistes expérimentés',
        benefit1_desc: 'Notre équipe est composée de detailers expérimentés qui traitent votre voiture comme la leur.',
        benefit2_title: 'Protection durable',
        benefit2_desc: 'Nous utilisons des revêtements à base de SiO₂ offrant 1–2 ans de protection contre la saleté et les UV.',
        benefit3_title: 'Approche personnalisée',
        benefit3_desc: 'Nous adaptons nos services à l’état de votre voiture et à vos souhaits pour un résultat parfait.',

        pricing_title: 'Tarifs',
        pricing_package: 'Forfait',
        pricing_includes: 'Comprend',
        pricing_price: 'Prix',
        pricing1_name: 'Polissage en 1 étape',
        pricing1_desc: 'Phase de polissage unique, correction légère, revêtement céramique ~2 ans',
        pricing2_name: 'Polissage en 2 étapes',
        pricing2_desc: 'Cut & polish, élimine les rayures modérées, revêtement céramique ~2 ans',
        pricing3_name: 'Polissage en 3 étapes',
        pricing3_desc: 'Cut, polish & finish, correction maximale des défauts, revêtement céramique ~2 ans',
        pricing_note: '* Tous les prix incluent un revêtement céramique avec une durée de vie de 1–2 ans.',

        cta_title: 'Prêt à briller ?',
        cta_desc: 'Planifiez votre séance de polissage et ressentez la différence.',
        cta_button: 'Prendre rendez-vous',

        booking_title: 'Réservez votre séance de polissage',
        step1_title: 'Étape 1 : Choisissez votre forfait',
        step1_option1_title: '1 étape',
        step1_option2_title: '2 étapes',
        step1_option3_title: '3 étapes',
        step2_title: 'Étape 2 : Choisissez la date et l’heure',
        date_label: 'Date',
        time_label: 'Heure',
        step3_title: 'Étape 3 : Vos coordonnées',
        name_label: 'Nom',
        email_label: 'E-mail',
        phone_label: 'Téléphone',
        car_make_label: 'Marque',
        car_model_label: 'Modèle',
        car_color_label: 'Couleur',
        car_year_label: 'Année',
        comments_label: 'Commentaires',
        step4_title: 'Merci pour votre réservation !',
        submit_label: 'Confirmer',
        step_next: 'Suivant',
        step_prev: 'Précédent',
        confirmation_message: 'Merci, <span id="summary-name"></span> ! Nous avons reçu votre demande pour le forfait <span id="summary-package"></span> étape(s) le <span id="summary-date"></span> à <span id="summary-time"></span>. Nous vous contacterons pour confirmer le rendez-vous.',
        return_home: 'Retour à l’accueil',

        extras_title: 'Extras (en option)',
        extra_glass_label: 'Polissage des vitres',
        extra_glass_price: '10€ / vitre, 25€ pour pare-brise ou lunette arrière',
        extra_spot_label: 'Réparation localisée',
        extra_spot_price: 'Prix sur demande',
        summary_extras_label: 'Extras :',
        summary_car_make_label: 'Marque :',
        summary_car_model_label: 'Modèle :',
        summary_car_color_label: 'Couleur :',
        summary_car_year_label: 'Année :',
        summary_comments_label: 'Commentaires :',
        invalid_day_message: 'Vous ne pouvez réserver que le dimanche ou le lundi.',
        invalid_car_details_message: 'Veuillez saisir la marque, le modèle, la couleur et l’année de la voiture.',

        quote_title: 'Demande de devis',
        quote_desc: 'Laissez vos coordonnées et vos souhaits, nous vous contacterons avec un devis sans engagement.',
        quote_name_label: 'Nom',
        quote_email_label: 'E-mail',
        quote_phone_label: 'Téléphone',
        quote_car_label: 'Modèle de voiture',
        quote_service_label: 'Service souhaité',
        quote_option1: 'Polissage en 1 étape',
        quote_option2: 'Polissage en 2 étapes',
        quote_option3: 'Polissage en 3 étapes',
        quote_option4: 'Polissage des vitres',
        quote_option5: 'Réparation localisée',
        quote_message_label: 'Commentaires / détails',
        quote_submit: 'Envoyer la demande',

        extras_none: 'Aucun',
        booking_sent_message: 'Votre réservation a été envoyée ! Nous vous contacterons bientôt.',
        booking_error_message: 'Une erreur s’est produite lors de l’envoi. Veuillez réessayer plus tard.',
        quote_sent_message: 'Votre demande de devis a été envoyée ! Nous vous contacterons bientôt.',
        quote_error_message: 'Une erreur est survenue lors de l’envoi de la demande de devis.'
    }
};

let currentLang = 'nl';

function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.id.replace('lang-', '');
        btn.classList.toggle('active', btnLang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            if (key === 'confirmation_message') {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('myshine-lang');
    if (savedLang && (savedLang === 'nl' || savedLang === 'fr')) {
        currentLang = savedLang;
    }

    setLanguage(currentLang);
    initEmailJS();

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id.replace('lang-', '');
            localStorage.setItem('myshine-lang', lang);
            setLanguage(lang);
        });
    });

    initBookingWizard();
    initQuoteForm();
});

function initBookingWizard() {
    const stepper = document.getElementById('stepper');
    if (!stepper) return;

    const steps = stepper.querySelectorAll('.step');
    let currentStepIndex = 0;

    showStep(currentStepIndex);

    stepper.querySelectorAll('.next').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!validateStep(currentStepIndex)) return;
            currentStepIndex = Math.min(currentStepIndex + 1, steps.length - 1);
            showStep(currentStepIndex);
        });
    });

    stepper.querySelectorAll('.prev').forEach(btn => {
        btn.addEventListener('click', () => {
            currentStepIndex = Math.max(currentStepIndex - 1, 0);
            showStep(currentStepIndex);
        });
    });

    const submitBtn = stepper.querySelector('.submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', async () => {
            if (!validateStep(currentStepIndex)) return;

            const selectedPackage = stepper.querySelector('input[name="package"]:checked');
            const packageValue = selectedPackage ? selectedPackage.value : '';
            const dateVal = document.getElementById('date')?.value || '';
            const timeVal = document.getElementById('time')?.value || '';
            const nameVal = document.getElementById('name')?.value || '';

            const extras = [];
            const extraGlass = document.getElementById('extra-glass');
            const extraSpot = document.getElementById('extra-spot');
            if (extraGlass && extraGlass.checked) extras.push(translations[currentLang].extra_glass_label);
            if (extraSpot && extraSpot.checked) extras.push(translations[currentLang].extra_spot_label);
            const extrasText = extras.length ? extras.join(', ') : translations[currentLang].extras_none;

            const carMakeVal = document.getElementById('carMake')?.value || '';
            const carModelVal = document.getElementById('carModel')?.value || '';
            const carColorVal = document.getElementById('carColor')?.value || '';
            const carYearVal = document.getElementById('carYear')?.value || '';
            const commentsVal = document.getElementById('comments')?.value || '';
            const commentsText = commentsVal.trim() !== '' ? commentsVal : translations[currentLang].extras_none;

            document.getElementById('summary-name').textContent = nameVal;
            document.getElementById('summary-package').textContent = packageValue;
            document.getElementById('summary-date').textContent = dateVal;
            document.getElementById('summary-time').textContent = timeVal;
            const se = document.getElementById('summary-extras'); if (se) se.textContent = extrasText;
            const scm = document.getElementById('summary-car-make'); if (scm) scm.textContent = carMakeVal;
            const scmo = document.getElementById('summary-car-model'); if (scmo) scmo.textContent = carModelVal;
            const scc = document.getElementById('summary-car-color'); if (scc) scc.textContent = carColorVal;
            const scy = document.getElementById('summary-car-year'); if (scy) scy.textContent = carYearVal;
            const scom = document.getElementById('summary-comments'); if (scom) scom.textContent = commentsText;

            const ok = await sendBooking();
            if (ok) {
                currentStepIndex = Math.min(currentStepIndex + 1, steps.length - 1);
                showStep(currentStepIndex);
            }
        });
    }

    function showStep(index) {
        steps.forEach((step, i) => {
            step.style.display = i === index ? '' : 'none';
        });
    }

    function validateStep(stepIndex) {
        if (stepIndex === 0) {
            const selected = stepper.querySelector('input[name="package"]:checked');
            if (!selected) {
                alert(currentLang === 'nl' ? 'Kies eerst een pakket.' : 'Veuillez choisir un forfait.');
                return false;
            }
        }

        if (stepIndex === 1) {
            const dateInput = document.getElementById('date').value;
            const timeInput = document.getElementById('time').value;
            if (!dateInput || !timeInput) {
                alert(currentLang === 'nl' ? 'Vul datum en tijd in.' : 'Veuillez saisir la date et l’heure.');
                return false;
            }
            const [y, m, d] = dateInput.split('-').map(n => parseInt(n, 10));
            const day = new Date(y, m - 1, d).getDay();
            if (day !== 0 && day !== 1) {
                alert(translations[currentLang].invalid_day_message);
                return false;
            }
        }

        if (stepIndex === 2) {
            const nameVal = document.getElementById('name').value;
            const emailVal = document.getElementById('email').value;
            const carMakeVal = document.getElementById('carMake').value;
            const carModelVal = document.getElementById('carModel').value;
            const carColorVal = document.getElementById('carColor').value;
            const carYearVal = document.getElementById('carYear').value;

            if (!nameVal || !emailVal) {
                alert(currentLang === 'nl' ? 'Vul naam en e-mail in.' : 'Veuillez saisir votre nom et votre e-mail.');
                return false;
            }
            if (!carMakeVal || !carModelVal || !carColorVal || !carYearVal) {
                alert(translations[currentLang].invalid_car_details_message);
                return false;
            }
        }

        return true;
    }
}

async function sendBooking() {
    try {
        const pkg = document.querySelector('input[name="package"]:checked');
        const dateVal = document.getElementById('date')?.value || '';
        const timeVal = document.getElementById('time')?.value || '';
        const nameVal = document.getElementById('name')?.value || '';
        const emailVal = document.getElementById('email')?.value || '';
        const phoneVal = document.getElementById('phone')?.value || '';
        const carMakeVal = document.getElementById('carMake')?.value || '';
        const carModelVal = document.getElementById('carModel')?.value || '';
        const carColorVal = document.getElementById('carColor')?.value || '';
        const carYearVal = document.getElementById('carYear')?.value || '';
        const commentsVal = document.getElementById('comments')?.value || '';

        const extras = [];
        const extraGlass = document.getElementById('extra-glass');
        const extraSpot = document.getElementById('extra-spot');
        if (extraGlass && extraGlass.checked) extras.push(translations[currentLang].extra_glass_label);
        if (extraSpot && extraSpot.checked) extras.push(translations[currentLang].extra_spot_label);

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: 'mamo2001@live.be',
            reply_to: emailVal,
            customer_name: nameVal,
            customer_email: emailVal,
            customer_phone: phoneVal,
            package: pkg ? `${pkg.value}-staps` : '',
            booking_date: dateVal,
            booking_time: timeVal,
            extras: extras.length ? extras.join(', ') : translations[currentLang].extras_none,
            car_make: carMakeVal,
            car_model: carModelVal,
            car_color: carColorVal,
            car_year: carYearVal,
            comments: commentsVal || translations[currentLang].extras_none,
            quote_car: '',
            quote_services: '',
            quote_message: ''
        });

        alert(translations[currentLang].booking_sent_message);
        return true;
    } catch (error) {
        console.error('EmailJS booking error:', error);
        alert(translations[currentLang].booking_error_message);
        return false;
    }
}

function initQuoteForm() {
    const quoteForm = document.getElementById('quote-form');
    if (!quoteForm) return;

    quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await sendQuote();
    });
}

async function sendQuote() {
    try {
        const nameVal = document.getElementById('quote-name')?.value || '';
        const emailVal = document.getElementById('quote-email')?.value || '';
        const phoneVal = document.getElementById('quote-phone')?.value || '';
        const carVal = document.getElementById('quote-car')?.value || '';
        const messageVal = document.getElementById('quote-message')?.value || '';

        const selectedServices = Array.from(document.querySelectorAll('.quote-form input[name="services"]:checked')).map(input => input.value);

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            to_email: 'mamo2001@live.be',
            reply_to: emailVal,
            customer_name: nameVal,
            customer_email: emailVal,
            customer_phone: phoneVal,
            package: '',
            booking_date: '',
            booking_time: '',
            extras: '',
            car_make: '',
            car_model: '',
            car_color: '',
            car_year: '',
            comments: '',
            quote_car: carVal || translations[currentLang].extras_none,
            quote_services: selectedServices.length ? selectedServices.join(', ') : translations[currentLang].extras_none,
            quote_message: messageVal || translations[currentLang].extras_none
        });

        alert(translations[currentLang].quote_sent_message);
        const quoteForm = document.getElementById('quote-form');
        if (quoteForm) quoteForm.reset();
    } catch (error) {
        console.error('EmailJS quote error:', error);
        alert(translations[currentLang].quote_error_message);
    }
}
