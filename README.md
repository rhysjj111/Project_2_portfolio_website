# A website for an imaginary business with quiz.

## UX

### Overview
Vale Business Solutions is a website for a business that deliver tech solutions. It will contain a main page and a quiz powered by Javascript.

### Site owners goal
To provide relevant information so potential customers can get any information quickly. The site is aimed at small businesses that may not have any knowledge on what is available/what they are in need of so there should  be a flow of information that isn't going to confuse/overwhelm visitors. A quiz will be available for customers curious but not sure what their business needs which will hopefully lead to them getting in touch when they are better informed.

### External users goals
* To find out what the business is selling. 
* To find out if they are a good fit for the service/product.
* To find out if it is feasible to buy the service/product (due to price/location limitations).
* An easy way to make contact with the site owner.

### Developer goals
- To provide a functioning website that will deliver a user friendly experience to the business customers.

### Proposed features
- A homepage that explains what the business does and provides key information, such as price/contact information, and encourages the user to take the quiz.
- A quiz that will tell the customer which services their business could use.
- A contact form.

The features listed are achievable in terms of timescales and technology available.

### User stories
- As a potential customer of Vale Business Solutions with little tech background, I would like to know; what they are selling, and get a general understanding of how that can be applied to my business.
- I would also like to find out things like costs/timescales/availability.
- I want to find out what the next steps are to get the ball rolling are if i'm interested in doing business.

## Design

### Design choices
- Minimum but essential information will be displayed to inform but not overwhelm anybody using the site with little tech background. Also, for someone who does know what's being offered, they should be able to find what they are looking for fast.
- A neutral colour scheme will be used for the same reasons as above.
- The site will comprise of one main page, comprised of four sections; 'what we do' 'pricing', 'case studies carrousel', 'personal pitch/contact information'.
- Each case study will be on it's own page to go into detail.
- The quiz will be in a pop up window.
- A fixed navigation bar will be fixed at the top of each page and include a link for each section of the main page, plus a highlighted link for the quiz and a contact button.

### Wireframes
Website wireframe:
![Website wireframe](/assets/images/readme_images/Portfolio_project_wireframe.png)

Javascript pop up quiz wireframe:
![Javacript pop up quiz wireframe](/assets/images/readme_images/Portfolio_project_javascript_wireframe.png)

### Quiz
![JavaScript workflow](/assets/images/readme_images/JS_QUIZ_FLOW.png)

- Plan
  - The quiz will have 7 potential questions. 2 of them accessible depending on the answers given to previous questions.
  - The questions will be stored in an array; each question and answer pair in an object.
  - The quiz will be initiated by a button and cycle through each question as the user chooses their answers and uses the next and previous buttons.
  - A submit button will call feeback a option, based on the answers given.
  - Data validation is required to ensure an answer is selected before cycling to next question.

- End design similarity/difference
  - The quiz has quite a few differences, mainly things that were overlooked in the design stage. A close button, to close the quiz was added in after design, as this was not initially conscidered.  
  - A start button was also added at the first 'details' section, as this made it easier to seperate the 'details' section from the 'questions' section when it came to cycling through the questions.
  - A progress bar was omitted due to time constraints. It was decided the progress bar was not essential to functionality and time was better spent elsewhere.
  - It was proposed the scores would be added up with a 'total scores' function, after all the questions were cycled through. As we were only interested in the end score, for 'automation' and 'data analysis', and each answer had a predetermined score, I decided to add the scores in the 'cycle questions' function, incrementally, as the user moved through the quiz.
  - I hadn't accounted for the wireframe of the 'feedback' section. I had to do this during the coding process. Rather than go back and design them, I used what was already available and put the feedback output in the 'questions' and 'answers' containers, changed the heading (from 'questions' to 'feedback'), and added a next button to cycle between 'automation' and 'data analysis' feedback.
  - The flow diagram does not account for the 'feedback cycle' and 'feedback append' functions that replaced a proposed 'feedback' function.
  - Otherwise the quiz was very similar in reality to design from the wireframes and flow diagram.


### Colour scheme
![Colour scheme pallete](/assets/images/readme_images/colour_pallet.png)
The colour pallet was found on [mycolor.space](https://mycolor.space/)
Each colour was put into it's own css class name for font and background, so that I could easily switch between colours and deduce which combination looked best for each situation.

## Testing 

### Issues

#### JS
- Javascript functions not working
  - Some of my funtions weren't working when initially writing the quiz JS. I deduced the variable 'questionsAndAnswers' was causing issues. I temporarily worked around this by putting it at the bottom of the page. I later found out there was an error in the variable code and corrected.
- Appending answers to answer container
  -  I was attempting to append the 'radio button' and corresponding labels at the same time using appendChild() function. After some research, I found I could do that with append() function from: [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- Cycling through the questions
  - Initially, the questions were being cycled through including the details section, with one function. It caused an issue moving back and forth with the next and previous buttons, as they became out of sync with regards to the question number. This was overcome by making a function for cycling forward, and a seperate function for cycling backwards, as well as making a seperate funtion for moving from the 'details' section, to the 'questions' section. Another function was used to move from the 'questions' section to the 'feedback' section.
- Keeping score
  - I was having touble with passing the 'currentScore' variable, from the 'cycleForward' function (cycled the questions forwards), to the 'cycleBackward' function; in order to keep track of the score moving both forwards, and backwards. I had to create a global object, var 'answersGiven', outside the cycleForward function, then assigned the current score to the global variable as a property. This could be accessed from the cycleBackward function by calling the object property. I got help from: [Stack overflow](https://stackoverflow.com/questions/407048/accessing-variables-from-other-functions-without-using-global-variables)
  - Going back more than once, caused the cycleBackward function to give an inacurate record of score because it was subtracting the most recent ansawer each time. The solution to this was storing the score for each question in 'answersGiven'. 
- Vague planning
  - Some key areas were overlooked at the planning phase, which would have made it a lot easier when it came to writing the code:
    - How the users answers would be stored and the scores added up was not thought through well.
    - Key features, such as a close button on the popup window was not conscidered.
    - Two of the questions are only accessible as a result of a certain answer from a previous question; the logistics of this wasn't thought out, so again, when it came to writing the code, made it a lot more difficult, and eventually the idea was scrapped due to time constraints.
    - No conscideration of validation to prompt the user to select an option. Neither for a notification that the quiz is complete after the quiz is finished.  

#### CSS
- Pop-up quiz window CSS
  - I wanted to get the layout of the quiz pop-up window configured using only Bootstraps grid system. I spent a while trying to get the footer of the window to stay at the bottom without affecting other elements. I could not achieve this and in the end had to impliment some custom CSS, changing the display properties of the outer 'div' container and the margin-top of the footer.





#### Features

- Links
  - All links were tested including navbar links, callout buttons and product links. Links that take you to a different page were made sure to open in a new tab.

- Forms
  - There is a register interest form and a general interest form. Both forms' fields work correctly if optional or manditory. Forms are not linked to a database so functionality can not be tested in that regard.


### Validators

- No errors show when each html page is put into W3C validator
- 9 warnings showed up on the W3C CSS checker about vendor extensions:  
![CSS validator warnings](/assets/images/Readme/CSS_validator.png)

### Future features to include/update

- 
- Forms should be linked up and should include feedback for the user.

### Deployment
- The site was deployed to GitHub pages:
  - Repository page > Setting > Pages > Build and deployment > Main branch > Save.
  - Refresh page > Visit site.
    
Link to live site - https://rhysjj111.github.io/Project_1_Redcrown/

Cloning the Repository:
  - Repository page > Code > local > HTTPS > copy link > clone in code editor.

### Credits
The colour pallet was found on: https://mycolor.space/
Globe image used as a background: https://pixabay.com/vectors/world-earth-globe-planet-global-908894/
The quiz pop up window was based loosly on Bootstraps modal example in the documentation: https://getbootstrap.com/docs/5.3/components/modal/
I used this article on Linkedin for help with generating the pop-up window of the JS quiz: https://www.linkedin.com/advice/3/how-can-you-create-pop-up-window-html-javascript-skills-html
'tutorials point' helped with a boiler plate for appending the 'answers' list to the pop-up quiz: https://www.tutorialspoint.com/how-to-dynamically-create-radio-buttons-using-an-array-in-javascript#:~:text=This%20process%20can%20be%20automated,createElement()%20and%20appendChild().
I used an article from 'javaTpoint' to help with the quiz validation, to make sure necessary all fields were filled out, if not, a warning was displayed: https://www.javatpoint.com/javascript-form-validation
https://bbbootstrap.com/snippets/simple-contact-form-74408136 - used as a template for main contact form.  
https://mdbootstrap.com/how-to/bootstrap/footer-add/ - used a template for structure of footer.  
https://www.w3schools.com/css/css3_shadows_box.asp - used code for box shadows on images.  
Images taken from Redcrown facebook page. (Permission granted)  

