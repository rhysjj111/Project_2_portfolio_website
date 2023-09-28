// change alternating list colours: cards section
let benefitLists = document.getElementsByClassName('benefits-list');
let firstList = benefitLists[0];

for(let benefitList in benefitLists){
    let benefitListChild = benefitLists[benefitList].children
    for (listItem in benefitListChild){
        if (listItem % 2 === 0){
            benefitListChild[listItem].style.color = "#5C8D93";
        }
    }
}

// pop up quiz
const questions = [`<p>A common task that can be automated is the generation of documents. Any document can be created using a template and passing it data from a database (ie. 'customer name','customer address','work done description'). Examples of where you might make use of this:</p> <ul><li>Invoices</li><li>Employee contracts</li><li>Purchase orders</li></ul> <p>Which of these statments describes your company best?</p>`, 
    `<p>Another task that can be automated is sending emails. In the same way documents can be created, emails can be put together automatically. Your newly generated documents can be attached and sent at a time of your choosing. Examples:</p> <ul><li>Payment reminders</li><li>Appointment reminder</li><li>Invoicing customer</li></li></ul> <p>Which of these statments describes your company best?</p>`,
    `<p>Automated chat bots are like an interactive FAQ section. They are typically used when a company has a high rate of customer enquiries, or if they do not have a dedicated customer service department. These can be designed and implemented on your website or social media.</p> <p>Which of these statments describes your company best?</p>`,
    `<p></p>`]
const answers = [['We use this strategy often', 'We use this strategy a little', 'We never use this strategy'],[]]
let quizButton = document.getElementById('quiz-button')
quizButton.addEventListener('click', initiateQuiz);
function initiateQuiz(event){
    let popupHtml = document.getElementById('popup-window');
    popupHtml.removeAttribute('class');
    popupHtml.style.display = 'block';
}

