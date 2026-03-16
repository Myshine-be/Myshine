
// MyShine automatic mail system (EmailJS)
// Just replace the three keys below with your own from https://dashboard.emailjs.com

const EMAILJS_PUBLIC_KEY = "PASTE_YOUR_PUBLIC_KEY_HERE";
const EMAILJS_SERVICE_ID = "PASTE_YOUR_SERVICE_ID_HERE";
const EMAILJS_TEMPLATE_ID = "PASTE_YOUR_TEMPLATE_ID_HERE";

// Initialize EmailJS
(function () {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const feedback = document.getElementById("formFeedback");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            form
        ).then(function () {

            if (feedback) {
                feedback.innerText = "Aanvraag verzonden. MyShine neemt snel contact met je op.";
            }

            form.reset();

        }, function (error) {

            if (feedback) {
                feedback.innerText = "Er ging iets mis. Probeer opnieuw.";
            }

            console.error("EmailJS error:", error);

        });

    });

});
