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
- As a potential customer of Vale Business Solutions with little tech background, I would like to know what they are selling and have a general understanding of how that can be applied to my business.
- I would also like to know things like costs/timescales/availability.
- I want to know what the next steps are to get the ball rolling.

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
- The quiz will have 7 potential questions. 2 of them accessible depending on the answers given to previous questions.
- The questions will be stored in an array; each question and answer pair in an object.
- The quiz will be initiated by a button and cycle through each question as the user chooses their answers and uses the next and previous buttons.
- A submit button wil call feeback a option, based on the answers given.
- Data validation is required to ensure an answer is selected before cycling to next question.

- End design similarity/difference
  - The quiz has quite a few differences, mainly things that were overlooked in the design stage. A close button, to close the quiz was added in after design, as this was not initially conscidered.  
  - A start button was also added at the first 'details' section, as this made it easier to seperate the details from the questions when it came to cycling through the questions.


### Colour scheme
![Colour scheme pallete](/assets/images/readme_images/colour_pallet.png)
The colour pallet was found on https://mycolor.space/

### Testing 

#### Issues
- Javascript functions not working
  - Some of my funtions were onlt working independanly (when the other ones were hidden) when writing the quiz JS. I whittled it down to the const variable 'questionsAndAnswers' was causing issues when at the top of the page. I temporarily worked around this by putting it at the bottom of the page until I find a better solution. I later found out there was an error in the variable code.

- Pop-up quiz window CSS
  - I wanted to get the layout of the quiz pop-up window configured using only Bootstraps grid system. I spent a while trying to get the footer of the window to stay at the bottom without affecting other elements. I could not achieve this and in the end had to impliment some custom CSS, changing the display properties of the outer 'div' container and the margin-top of the footer.

- Appending list items
  - I spent a while trying to append the 'radio button' and corresponding labels at the same time using appendChild() function. After some research, I found I could do that with append() function from: https://developer.mozilla.org/en-US/docs/Web/API/Element/append

- Vague planning
  - Some key areas were overlooked at the planning phase, which would have made it a lot easier when it came to writing the code. 
    - How the users answers would be stored and the scores added up was not well thought through.
    - Key features, such as a close button on the popup window was not conscidered.
    - Two of the questions are only accessible as a result of a certain answer from a previous question; the logistics of this wasn't thought out, so again, when it came to writing the code, made it a lot more difficult.

- Cycling through the questions
  - Initially, the questions were being cycled through including the details section, with one function. It cause an issue moving back and forth with the next and previous buttons. This was overcome by making a function for cycling forward and a seperate function for cycling backwards, as well as making a seperate funtion for moving from the 'details' section to the 'questions' section.

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

- I would like to make the readme file more comprehensive.
- Forms should be linked up and should include feedback for the user.



### Deployment
- The site was deployed to GitHub pages:
  - Repository page > Setting > Pages > Build and deployment > Main branch > Save.
  - Refresh page > Visit site.
    
Link to live site - https://rhysjj111.github.io/Project_1_Redcrown/

Cloning the Repository:
  - Repository page > Code > local > HTTPS > copy link > clone in code editor.

### Credits
The colour pallet was found on - https://mycolor.space/
Globe image used as a background - https://pixabay.com/vectors/world-earth-globe-planet-global-908894/
The quiz pop up window was based loosly on Bootstraps modal example in the documentation - https://getbootstrap.com/docs/5.3/components/modal/
I used this article to get the backbone of my pop-up window JS quiz - https://www.linkedin.com/advice/3/how-can-you-create-pop-up-window-html-javascript-skills-html
'tutorials point' helped me with a boiler plate for my answers list in the pop-up quiz - https://www.tutorialspoint.com/how-to-dynamically-create-radio-buttons-using-an-array-in-javascript#:~:text=This%20process%20can%20be%20automated,createElement()%20and%20appendChild().
https://bbbootstrap.com/snippets/simple-contact-form-74408136 - used as a template for main contact form.  
https://mdbootstrap.com/how-to/bootstrap/footer-add/ - used a template for structure of footer.  
https://www.w3schools.com/css/css3_shadows_box.asp - used code for box shadows on images.  
Images taken from Redcrown facebook page. (Permission granted)  

