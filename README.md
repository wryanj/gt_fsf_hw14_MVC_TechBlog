# gt_fsf_hw14_MVC_TechBlog

## Table of Contents
1. [Description](#Description)
3. [Usage](#Usage)
4. [Installation](#Installation)
5. [Licenses](#Licenses)
6. [Questions](#Questions)
7. [Credits](#Credits)

## Description
**Deployed App (Heroku)**      
https://safe-sierra-92920.herokuapp.com/

**Demo Video**       
Demo video below is guided walkthorough of application.      
https://user-images.githubusercontent.com/72420733/112721452-3483ce00-8eda-11eb-9de6-c3fb58c8ae52.mp4

This project asks us to build a front and backend for a tech blog site utilizing the model view controller methodology, and technologies such as handlebars, node, sequelize and others.This project was challenging since it was the first that required us to set everything up from scratch on both the front end and back end. Using MVC was good as it helped break up things for testing and developging. For example when I had an issue getting my client side script to work, I just moved on to do all my routes and test them with postman. Then I could put that "blocker" aside until I finished, and still work on other parts of the code. When I did this I just also defined my req.body when testing and made sure to model it after that when I sent the requests from my client side. We also had to manage login and authentication for the first time. Lastly, this project also gave a first exposure to template engines such as handlebarsjs. I see the value in these for sure, and plan to use such an approach going forward. 

Overall i was able to get a pretty solid application, although there are still some minor bugs in the icebox I was not able to sort out prior to needing to submit. None of them are stopping the functionality as they all only deal with the display of the applicatoin and having certain informatoin render based on various conditions. 

**Dash View** 
![image](https://user-images.githubusercontent.com/72420733/112853265-ad219080-907a-11eb-8ec7-438c44f965e7.png)

**Home View** 
Login message only showing for users who are not currently logged in. 
![image](https://user-images.githubusercontent.com/72420733/112853912-536d9600-907b-11eb-8881-b62372f9a2ef.png)


**Login View** 
![image](https://user-images.githubusercontent.com/72420733/112853685-1bfee980-907b-11eb-8567-aae3b58524e5.png)

**Signup View** 
![image](https://user-images.githubusercontent.com/72420733/112853733-26b97e80-907b-11eb-8017-284cd7218708.png)

## Usage
This application can be used to manage community blog posts and commenting. 

## Installation
To install this application you just need to ensure that you have nodeJS and run the npm i command to get required dependencies. The package.json list which ones were utilized.

## Licenses
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)  
https://opensource.org/licenses/MIT

## Questions
Email me at ryanjohnson9685@gmail.com for more information.

## Credits
For this assignment I utilized class notes and recordings, as well as some MDM and W3 schools. I also reviewed the docs for sequelize, handlebarsjs and reviewed some stack for questions I came across along the way.
