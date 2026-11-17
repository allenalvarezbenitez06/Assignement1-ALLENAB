
// LA H 513 SOCCER CLUB
// JavaScript Interactive Features

document.addEventListener("DOMContentLoaded", function() {

    // FEATURE 1: DARK MODE SWITCHER

    const themeToggle = document.querySelector("#themeToggle");

    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️ Light Mode";

        } else {

            themeToggle.textContent = "🌙 Dark Mode";

        }

    });


    // FEATURE 2: INTERACTIVE FAQ

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function(question) {

        question.addEventListener("click", function() {

            const faqItem = question.parentElement;

            // Open or close the answer
            faqItem.classList.toggle("active");

            // Update the accessibility information
            const isOpen = faqItem.classList.contains("active");

            question.setAttribute("aria-expanded", isOpen);

            // Change the arrow
            const arrow = question.querySelector(".faq-arrow");

            if (isOpen) {

                arrow.textContent = "▲";

            } else {

                arrow.textContent = "▼";

            }

        });

    });

});
