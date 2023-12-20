// Events
document.querySelectorAll(".faq__question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
    const questionId = question.id;
    switch (questionId) {
      case "question1":
        const iconPlus1 = document.getElementById("icon-plus1");
        iconPlus1.classList.toggle("hidden");
        const iconMinus1 = document.getElementById("icon-minus1");
        iconMinus1.classList.toggle("hidden");
        break;
      case "question2":
        const iconPlus2 = document.getElementById("icon-plus2");
        iconPlus2.classList.toggle("hidden");
        const iconMinus2 = document.getElementById("icon-minus2");
        iconMinus2.classList.toggle("hidden");
        break;
      case "question3":
        const iconPlus3 = document.getElementById("icon-plus3");
        iconPlus3.classList.toggle("hidden");
        const iconMinus3 = document.getElementById("icon-minus3");
        iconMinus3.classList.toggle("hidden");
        break;
      case "question4":
        const iconPlus4 = document.getElementById("icon-plus4");
        iconPlus4.classList.toggle("hidden");
        const iconMinus4 = document.getElementById("icon-minus4");
        iconMinus4.classList.toggle("hidden");
        break;
      default:
        break;
    }
  });
});
