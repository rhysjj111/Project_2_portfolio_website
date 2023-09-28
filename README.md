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
- The quiz will have 7 potential questions. 2 of them accessible depending on the answers given to previous questions.
- The questions will be stored in an array; each question and answer pair in an object.
- The quiz will be initiated by a button. When initiated, it will take place in a pop up window.
- The questions will be cycled through with previous and next buttons.
- A submit button wil call feeback option, based on the answers given.

- End design similarity/difference
  - The wireframes were largely the same as the finished product, the main differences were some sizing of elements and a bootstrap carousel was used instead of a tile configuration for the photos in the commission gallery page.
  - I had made these changes because it just looked better visualy in practice

### Colour scheme
![Colour scheme pallete](/assets/images/readme_images/colour_pallet.png)
The colour pallet was found on https://mycolor.space/

### Testing 

#### Issues
- Images
  - I had a problem getting images to be responsive when moving from desktop to mobile, especially the about.html photo and the photos in the carousel. I had to manually resize the about me photo because I couldn't figure out how to scale it up while still becoming responsive at a smaller screen size.

- Discount banner
  - I had an issue getting the discount banner (at the top of each page) to remain within the size of the viewport. The solution was to remove the margins of the container holding the banner.

- Spacing/sizing
  - Generally, the main difficulty I came across was getting everything in position whilst remaining responsive. I put this down to getting to know CSS and how bootstrap works rather than a bug that could be fixed.

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
https://bbbootstrap.com/snippets/simple-contact-form-74408136 - used as a template for main contact form.  
https://mdbootstrap.com/how-to/bootstrap/footer-add/ - used a template for structure of footer.  
https://www.w3schools.com/css/css3_shadows_box.asp - used code for box shadows on images.  
Images taken from Redcrown facebook page. (Permission granted)  

