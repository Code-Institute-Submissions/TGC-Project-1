# Functional Integration Center | Feldenkrais Method #

### TGC - User Centric Frontend Development Milestone Project 1 ###
By: **Collin Wu Yuewei** -- *Code Institude Batch 8* -- 

A user-centric portfolio website to promote a movement therapist's skills, knowledge and services. The website has strategic information highlighted to allow the user to make an informed decision to engage the therapist. Using colourful and striking interactive buttons and pop-ups that provide feedback to the user as well as full viewport 5-page single website modern design to remove link loading time resulting in faster response time.

![Website Preview Image](/assets/images/WebsitePreview1.png "Functional Integration Center Website Homepage")

## Aim ##
The goal of the project is to build a static front-end site to present useful information to users, using techonology and languages taught in the Code Institute Fullstack Web Developer Program; at Project 1, namely HTML and CSS.

The concept chosen for this project is Functional Integration Center Website -- *[Feldenkrais-Asia](http://feldenkrais-asia.com/)* -- which is a old wordpress portfilo website that is not mobile responsive (created by me), and upgrade it to a modern mobile responsive website to present information of the movement therapist with information on the techniques and services provided which then can direct potential customers to the therapist. 

## Demo ##

The full website demo can be previewed here: [Functional Integration Center](https://collinwuy.github.io/TGC-Project-1/)

Responsive demo can be previewed here: [Responsive Demo on Various Devices](http://ami.responsivedesign.is/?url=https://collinwuy.github.io/TGC-Project-1/)

![Website Responsiveness Preview](/assets/images/ReponsiveView.png "Website Responsiveness Preview")




## UX ##

The target audience for this website are for people whom are of the working class and older that are in search of pain-relief or mobility-aid as well as atheletes looking to improve their flexibility and performance.

This project was a mobile first and a single hand operation design in mind. It has to fill the screen and have sufficiently large fonts for pleasant viewing.

The navigation bar is a large sidebar that expands from the left with a collapse button to the bottom left, so that it is easily access via the thumb of the user.

All buttons are purposefully place nearer to the lower left bottom of each page for easy thumb access. Large call to action buttons have color change feedback on press; to quickly gain access to pop-ups with information or relocation to another page down the website.

On larger devices, more fanciful hover animations and color-change is implemented for better user feedback. Most button are now centered for symmmetry. 

The theme of the website is darker, earthy colors with contrasting bright orange and yellow to provide a inviting and theraputic association. 
-- _More Info_ [Color Psychology](https://www.verywellmind.com/color-psychology-2795824) --

The 100% viewport pages design are meant for focusing the user, to focus on a full screen as a page and not be distracted by half/cut-off pages; in which can either be scrolled through or brought to with the navbar.

## Features ##
- Full 100% Viewport per page to focus the user
  <br>
- Single Website, All Pages Design for minimal loading of links or other pages 
  <br>
- 100% Offline Website, All Fonts, Icons, Images, Video, JS/CSS Libraries are all downloaded
  <br>
- Left Side Navbar
  - Icons with Words on Hover for Quick Access
  - Collapsing to a Small Button on the Bottom Left on Mobile Devices
  - Large Left Menu Navbar on Expand for easy thumb access
  <br>
- Homepage  (_Page1_)
  - Video Background to See the      Therapist in Action
  - Animated _Glowing_ Call to Action Button
  - Quick Summary of Website and Service
  <br>
- About (_Page2_)
  - Background Image of Information
  - Overlay with text, condensed information for quick introduction of the basis of the service
  <br>
- Course (_Page3_)
  - Full banner background images to showcase the specific service
  - Accordion buttons that display information of the service, maximizing space and keeping the page clean
  <br>
- Trainer (_Page4_)
  - Profile Page of the Therapist
  - Quick Access social network/email/phone buttons 
  <br>
- Contact Form (_Page5)
  - Simple clean form
  - Pop-up alert feedback on successful or unsuccessful submission

### Features Left to Implement ###

- Form capture and push to email or database (Requires .php)

- Photo Gallery of Activities with Testimonals

## Technologies Used ##

* [HTML](https://www.w3schools.com/html/)
    - HTML is universal base language for creating webpages compatible with majority browsers

* [CSS](https://www.w3schools.com/css/)
    - CSS is used for implementing styling to a webpage 

* [Javascript](https://www.w3schools.com/js/)
    - Javascript is the programming language of HTML and the Web.
    - Used for accordion pop-up on click
    - Limiting checkbox selection on contact form
    - Verify and validated required fields, and input format in the contact form
    - Pop-up alerts (_SweetAlert2_) on form submission

## Testing ##

#### Responsiveness ####
The webpage was manual tested for responsiveness on physical iPhone 6S, Samsung S8+, Xiaomi Mi Max2, 1920 x 1080 laptop screen.

Other devices that are not available physically were tested using this following [Responsiveness Tool](http://responsivetesttool.com/) webpage as well as [Am I Responsive Design](http://ami.responsivedesign.is/?url=https://collinwuy.github.io/TGC-Project-1/)

All platforms had to have correct CSS design, working animation, buttons, pop-up and elements placed in the correct position.

#### Page Load Time ####

The page load time is tested using [Pingdom Tool](https://tools.pingdom.com/) while being hosted by GitHub Pages. This is vitally important as the goal was to have a responsive, non-laggy webpage with no link-loading from page to page, achieving an __A__ rating of __91/100__ points also on America and European Servers.

![Page Load Time](/assets/images/Pingdom%20Asia.png "Website Responsiveness Preview")

#### Code Validation ####

Code validation is achieve by using developer tools provided by [W3C Developer Tools](https://w3c.github.io/developers/tools/). The webpage code tested til no errors are found on their [Nu Html Checker](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcollinwuy.github.io%2FTGC-Project-1%2F),
![Nu Html Validation] [Internationlization Checker](https://validator.w3.org/i18n-checker/check?uri=https%3A%2F%2Fcollinwuy.github.io%2FTGC-Project-1%2F#validate-by-uri+)

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

JQuery
The project uses JQuery to simplify DOM manipulation.
Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X