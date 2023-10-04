// ---------------------------------------pop up quiz
const questionsAndAnswers = [
    {question: `<p>A common task that can be automated is the generation of documents. Any document can be created using a` +
    ` template and passing it data from a database (ie. 'customer name','customer address','work done description'). Examples` +
    ` of where you might make use of this:</p> <ul><li>Invoices</li><li>Employee contracts</li><li>Purchase orders</li></ul>` +
    ` <p>Which of these statments describes your company best?</p>`, 
    answer:["We use this strategy (or similar) often", "We use this strategy (or similar) a little", "We never use this strategy","I'm not sure"] ,
    score: [2, 1, 0, 0],
    resource: ""},
    {question: `<p>Another task that can be automated is sending emails. In the same way documents can be created, emails can`+
    ` be put together automatically. Your newly generated documents can be attached and sent at a time of your choosing.` +
    ` Examples:</p> <ul><li>Payment reminders</li><li>Appointment reminder</li><li>Invoicing customer</li></li></ul> <p>Which of`+
    ` these statments describes your company best?</p>`,
    answer: ["Our company sends automatic emails often","Our company sends automatic emails a little", 
    "Our company never sends automatic emails", "I'm not sure"],
    score: [2, 1, 0, 0],
    resource: ""},
    {question: `<p>Automated chat bots are like an interactive FAQ section. They are typically used when a company has a high rate`+
    ` of customer enquiries, or if they do not have a dedicated customer service department. These can be designed and implemented`+
    ` on your website or social media.</p> <p>Which of these statments describes your company best?</p>`,
    answer: ["Our company uses chat bots","Our company does not use chat bots, but would benefit", 
    "Our company would not benefit from chat bots", "I'm not sure"],
    score: [2, 0, 0, 0],
    resource: ""},
    {question: `<p>Most companies are legally required to record data: income and outgoings, for tax purposes. It's becoming more common`+
    ` for companies to record and analyse additional data to provide insight and improve descision power. Taking extra steps can`+
    ` give insight into:</p><ul><li>Customer behaviour</li><li>Employee productivity</li><li>In depth view on sales and costs</li><li>Other trends</li>`+
    `</li></ul><p>Which can ultimately lead to saving time and money.</p><p>Which of these statments describes your company best?</p>`,
    answer: ["We track multiple types of data frequently", "We go a little beyond the legal requirement","We don't track any data",
    "I'm not sure"],
    score: [2,1,0,0],
    resource: ""},
    {question: `<p>What insights does your company typically get from it's data?</p>`,
    answer: ["Employee productivity", "Trends in sales/costs", "Trends in seasons/markets", "Potential targets for future strategy",
    "Other"],
    score: [0,0,0,0,0],
    resource: ""},
    {question: `<p>Reports can be generated from data collection; either finished, or as a first draft ready to be polished later`+
    `.</p><p>Which of these statments describes your company best?</p>`,
    answer: ["We generate reports automatically regularly", "We generate reports, but manually from our data", 
    "We seldom generate reports", "I'm not sure"],
    score: [2,1,0,0],
    resource: ""},
    {question: `<p>Some companies will have to make comlicated calculations at some stage. If these calculations are regular `+
    `and have a pattern to them, implementing a custom calculator could save time and reduce human error.</p><p>For example: `+
    `<ul><li>Complicated wage bonus scheme</li><li>Discount system based on a number of variables (such as amount purchased)</li>`+
    `</ul></p><p>Which of these statments describes your company best?</p>`,
    answer: ["We have a system to handle complex calculations", "We have complex calculations to make but no system in place", 
    "We do not have any complex calculations to make", "I'm not sure"],
    score: [2, 0, 0, 0],
    resource: ""}
];

// containers
const popupHtml = document.querySelector('#popup-window');
const quizHeaderContainer = document.querySelector('#quiz-header-container');
const quizFooterContainer = document.querySelector('#quiz-footer-container');
const quizQuestionContainer = document.querySelector('#quiz-question-container');
const quizAnswerContainer = document.querySelector('#quiz-answer-container');
const quizDetailsContainer = document.querySelector('#quiz-details-container');
const quizTitleQuestions = document.querySelector('#quiz-title-questions');
const quizTitleDetails = document.querySelector('#quiz-title-details');

// buttons
const quizBtnInitiate = document.querySelector('#quiz-initiate-button');
const quizBtnStart = document.querySelector('#start-button');
const quizBtnPrevious = document.querySelector('#previous-button');
const quizBtnNext = document.querySelector('#next-button');
const quizBtnSubmit = document.querySelector('#submit-button');
const quizBtnClose = document.querySelector('#btn-quiz-close');

// toggles
function toggleTitleQuestions(){quizTitleQuestions.classList.toggle('d-none')};
function toggleStart(){quizBtnStart.classList.toggle('d-none')};
function togglePrevious(){quizBtnPrevious.classList.toggle('d-none')};
function toggleNext(){quizBtnNext.classList.toggle('d-none')};
function toggleSubmit(){quizBtnSubmit.classList.toggle('d-none')};
function toggleDetails(){quizDetailsContainer.classList.toggle('d-none')};
function toggleTitleDetails(){quizTitleDetails.classList.toggle('d-none')};
function togglePopup(){popupHtml.classList.toggle('d-none')};


// toggle quiz pop-up window
function toggleQuiz(event){ 
    togglePopup();
}

// start quiz button clicked
function startQuiz(event){
    toggleStart();
    toggleNext();
    toggleTitleDetails();
    toggleTitleQuestions();
    toggleDetails();
    appendQAndA(0);
}

// clear question and answer containers 
function clearContainers(){
    quizQuestionContainer.innerHTML = "";
    quizAnswerContainer.innerHTML = `<ul id="quiz-answer-list"></ul>`;
}

// append question and answers to containers

let questionNumber = 0;

function appendQAndA(questionNumber){

    //clear containers
    clearContainers();

    // update question container 
    quizQuestionContainer.innerHTML = questionsAndAnswers[questionNumber]['question'];

    //  update answer container 
    let answerArray = questionsAndAnswers[questionNumber]['answer'];
    let score = questionsAndAnswers[questionNumber]['score'];
    answerArray.forEach((answer,answerIndex) => {
        
        // generate radio buttons
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `question-${questionNumber}`;
        radio.value = score[answerIndex];
        radio.id = `question-${questionNumber}`;
        
        // generate labels
        const label = document.createElement('label');
        label.htmlFor = `question-${questionNumber}`;
        const labelDescription = document.createTextNode(answer);
        label.appendChild(labelDescription);

        // generate answers 
        const listItemAnswer = document.createElement('li');
        listItemAnswer.append(radio, " ", label)
        const emptyList = document.querySelector('#quiz-answer-container ul')
        emptyList.appendChild(listItemAnswer);     
    });
}

function cycleForward(event){
    
    console.log(document.querySelector(`input[name="question-${questionNumber}"]:checked`).value);

    questionNumber += Number(event.target.getAttribute('increment'))
    appendQAndA(questionNumber);

    if (questionNumber === 1){
        togglePrevious();
    } else if(questionNumber === 6){
        toggleNext()
        toggleSubmit() 
    }       
}

function cycleBackward(event){

    questionNumber += Number(event.target.getAttribute('increment'));
    appendQAndA(questionNumber);

    if(questionNumber === 0){     
        togglePrevious()
    }else if(questionNumber === 5){
        toggleSubmit() 
        toggleNext()      
    }
}

// event listeners 
quizBtnInitiate.addEventListener('click', toggleQuiz);
quizBtnStart.addEventListener('click', startQuiz)
quizBtnNext.addEventListener('click', cycleForward);
quizBtnPrevious.addEventListener('click', cycleBackward);
quizBtnClose.addEventListener('click', toggleQuiz);


// --------------------------------------------change alternating list colours: cards section
const benefitLists = document.querySelectorAll('.benefits-list');

for(const benefitList in benefitLists){
    const benefitListChild = benefitLists[benefitList].children
    for (bListItems in benefitListChild){
        if (bListItems % 2 === 0){
            benefitListChild[bListItems].style.color = "#5C8D93";
        }
    }
}
