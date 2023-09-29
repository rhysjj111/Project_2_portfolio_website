// ---------------------------------------pop up quiz

let popupHtml = document.getElementById('popup-window');
let quizHeaderContainer = document.getElementById('quiz-header-container');
let quizFooterContent = document.getElementById('footer-content');


// initiate quiz
function initiateQuiz(event){ 
    popupHtml.removeAttribute('class');
    popupHtml.style.display = 'block';
}
let quizBtnInitiate = document.getElementById('quiz-button');
quizBtnInitiate.addEventListener('click', initiateQuiz);

// close quiz function
function closeQuiz(event){
    popupHtml.style.display = 'none';
}
let quizBtnClose = document.getElementById('btn-quiz-close');
quizBtnClose.addEventListener('click', closeQuiz);

let questionNumber = 0;
// cycle questions
function nextQuestion(event){
    if(questionNumber === 0){
        let previousButton = document.getElementById('previous-button');
        quizFooterContent.insertBefore(previousButton, quizFooterContent.firstChild);
        let quizHeaderNew = document.getElementById('quiz-header-new');
        let quizHeader = document.getElementById('quiz-header');
        quizHeader.remove()
        console.log(quizHeaderContainer)
        quizHeaderContainer.insertBefore(quizHeaderNew, quizHeaderContainer.firstChild);
    }
}
let quizBtnNext = document.getElementById('next-button');
quizBtnNext.addEventListener('click',nextQuestion);

// variables
const questionsAndAnswers = [
    {question: `<p>A common task that can be automated is the generation of documents. Any document can be created using a`
    ` template and passing it data from a database (ie. 'customer name','customer address','work done description'). Examples`
    ` of where you might make use of this:</p> <ul><li>Invoices</li><li>Employee contracts</li><li>Purchase orders</li></ul>`
    ` <p>Which of these statments describes your company best?</p>`, 
    answer: ["We use this strategy (or similar) often", "We use this strategy (or similar) a little", "We never use this strategy","I'm not sure"],
    score: [2, 1, 0, 0],
    resource: ""},
    {question: `<p>Another task that can be automated is sending emails. In the same way documents can be created, emails can`
    ` be put together automatically. Your newly generated documents can be attached and sent at a time of your choosing.`
    ` Examples:</p> <ul><li>Payment reminders</li><li>Appointment reminder</li><li>Invoicing customer</li></li></ul> <p>Which of`
    ` these statments describes your company best?</p>`,
    answer: ["Our company sends automatic emails often","Our company sends automatic emails a little", 
    "Our company never sends automatic emails", "I'm not sure"],
    score: [2, 1, 0, 0],
    resource: ""},
    {question: `<p>Automated chat bots are like an interactive FAQ section. They are typically used when a company has a high rate`
    ` of customer enquiries, or if they do not have a dedicated customer service department. These can be designed and implemented`
    ` on your website or social media.</p> <p>Which of these statments describes your company best?</p>`,
    answer: ["Our company uses chat bots","Our company does not use chat bots, but would benefit", 
    "Our company would not benefit from chat bots", "I'm not sure"],
    score: [2, 0, 0, 0],
    resource: ""},
    {question: `<p>Most companies are legally required to record data: income and outgoings, for tax purposes. It's becoming more common`
    ` for companies to record and analyse additional data to provide insight and improve descision power. Taking extra steps can`
    ` give insight into:</p><ul><li>Customer behaviour</li><li>Employee productivity</li><li>In depth view on sales and costs</li><li>Other trends</li>`
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
    {question: `<p>Reports can be generated from data collection; either finished, or as a first draft ready to be polished later`
    `.</p><p>Which of these statments describes your company best?</p>`,
    answer: ["We generate reports automatically regularly", "We generate reports, but manually from our data", 
    "We seldom generate reports", "I'm not sure"],
    score: [2,1,0,0],
    resource: ""},
    {question: `<p>Some companies will have to make comlicated calculations at some stage. If these calculations are regular `
    `and have a pattern to them, implementing a custom calculator could save time and reduce human error.</p><p>For example: `
    `<ul><li>Complicated wage bonus scheme</li><li>Discount system based on a number of variables (such as amount purchased)</li>`
    `</ul></p><p>Which of these statments describes your company best?</p>`,
    answer: ["We have a system to handle complex calculations", "We have complex calculations to make but no system in place", 
    "We do not have any complex calculations to make", "I'm not sure"],
    score: [2, 0, 0, 0],
    resource: ""}
];

// --------------------------------------------change alternating list colours: cards section
let benefitLists = document.getElementsByClassName('benefits-list');

for(let benefitList in benefitLists){
    let benefitListChild = benefitLists[benefitList].children
    for (listItem in benefitListChild){
        if (listItem % 2 === 0){
            benefitListChild[listItem].style.color = "#5C8D93";
        }
    }
}
