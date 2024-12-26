// Define the array of quiz questions and answer options
const quizData = [
    { question: 'Which language runs in a web browser?', 
        a: 'Java', 
        b: 'C', 
        c: 'Python', 
        d: 'Javascript', 
        correct: 'd' 
    },

    { question: 'What does CSS stand for?',
         a: 'Central Style Sheets',
          b: 'Cascading Style Sheets',
           c: 'Cascading Simple Sheets', 
           d: 'Cars SUVs SailsBoats', 
           correct: 'b' 
        },
    { 
        question: 'What does HTML stand for?', 
        a: 'Hypertext markup Language',
         b: 'Hypertext Markdown Language',
          c: 'Hyperloop Machine Language',
           d: 'Helicopters Terminals Motorboats Lamborginis', 
           correct: 'a'
         
    },

    { 
        question: 'What year was JavaScript launched?',
         a: '1996',
          b: '1995',
           c: '1994',
            d: 'None of the above',
             correct: 'b' 
    },

    { 
        question: 'Which of the following developed the Python programming language?',
         a: 'Microsoft',
          b: 'Google',
           c: 'Guido van Rossum', 
           d: 'Apple', 
           correct: 'c' 
    },
    { 
        question: 'What is the full form of SQL?', 
        a: 'Structured Query Language',
         b: 'Simple Query Language',
          c: 'Standard Query Logic', 
          d: 'Structured Quick Language', 
          correct: 'a'
     },


    { 
        question: 'What does the acronym API stand for?', 
        a: 'Application Programming Interface',
         b: 'Application Processing Interface', 
         c: 'Advanced Programming Integration', 
         d: 'Automated Process Invocation', correct: 'a' 
    
    },

    { 
        question: 'Which HTML tag is used to define an internal style sheet?', 
        a: '<script>',
         b: '<style>', 
         c: '<css>', 
         d: '<design>', 
         correct: 'b'
        
    },
    
    { 
        question: 'Which of the following is a NoSQL database?', 
        a: 'MySQL',
         b: 'PostgreSQL',
          c: 'MongoDB',
           d: 'SQLite', 
           correct: 'c'
     },

    { 
        question: 'Which JavaScript method is used to write HTML output to the document?', 
        a: 'console.log()', 
        b: 'window.alert()', 
        c: 'document.write()',
         d: 'document.output()',
          correct: 'c'
     },

    { 
        question: 'What does the “C” in CPU stand for?', 
        a: 'Central', 
        b: 'Computer',
        c: 'Circuit',
        d: 'Control', 
        correct: 'a' 
    },


    { 
        question: 'Which programming language is primarily used for Android app development?', 
        a: 'Swift', 
        b: 'Java', 
        c: 'Kotlin', 
        d: 'Dart',
        correct: 'c' 
        
    },

    {
         question: 'Which CSS property is used to change the text color of an element?', 
         a: 'font-color',
         b: 'color',
         c: 'text-color', 
         d: 'foreground',
         correct: 'b' 
        },


    {
         question: 'What is the main purpose of a DNS?', 
         a: 'To manage IP addresses',
          b: 'To host websites',
           c: 'To translate domain names to IP addresses',
            d: 'To secure data transfer',
             correct: 'c'
             }
];

// Get references to the DOM elements needed to interact with the quiz
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Variables to keep track of the current quiz question and the user's score
let currentQuiz = 0;
let score = 0;

// Initialize the quiz with the first question
loadQuiz();

// Function to load the current question and options into the DOM
function loadQuiz() {
    deselectAnswers(); // Clear any previously selected answers
    const currentQuizData = quizData[currentQuiz]; // Get the current quiz question data
    questionEl.innerText = currentQuizData.question; // Set the question text
    a_text.innerText = currentQuizData.a; // Set option A text
    b_text.innerText = currentQuizData.b; // Set option B text
    c_text.innerText = currentQuizData.c; // Set option C text
    d_text.innerText = currentQuizData.d; // Set option D text
}

// Function to clear any selected answers (deselect radio buttons)
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Function to get the selected answer from the radio buttons
function getSelected() {
    let answer;
    // Loop through each radio button and check which one is selected
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id; // Store the ID of the selected radio button
        }
    });
    return answer; // Return the selected answer (id of the radio button)
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected(); // Get the selected answer

    // If an answer is selected, check if it's correct
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++; // Increment score if the answer is correct
        }
        currentQuiz++; // Move to the next question

        // If there are more questions, load the next one
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // If all questions are answered, show the final score
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
                <button onclick='location.reload()'>Reload</button>
            `;
        }
    }
});
