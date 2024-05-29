const story = [
    "Que legalll! Muito obrigada❤️. Primeiro temos que ir ao supermercado...",
    "Vou pagar o dinheiro do meu cofrinho para podermos pagar.Somando tudo que iremos comprar, vamos gastar 28 dólares, e no meu cofrinho tem 273 dólares. ",
    "Agora vou passar no supermercado rapidinho, me espere aqui!",
    "Obrigada por me esperar😁",
    "Agora vamos começar a receita! Para nossa receita iremos precisa...",
    "125 g de manteiga sem sal em temperatura ambiente.",
    "1/2 xícara de açúcar mascavo.",
    "1 e 3/4 de xícara de farinha de trigo.",
    "300 g de chocolate meio amargo picado.",
    "para fazer cookie de chocolate.",
    "acrescentar 1/4 xicara de chocolate em pó.",
    "3/4 xícara de açúcar.",
    "1 ovo.",
    "1 colher (chá) de fermento em pó.",
    "1 colher (chá) de essência de baunilha.",
    "Você também precisará de alguns materiais,como uma assadeira, uma bandeja, uma espatula e uma tijela.",
    "Essa receita demora 40 minutinhos para ser feita.",
    "Primeiro temos que misturar a manteiga, açúcar mascavo, açúcar, essência de baunilha.",
    "Depois adicione o ovo batido aos poucos e misture bem.",
    "Acrescente a farinha dos poucos e misture bem (pode ser na mão ou na batedeira).",
    "Adicione o fermento e misture só para incorporá-lo à massa.",
    "Depois da massa bem misturada, adicione o chocolate picado.",
    "Forme bolinhas pequenas.",
    "Asse em forno preaquecido, sobre papel manteiga, por aproximadamente 15 a 20 minutos (250° C).",
    "Enquanto o nosso cookies estão no forno vamos fazer um jogo, vou colocar todos os ingredientes e utensílios que utilizamos. E vocês terão que adivinhar se é contável ou incontável.",
    "Espero que estejam pronto!!! Então vamos lá!"
];

const questions = [

    { text: "Quantos dólares ainda sobrarão no meu cofrinho?", answer: 245, type: "number" },
    { text: "25 g de manteiga é contável ou incontável?", answer: "incontável" },
    { text: "1/2 xícara de açúcar mascavo é contável ou incontável?", answer: "incontável" },
    { text: "1 e 3/4 de xícara de farinha de trigo é contável ou incontável?", answer: "incontável" },
    { text: "300 g de chocolate picado é contável ou incontável?", answer: "incontável" },
    { text: "3/4 xícara de açúcar é contável ou incontável?", answer: "incontável" },
    { text: "1 ovo é contável ou incontável?", answer: "contável" },
    { text: "1 colher (chá) de fermento em pó é contável ou incontável?", answer: "incontável" },
    { text: "1 colher (chá) de essência de baunilha é contável ou incontável?", answer: "incontável" },
    { text: "Uma assadeira é contável ou incontável?", answer: "contável" },
    { text: "Uma bandeja é contável ou incontável?", answer: "contável" },
    { text: "Uma espátula é contável ou incontável?", answer: "contável" },
    { text: "Uma tigela é contável ou incontável?", answer: "contável" }
];

let currentStoryIndex = 0;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function startStory(answer) {
    if (answer) {
        document.getElementById("start-yes-button").style.display = "none";
        document.getElementById("start-no-button").style.display = "none";
        document.getElementById("continue-button").style.display = "inline-block";
        showStory();
    } else {
        moveNoButton();
    }
}

function continueStory() {
    if (currentStoryIndex < story.length) {
        document.getElementById("story-text").textContent = story[currentStoryIndex];
        currentStoryIndex++;
    } else {
        document.getElementById("continue-button").style.display = "none";
        showQuestion();
    }
}

function showQuestion() {
    document.getElementById("story-box").style.display = "none";
    document.getElementById("question-box").style.display = "block";
    document.getElementById("question-text").textContent = questions[currentQuestionIndex].text;
    updateButtons();
}

function updateButtons() {
    const question = questions[currentQuestionIndex];
    if (question.type === "number") {
        document.getElementById("number-input").style.display = "inline-block";
        document.getElementById("submit-button").style.display = "inline-block";
        document.getElementById("yes-button").style.display = "none";
        document.getElementById("no-button").style.display = "none";
        document.getElementById("contavel-button").style.display = "none";
        document.getElementById("incontavel-button").style.display = "none";
    } else {
        document.getElementById("number-input").style.display = "none";
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("contavel-button").style.display = "inline-block";
        document.getElementById("incontavel-button").style.display = "inline-block";
    }
}

function answerQuestion(answer) {
    const question = questions[currentQuestionIndex];
    const correct = question.answer === answer;
    const button = document.querySelector(`[onclick="answerQuestion('${answer}')"]`);

    if (correct) {
        button.classList.add("correct");
        correctAnswers++;
    } else {
        button.classList.add("incorrect");
        incorrectAnswers++;
    }

    setTimeout(() => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function checkNumberAnswer() {
    const input = document.getElementById("number-input").value;
    const question = questions[currentQuestionIndex];
    const correct = question.answer === parseInt(input);
    const button = document.getElementById("submit-button");

    if (correct) {
        button.classList.add("correct");
        correctAnswers++;
    } else {
        button.classList.add("incorrect");
        incorrectAnswers++;
    }

    setTimeout(() => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    const questionBox = document.getElementById("question-box");
    questionBox.innerHTML = `<p id="question-text">Quiz finished! Correct: ${correctAnswers}, Incorrect: ${incorrectAnswers}</p>`;
    document.getElementById("buttons").style.display = "none";
}

function moveNoButton() {
    const noButton = document.getElementById("start-no-button");
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * 80 + 10}%`;
    noButton.style.left = `${Math.random() * 80 + 10}%`;
}
