const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Zjistí, zda existuje otázka s třídou "active"
        const activeQuestion = document.querySelector(".question.active");
        
        // Pokud existuje, odeber třídu a skryj odpověď
        if (activeQuestion && activeQuestion !== question) {
            const activeAnswer = activeQuestion.nextElementSibling;
            activeQuestion.classList.remove("active");
            activeAnswer.classList.remove("active");

            // Změň ikonu plus zpět na původní
            const activeIcon = activeQuestion.querySelector(".ikona");
            activeIcon.src = "assets/images/icon-plus.svg";
        }

        // Toggle třídu "active" pro aktuální otázku a odpověď
        question.classList.toggle("active");
        answer.classList.toggle("active");

        // Změň ikonu plus na aktuální otázce
        const icon = question.querySelector(".ikona");
        icon.src = question.classList.contains("active") ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg";
    });
});
