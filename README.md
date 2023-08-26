# A website for a friends side business.

## UX

### Overview
Redcrown figures is a side business that professionally paint figures for it's customers. They are about to go into designing and producing figures themselves and want a professional website to showcase their new products. This site is targeted towards showcasing these new products primarily, and showcasing the commission paints already completed for both new and old customers.

### Site owners goal
To provide a professional looking, personal website on which to display his new line of products for a side business.
The site owner nearly always displays his commission paints (established side of the business) on social media and has a good following already. 
As he is going into a new venture; a web page displaying the products in a beautiful way may entice new customers to buy from him/give them more confidence to start a conversation.

Secondarily, he would like to showcase his commisson paint work, which is already done quite elegantly on social media. It makes any new visitors aware of the full picture of his business.

### External users goals
* To discover new products.
* To view latest commission paints.
* An easy way to view the information and make contact with the site owner.

### Developer goals
- To provide a website that will display Redcrown figures new products and give visitors confidence to buy, or find out more about the company.

### Proposed features
- A shop page that clearly displays new products.
- Product pages that give more details and offer a call to action.
- Commission paints gallery page.
- An about section that gives viewers a more in depth look into the owner of the business.

I will try to include all of these features, as I do not think they are too technical/will take too much time to complete. I also think that they can quite easily be set out so they can be navigated easily without overloading the user with information.

### User stories
- As a new customer of Redcrown figures, I want to see what exactly this company has to offer and if I can trust them.
- As a customer of Redcrown figures, I want to be able to get quick access to your new products and have all the relative information about them to hand.

### Design choices
- I plan on using the shop on the main index.html page as this is the main point of the website, to drive potential customers here.
- A gallery will be on another page accessible from the navigation bar.
- An about  page will also have it's own page accessible from the navigation bar. 
- Shop will be the first option in the navbar, followed by the about page, finally, the commission page will be last as this is the expected order of importance for our prospective visitor.
- There will always be a call to action available to complete a contact form as this is how the owner of Redcrown deals with all of his customers. It is a bit more personal than an online transaction.

### Wireframes

![Homepage - desktop wireframe](/assets/images/Wireframes/Homepage-dsk.png)
![Homepage - tablet wireframe](/assets/images/Wireframes/Homepage-tab.png)
![Homepage - mobile wireframe](/assets/images/Wireframes/Homepage-mb.png)
![About page - desktop wireframe](/assets/images/Wireframes/About-dsk.png)
![About page - tablet wireframe](/assets/images/Wireframes/About-tab.png)
![About page - mobile wireframe](/assets/images/Wireframes/About-mb.png)
![Gallery page - desktop wireframe](/assets/images/Wireframes/Gallery-dsk.png)
![Gallery page - tablet wireframe](/assets/images/Wireframes/Gallery-tab.png.png)
![Gallery page - mobile wireframe](/assets/images/Wireframes/Gallery-mb.png)
![Product page - desktop wireframe](/assets/images/Wireframes/Product-dsk.png)
![Product page - tablet wireframe](/assets/images/Wireframes/Product-tab.png)
![Product page - mobile wireframe](/assets/images/Wireframes/Product-mb.png)

- End design similarity/difference
  - The wireframes were largely the same as the finished product, the main differences were some sizing of elements and a bootstrap carousel was used instead of a tile configuration for the photos in the commission gallery page.
  - I had made these changes because it just looked better visualy in practice.

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
https://bbbootstrap.com/snippets/simple-contact-form-74408136 - used as a template for main contact form.  
https://mdbootstrap.com/how-to/bootstrap/footer-add/ - used a template for structure of footer.  
https://www.w3schools.com/css/css3_shadows_box.asp - used code for box shadows on images.  
Images taken from Redcrown facebook page. (Permission granted)  

