const quizData = [ 
    {
        question: 'Qual a idade do Lukones?',
        a: '10',
        b: '17',
        c: '23',
        d: '27',
        correct: 'c'
    }, 
    { 
        question: 'Qual a linguagem de programação eu mais gosto?',
        a: 'Python',
        b: 'Java',
        c: 'JavaScript',
        d: 'HTML e CSS',
        correct: 'a'
    }, 
    {
        question: 'Qual é o lugar de impacto do asteroide que matou os Dino?',
        a: 'México',
        b: 'Chicxulub',
        c: 'Brasil',
        d: 'São Paulo',
        correct: 'b'
    }, 
    {
        question: 'Qual é o animal mais antigo do mundo vivo?',
        a: 'Tartaruga Gigante das Seychelles',
        b: 'Tartaruga marinha',
        c: 'Tubarão-cobra',
        d: 'Equidna',
        correct: 'a'
    },
    {
        question: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
        a: 'Tem entre 2 a 4 litros. São retirados 450 mililitros',
        b: 'Tem entre 4 a 6 litros. São retirados 450 mililitros',
        c: 'Tem 10 litros. São retirados 2 litros',
        d: 'Tem 7 litros. São retirados 1,5 litros',
        correct: 'b'
    },  
    {
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        a: 'Platão',
        b: 'Galileu Galilei',
        c: 'Descartes',
        d: 'Sócrates',
        correct: 'c'
    }, 
    {
        question: 'De onde é a invenção do chuveiro elétrico?',
        a: 'França',
        b: 'Inglaterra',
        c: 'Brasil',
        d: 'Austrália',
        correct: 'c'
    }, 
    {
        question: 'Quais o menor e o maior país do mundo?',
        a: 'Vaticano e Rússia',
        b: 'Nauru e China',
        c: 'Nauru e China',
        d: ' Malta e Estados Unidos',
        correct: 'a'
    },  
    {
        question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
        a: 'Jânio Quadros',
        b: 'Jacinto Anjos',
        c: 'Getúlio Vargas',
        d: 'João Goulart',
        correct: 'd'
    },  
    {
        question: 'Qual o grupo em que todas as palavras foram escritas corretamente?',
        a: 'Asterístico, beneficiente, meteorologia, entertido',
        b: 'Asterisco, beneficente, meteorologia, entretido',
        c: 'Asterisco, beneficente, metereologia, entretido',
        d: 'Asterístico, beneficiente, metereologia, entretido',
        correct: 'b'
    },  
    {
        question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
        a: 'O Senhor dos Anéis',
        b: 'Dom Quixote',
        c: 'O Pequeno Príncipe',
        d: 'Ela, a Feiticeira',
        correct: 'b'
    },  
    {
        question: 'Quantas casas decimais tem o número pi?',
        a: 'Duas',
        b: 'Centenas',
        c: 'Infinitas',
        d: 'Vinte',
        correct: 'c'
    },  
    {
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        a: '113',
        b: '109',
        c: '108',
        d: '118',
        correct: 'd'
    }
];

const questionEl = document.getElementById("question");
const b_text = document.getElementById("a_text");
const a_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('sub')

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData
    [currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("Você terminou! Você é TOP.")
    }

    loadQuiz();
})