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

const feedback = {
    automation:[
        `Anything carried out on a computer/mobile can be automated, and is not limited to the examples given or the imagination. 
        It can provide uniformity to your business process which can inspire confidence deom clients, employees or suppliers.
        Free your staff from labour intensive tasks so they spend time pushing your company towards it's goals.`,
        `You scored lower for automation. However, you're not alone!
        If you'd like a free consultation to see how you can get ahead of the competition, get in touch.`,
        `Your company already uses automation for some processes, which is brilliant to see!
        If you'd like a free consultation to see if your process can be refined, get in touch.`
    ],
    dataAnalysis:[
        `Future proof your company. Collecting data now will give benefits in the short term, but the real magic will happen after `+
        `some years time.
        By then you will have strong data, which can give you reliable, essential insights.
        When data is sorted and presented correctly, it can give confidence to move in a particular direction, even drop a venture `+
        `which is no longer serving your company.`,
        `Your company scored lower for data analysis. Now is the perfect time to start future proofing. 
        Get in touch for a free consultation.`,
        `Your company scored high for data analysis, which means you are already taking steps to future proofing your company.
        Get in touch for a free consultation, to see if your data is being managed optimally.`
    ]
}

// containers
const popupHtml = document.querySelector('#popup-window');
const quizHeaderContainer = document.querySelector('#quiz-header-container');
const quizFooterContainer = document.querySelector('#quiz-footer-container');
const quizQuestionContainer = document.querySelector('#quiz-question-container');
const quizAnswerContainer = document.querySelector('#quiz-answer-container');
const quizDetailsContainer = document.querySelector('#quiz-details-container');
const quizTitleQuestions = document.querySelector('#quiz-title-questions');
const quizTitleDetails = document.querySelector('#quiz-title-details');
const quizTitleFeedback = document.querySelector('#quiz-title-feedback');

// buttons
const quizBtnInitiate = document.querySelector('#quiz-initiate-button');
const quizBtnStart = document.querySelector('#start-button');
const quizBtnPrevious = document.querySelector('#previous-button');
const quizBtnNext = document.querySelector('#next-button');
const quizBtnSubmit = document.querySelector('#submit-button');
const quizBtnClose = document.querySelector('#btn-quiz-close');
const quizBtnNextFeedback = document.querySelector('#next-button-feedback');
const contactButton = document.querySelector('#contact-btn');


// toggles
function toggleTitleQuestions(){quizTitleQuestions.classList.toggle('d-none')};
function toggleStart(){quizBtnStart.classList.toggle('d-none')};
function togglePrevious(){quizBtnPrevious.classList.toggle('d-none')};
function toggleNext(){quizBtnNext.classList.toggle('d-none')};
function toggleSubmit(){quizBtnSubmit.classList.toggle('d-none')};
function toggleDetails(){quizDetailsContainer.classList.toggle('d-none')};
function toggleTitleDetails(){quizTitleDetails.classList.toggle('d-none')};
function toggleTitleFeedback(){quizTitleFeedback.classList.toggle('d-none')};
function toggleNextFeedback(){quizBtnNextFeedback.classList.toggle('d-none')};
function toggleContact(){contactButton.classList.toggle('d-none')};
function togglePopup(){popupHtml.classList.toggle('d-none')};

// ----------------------------------------toggle quiz pop-up window----------------------------------------
function toggleQuiz(event){ 
    togglePopup();
}

// ----------------------------------------start quiz----------------------------------------
function startQuiz(event){
    toggleStart();
    toggleNext();
    toggleTitleDetails();
    toggleTitleQuestions();
    toggleDetails();
    appendQAndA(0);
}

// ----------------------------------------clear question and answer containers----------------------------------------
function clearContainers(){
    quizQuestionContainer.innerHTML = "";
    quizAnswerContainer.innerHTML = `<ul id="quiz-answer-list"></ul>`;
}

//---------------------------------------- radio identification/assignation ----------------------------------------
function radioId(){
    let radioAnswer = document.querySelector(`input[name="question-${questionNumber}"]:checked`);
    // alert if no answer selected.
    if(!radioAnswer){alert("### Please select an answer..")};

    //asign score
    answerScore[questionNumber] = Number(radioAnswer.value);
    return answerScore[questionNumber]
}

// ----------------------------------------append question and answers to containers----------------------------------------
let questionNumber = 0;
let automationScore = 0;
let dataAnalysisScore = 0;
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

// ----------------------------------------append feedback----------------------------------------
function appendFeedback(type, score){

    //clear containers
    clearContainers();

    if (type === 1){
        // update question container 
        quizQuestionContainer.innerHTML = feedback.automation[0];

        //  update answer container 
        if(score < 3){
            quizAnswerContainer.innerHTML = feedback.automation[1];
        } else {
            quizAnswerContainer.innerHTML = feedback.automation[2];
        };
    } else{
        // update question container 
        quizQuestionContainer.innerHTML = feedback.dataAnalysis[0];
    
        //  update answer container 
        if(score < 3){
            quizAnswerContainer.innerHTML = feedback.dataAnalysis[1];
        } else {
            quizAnswerContainer.innerHTML = feedback.dataAnalysis[2];
        }
    }    
}

//----------------------------------------cycle forward----------------------------------------
var answerScore = {};

function cycleForward(event){
    radioId()

    //record score
    if(questionNumber < 3){
        automationScore += answerScore[questionNumber];
        console.log("automation score: ",typeof automationScore);
    } else {
        dataAnalysisScore += answerScore[questionNumber];
        console.log("data score: ", dataAnalysisScore);
    }

    // cycle question
    questionNumber += Number(event.target.getAttribute('increment'));
    appendQAndA(questionNumber);
    
    // adjust html
    if (questionNumber === 1){
        togglePrevious();
    } else if(questionNumber === 6){
        toggleNext()
        toggleSubmit() 
    }          
}

//----------------------------------------cycle backwards----------------------------------------
function cycleBackward(event){   
    //remove score
    let prevQuestionNumber = questionNumber - 1;
    if(questionNumber < 4){
        automationScore -= answerScore[prevQuestionNumber];
        console.log("automation score: ", automationScore);
    }else{
        dataAnalysisScore -= answerScore[prevQuestionNumber];
        console.log("data score: ", dataAnalysisScore);
    }

    // cycle question
    questionNumber += Number(event.target.getAttribute('increment'));
    appendQAndA(questionNumber);

    // adjust html
    if(questionNumber === 0){     
        togglePrevious()
    }else if(questionNumber === 5){
        toggleSubmit() 
        toggleNext()      
    }
}

//----------------------------------------cycle feedback----------------------------------------
function cycleFeedback(event){
    if (event.target.id === "submit-button"){
        radioId();
        dataAnalysisScore += answerScore[questionNumber];
        toggleTitleFeedback();
        toggleTitleQuestions();
        togglePrevious();
        toggleSubmit();
        toggleNextFeedback();

        appendFeedback(1, automationScore);
    } else {
        toggleNextFeedback();
        toggleContact();

        appendFeedback(2, dataAnalysisScore);
        
    } 
}

// event listeners 
quizBtnInitiate.addEventListener('click', toggleQuiz);
quizBtnStart.addEventListener('click', startQuiz)
quizBtnNext.addEventListener('click', cycleForward);
quizBtnPrevious.addEventListener('click', cycleBackward);
quizBtnClose.addEventListener('click', toggleQuiz);
quizBtnSubmit.addEventListener('click', cycleFeedback);
quizBtnNextFeedback.addEventListener('click', cycleFeedback);


// --------------------------------------------change alternating list colours: cards section----------------------------------------
const benefitLists = document.querySelectorAll('.benefits-list');

for(const benefitList in benefitLists){
    const benefitListChild = benefitLists[benefitList].children
    for (bListItems in benefitListChild){
        if (bListItems % 2 === 0){
            benefitListChild[bListItems].style.color = "#5C8D93";
        }
    }
}
