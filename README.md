# Poductive App #

[Click here to visit the live page.](https://productive-app-ui-80cca270cd7d.herokuapp.com/)

[Click here to visit the Github repository.](https://github.com/TamasSomi/productiveapp-ui)

[Click here to visit the API Github repository.](https://github.com/TamasSomi/productive-app)

![Responsive screenshot of the home page.](src/assets/docs/responsive-screenshot-homepage.png)


This page is a very simple productivity app where user could create tasks, write notes for the tasks and set deadline, upload img. Built only for learning purposes.

[Click here to read the user stories on Github Issues](/issues)

## Target Audiance ##

* Users working in fast-paced environments who need a straightforward tool to manage their tasks and deadlines.
* Professionals who value simplicity and efficiency in their productivity tools.
* Individuals who want a tool that is easy to use without unnecessary complexities.
* Individuals who enjoy using productivity tools to enhance their personal and professional lives.
* Those who want to keep track of deadlines and make quick notes related to their coursework.
* User who want to add some motivational or other images to there dayli tasks.

## Features ##
(screenshots of the app present in the Testing section)

* User can register.
* Registered user can create tasks.
* User can add notes to the existing tasks.
* User can upload image to the tasks.
* User can set a deadline.
* User can not set the deadline to be in the past.
* User can update the tasks.
* User can delete the tasks.

## Future Features ##

* Fast login with social media.
* More user could access the same task if permitted.
* Assigned responsibilities within a task.

## Security Features ##

* The user is authenticated and can not access any data without logging in.
* Only the owner can read, edit or delete data.
* Unauthorised or not permitted user can not access any task.

## Planning ##


## Technology Used ##

Used technologies during development:

* [Github](https://github.com/)
* [Codeanywhere](https://codeanywhere.com/)
* [Heroku](https://dashboard.heroku.com/)
* [Django-Rest](https://www.django-rest-framework.org/)
* [Django Allauth](https://docs.allauth.org/en/latest/#)
* [React-Bootstrap](https://react-bootstrap.netlify.app/)
* [React](https://react.dev/)
* [ElephantSql](https://www.elephantsql.com/)

## Manual Test ##

### Test Case: Registration ###

#### Steps: ####
1. Navigate to the registration page.
2. Fill in all required fields with valid data.
3. Click the register button.

#### Expected Results: ####
1. The registration page is displayed.
2. All fields accept valid input.
3. The user is redirected to the homepage.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.

### Test Case: Login ###

#### Steps: ####
1. When logged out, click on the Sign In button.
2. Fill in the fields with an existing username and password.
3. Press the Sign in button.

#### Expected Results: ####
1. The login page is displayed.
2. All fields accept valid input.
3. The user is redirected to the home page.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.

### Test Case: Logout ###

#### Steps: ####
1. When logged in, click on the Sign Out button.

#### Expected Results: ####
1. The home page is displayed. User is logged out.

#### Result: ####
1. Pass.

### Test Case: Create a Task ###

#### Steps: ####
1. Go to the add a task page when signed in by clicking on the add task button.
2. Fill the task form with valid data.
3. Press the create button.

#### Expected Results: ####
1. User redirected to the create task page and the form displayed with fields of title, content, and deadline, add image fields.
2. The form accepts only valid data. All fields required.
3. The user is redirected to the home/tasks page. The new task is displayed on top of home/tasks page.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.

### Test Case: Edit a Task ###

#### Steps: ####
1. Go to the dashboard by clicking on the home or tasks button.
2. Click on one of your tasks and on the three dots, click the edit icon.
3. Change the data.
4. Press the save button.

#### Expected Results: ####
1. The existing tasks are displayed on the home/tasks page.
2. The user is redirected to the edit_task page. A form displayed with fields of name, title, content, deadline, and add image.
3. The user is able to change the desired field with valid data.
4. The user is redirected to the dashboard, and the task is displayed with the updated data.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.
4. Pass.

### Test Case: Delete a Task ###

#### Steps: ####
1. Go to the home page by clicking on the tasks/home button. Click on a task.
2. Click the three dots, delete icon on the task.

#### Expected Results: ####
1. The tasks are displayed on the page.
2. The user is redirected to the home page. The deleted task is not displayed anymore.

#### Result: ####
1. Pass.
2. Pass.

### Test Case: Responsiveness Test ###

#### Steps: ####
1. Access the website with a desktop computer.
2. Open up the devtool and set all the available devices.
3. Verify that all content and features are properly displayed and usable on all devices.

#### Expected Results: ####
1. The website is fully displayed with all content and features accessible and usable.
2. All elements function as expected on both desktop and mobile versions.

#### Result: ####
1. Pass.
2. Pass.

### Test Case: Reading a Task ###

#### Steps: ####
1. Go to the home page by clicking on the home/tasks button.

#### Expected Results: ####
1. The already existing tasks are displayed with all the necessary data.

#### Result: ####
1. Pass.

### Test Case: Add a Note to a Task ###

#### Steps: ####
1. Go to the home menu by clicking on the tasks/home button.
2. Click on the task you want to add a note for.
3. Scroll down and under the task enter the text you want to add.
4. Press the submit button.


#### Expected Results: ####
1. The tasks are displayed.
2. The selected task displayed.
3. User can see the textfield for the note.
4. The note added to the selected task.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.
4. Pass.

### Test Case: Edit a Note ###

#### Steps: #####
1. Go to the home menu by clicking on the tasks/home button.
2. Click on the task that the note you want to edit is related to.
3. Scroll down and under the task on the note, click on the three dots, edit button.
4. Change the note.
5. Press the save button.

#### Expected Results: ####
1. The tasks are displayed.
2. The selected task displayed.
3. User can see the note and when clicked, redirected to the editNote page.
4. User can change the content of the textfield.
5. User is redirected to the task page, the updated note is displayed.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.
4. Pass.
5. Pass.

### Delete a note ###

#### Steps: #####
1. Go to the home menu by clicking on the tasks/home button.
2. Click on the task that the note you want to delet is related to.
3. Scroll down and under the task on the note, click on the three dots, delete button.

#### Expected Results: ####
1. The tasks are displayed.
2. The selected task displayed.
3. User can see the note and when deleted, redirected to the task page.

#### Result: ####
1. Pass.
2. Pass.
3. Pass.

## Bugs ##

### User could set the deadline in the future ###
* Solved by adding validate_deadline method and raise an error.

### A note was assined for all the tasks ###





