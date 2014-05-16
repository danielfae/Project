Final Project - Survey Navigator
=======

Online surveys depending on location of surveyor and the option for a Newsletter subscription.

Using Google Maps API, I want to display places in the world where a person wants to give away a survey for anyone to fill out.

The surveys will be created and administered using SurveyMonkey API.

Finally, I will add a Newsletter subscription using Mailchimp API.

This will be acomplished independently for a personal project without the use of the BeagleBoard.


Physical Computing - BeagleBoard
=======

For the Physical Computing aspect of the project, I want to implement a device using the BeagleBoard that enables the user to interact with the surveys displayed on the browser thought buttons. This device will specifically help to navigate and answer the questions one by one in an interactive way.

1. The person who will use my project is a client of any company. This will be useful for a company that wants to give the option to the clients of submitting feedback of the service/product throught an interactive device. The interactivity give results regarding the acomplishment of the survey or can show a level of satisfaction according to the answers given by the user.

2. Companies that need satisfaction rates from the clients or companies that want to evaluate a certain level of proficiency in a determined skill(e.g: Leadership). In an standalone implemented device, you can deploy the device around a city, to make surveys to people that want to make part of any research. 

3. The first ten minures of using/interacting with my project will look like: a screen where questions will pop out and the user would need to answer with the buttons associated to each of the available options to choose. The result would be a calification of the performace obtained during the questionarie or a reward for having accomplish it. This can be used as a marketing device where the users can play answering specific questions of the company and be rewarded with promotions and coupons to increase the sales of the product.

4. By the end of tonight, I'd like to be able to: Setup buttons to press on the BeagleBoard and have a response of the state of the button to save it in variables using javascript.

Navigation - survey.js
=======

This file has the logic for the navigation trought the survey and the result of the interaction with the buttons.

```
next();
```
Allows the user moving to the next step of the survey.

```
prev();
```
Allows the user to go back one step in the survey.

```
abutton();
abutton();
abutton();
abutton();

```
Allows the user to select the survey.
