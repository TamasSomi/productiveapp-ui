# Poductive App #

[Click here to visit the live page.](https://productive-app-ui-80cca270cd7d.herokuapp.com/)

[Click here to visit the Github repository.](https://github.com/TamasSomi/productiveapp-ui)

[Click here to visit the API Github repository.](https://github.com/TamasSomi/productive-app)

![Responsive screenshot of the home page.](/src/assets/docs/responsive-screenshot-homepage.png)


This page is a very simple productivity app where user could create tasks, write notes for the tasks and set deadline, upload img. Built only for learning purposes.

[Click here to read the user stories on Github Issues](https://github.com/users/TamasSomi/projects/7)

[Click here to read the API user stories on Github Issues](https://github.com/TamasSomi/productive-app/issues)

## Objective ##

The objective of the page is that people are able to create tasks with deadline so it can help to manage the dayli tasks.
The site allows people to add notes to the tasks so they can use notes like labels and they can add images as well. 
Those could be motivational or something else they would like to add.

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

* Implement 2 models on top of profile/user.
* Task for user to create the task, be able to add image, title content and deadline.
* Note related to task model, to add additional note to tasks.

### Sketches ###

* Home page:

![Home page sketch](/src/assets/docs/home-sketch.png)

* Task page:

![Task page sketch ](/src/assets/docs/task-page-sketch.png)

## Authentication ##

### Registration ###

* To register click on the sign up button in the nav bar.
* Fill the form with a valid user name and password.
* Click on sign up under the form.

![Sign up screenshot](/src/assets/docs/sign-up.png)

### Sign In ###

* To sign in (after you have a profile created) click on the Sign in button in the nav bar.
* Fill the form with your user name and password.
* Click on sign in button under the form.

![Sign in screenshot](/src/assets/docs/sign-in.png)

### Sign Out ###

* To sign out, click on the sign out button on the top of the page.

## User interface after logging in ##

### Create a task ###

* To create a task click on the add task button on the top of the page.
* Fill out the form with valid data and click on Create.

![Add a task screenshot](/src/assets/docs/task-create.png)

### Edit or delete a task ###

* To edit or delete a task, click on the task from the home page.
* Click the 3 dots on the task.
* To delete the task click on the delete icon.
* To edit a task click on the edit icon and fill the form with the updated data.
* click the save button.

![Task edit, delete screenshot](/src/assets/docs/task-delete-edit.png)

### Create a note ###

* To create a note click on a task you wish to add a note to and under the task, fill the text area with your note.
* Click on the submit button.

![Create a note screenshot](/src/assets/docs/note-create.png)

### Edit or delete a note ###

* To delete a note from the home page click on the task. Scroll done to the note and click the three dots.
* Click on the delete icon.
* To edit a note after you clicked the three dots, click on the edit icon.
* Enter the updated note to the text field.
* Click the save button.

![Edit or delete a note screenshot](/src/assets/docs/note-delete-edit.png)

## Technology Used ##

Used technologies during development:

* [Github](https://github.com/)
* [Codeanywhere](https://codeanywhere.com/)
* [Heroku](https://dashboard.heroku.com/)
* [Django Allauth](https://docs.allauth.org/en/latest/#)
* [ElephantSql](https://www.elephantsql.com/)
* [Moqups](https://moqups.com/)
* [LightHouse](https://developer.chrome.com/docs/lighthouse/overview)
* [Cloudinary](https://cloudinary.com/)
* [Favicon](https://favicon.io/)

### Languages/Frameworks Used ###

* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [ReactJS](https://react.dev/)
* [React-Bootstrap](https://react-bootstrap.netlify.app/)
* [Django-Rest](https://www.django-rest-framework.org/)

## Reusable React Components ##

### Three Dots Edit Delete Dropdown Menu ###

* Based on the Moments walkthrough project 'MoreDropdown' component, I have utilised the same idea in my project.
The component allows the user to click on the three dots and there will be available two icons, to delete or edit a task or note.

### Format deadline ###

* formatDeadline can be a reusable function. I wrote it specifically to format the deadline that's why the name but giving it a different name would be enough to make it reusable.


### Confirmation modal ###

* I used React confirmation modal for defensive design. I've used this component for data deletion.
The user is asked if are they sure that they want to delete the task/note.

# Manual Test

## Test Case: Registration

| **Steps**                              | **Expected Results**                       | **Result** |
|----------------------------------------|--------------------------------------------|------------|
| 1. Navigate to the registration page. | 1. The registration page is displayed.      | Pass.      |
| 2. Fill in all required fields with valid data. | 2. All fields accept valid input.       | Pass.      |
| 3. Click the register button.           | 3. User is redirected to the homepage.     | Pass.      |

## Test Case: Login

| **Steps**                                        | **Expected Results**                       | **Result** |
|--------------------------------------------------|--------------------------------------------|------------|
| 1. When logged out, click on the Sign In button. | 1. The login page is displayed.             | Pass.      |
| 2. Fill in the fields with an existing username and password. | 2. All fields accept valid input. | Pass.      |
| 3. Press the Sign in button.                      | 3. User is redirected to the home page.     | Pass.      |

## Test Case: Logout

| **Steps**                         | **Expected Results**                       | **Result** |
|-----------------------------------|--------------------------------------------|------------|
| 1. When logged in, click on the Sign Out button. | 1. The home page is displayed. User is logged out. | Pass.      |

## Test Case: Create a Task

| **Steps**                                          | **Expected Results**                       | **Result** |
|----------------------------------------------------|--------------------------------------------|------------|
| 1. Go to the add a task page by clicking on the add task button when signed in. | 1. User redirected to the create task page. Form displayed with fields of title, content, deadline, and add image. | Pass.      |
| 2. Fill the task form with valid data.              | 2. The form accepts only valid data. All fields required. | Pass.      |
| 3. Press the create button.                         | 3. User is redirected to the home/tasks page. The new task is displayed on top. | Pass.      |

## Test Case: Edit a Task

| **Steps**                                        | **Expected Results**                       | **Result** |
|--------------------------------------------------|--------------------------------------------|------------|
| 1. Go to the dashboard by clicking on the home or tasks button. | 1. Existing tasks displayed on the home/tasks page. | Pass.      |
| 2. Click on one of your tasks and on the three dots, click the edit icon. | 2. User redirected to the edit_task page. Form displayed with fields of name, title, content, deadline, and add image. | Pass.      |
| 3. Change the data.                               | 3. User is able to change the desired field with valid data. | Pass.      |
| 4. Press the save button.                         | 4. User is redirected to the dashboard, and the task is displayed with the updated data. | Pass.      |

## Test Case: Delete a Task

| **Steps**                                          | **Expected Results**                       | **Result** |
|----------------------------------------------------|--------------------------------------------|------------|
| 1. Go to the home page by clicking on the tasks/home button. Click on a task. | 1. Tasks are displayed on the page.         | Pass.      |
| 2. Click the three dots, delete icon on the task.  | 2. User is redirected to the home page. The deleted task is not displayed anymore. | Pass.      |

## Test Case: Responsiveness Test

| **Steps**                                     | **Expected Results**                       | **Result** |
|-----------------------------------------------|--------------------------------------------|------------|
| 1. Access the website with a desktop computer. | 1. The website is fully displayed with all content and features accessible and usable. | Pass.      |
| 2. Open up the devtool and set all the available devices. | 2. All elements function as expected on both desktop and mobile versions. | Pass.      |

## Test Case: Reading a Task

| **Steps**                                     | **Expected Results**                       | **Result** |
|-----------------------------------------------|--------------------------------------------|------------|
| 1. Go to the home page by clicking on the home/tasks button. | 1. Already existing tasks are displayed with all the necessary data. | Pass.      |

## Test Case: Add a Note to a Task

| **Steps**                                          | **Expected Results**                       | **Result** |
|----------------------------------------------------|--------------------------------------------|------------|
| 1. Go to the home menu by clicking on the tasks/home button. | 1. Tasks are displayed.                    | Pass.      |
| 2. Click on the task you want to add a note for.   | 2. Selected task displayed.                | Pass.      |
| 3. Scroll down and under the task, enter the text you want to add. | 3. User can see the textfield for the note. | Pass.      |
| 4. Press the submit button.                        | 4. The note is added to the selected task.  | Pass.      |

## Test Case: Edit a Note

| **Steps**                                          | **Expected Results**                       | **Result** |
|----------------------------------------------------|--------------------------------------------|------------|
| 1. Go to the home menu by clicking on the tasks/home button. | 1. Tasks are displayed.                    | Pass.      |
| 2. Click on the task that the note you want to edit is related to. | 2. Selected task displayed.            | Pass.      |
| 3. Scroll down and under the task on the note, click on the three dots, edit button. | 3. User can see the note, and when clicked, redirected to the editNote page. | Pass.      |
| 4. Change the note.                                | 4. User can change the content of the textfield. | Pass.      |
| 5. Press the save button.                          | 5. User is redirected to the task page, the updated note is displayed. | Pass.      |

## Delete a Note

| **Steps**                                          | **Expected Results**                       | **Result** |
|----------------------------------------------------|--------------------------------------------|------------|
| 1. Go to the home menu by clicking on the tasks/home button. | 1. Tasks are displayed.                    | Pass.      |
| 2. Click on the task that the note you want to delete is related to. | 2. Selected task displayed.            | Pass.      |
| 3. Scroll down and under the task on the note, click on the three dots, delete button. | 3. User can see the note, and when deleted, redirected to the task page. | Pass.      |


## Online tets, code cheker results ##

* Lighthouse test:

![Lighthouse test result screenshot](/src/assets/docs/lighthouse-test.png)

* No errors were returned after runing Eslint tests.
* Eslint was set up with the following rules:

![Eslint settings screenshot](/src/assets/docs/eslint-screenshot.png)

## Bugs ##

### User could set the deadline in the future ###
* Solved by adding validate_deadline method and raise an error.

### A note was assined for all the tasks ###
* Solved by parseing the note id and than map.

### When clicked on a task while loading, not permitted message was displayed. ###
* Solved by checking if loaded and added the spinner to TaskPage as well.

### Remaining Bugs ###
* The note count is not displaying the number of notes.

## Deployment ##

### Deployment to Heroku ###

* After you have created a new gitpod/codeanywhere workspace and set up the new project, you can deploy to Heroku.

* In your heroku account, select Create New App, and give it a unique name related to your project.
* Select a region corresponding to where you live and click 'Create App'.
* Go into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
* lick 'Deploy branch' to trigger Heroku to start building the application.
* When you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser.

### Fork this Project Repository ###

It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

 * Log in to GitHub
 * Locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.


### Clone this Project Repository ###

A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.

## Credit ##

* The image on the sign in and sign up page was taken from Google images.
* The No Results found image is taken from Code Institute Moments Walktrough resources.
* I used [this article](https://stackoverflow.com/questions/28061550/model-datetime-field-validation-for-fields-with-auto-now) to validate the deadline input.
* I used Code Institute's Moments walktrough project as an example during development.
* I used a color palette from [color-hex](https://www.color-hex.com/color-palette/4611).



