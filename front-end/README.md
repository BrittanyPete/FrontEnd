                                                Read Me!



                                        ☝️ Proposal

What problem does your app solve?
Anywhere fitness allows instructors and clients to be able to have fitness classes anywhere they want.
Be as specific as possible; how does your app solve the problem?
Our instructors can create classes, edit, and monitor the classes. Our clients can browse classes, and reserve their spot in the class.
What is the mission statement?
Allow people to be able to attend a fitness class anywhere they want to!

                                        💡 Features

What features are required for your minimum viable product?
Client can register/login
Instructor can register/login
Both given an onboarding walk through of how to use the site.
Instructors can create, update and delete a class.
Client can search for classes.
Client can reserve a spot in a class or cancel their reservation.
What features may you wish to put in a future release?
A way to pay. 
What do the top 3 similar apps do for their users?
Chat with a coach
Provide a training calendar
Provide descriptions of classes before logging in
🛠 Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
Express and Knex
Do the APIs you need require you to contact them to gain access?
no
Are you required to pay to use said API(s)?
No
                                
                                🎯 Target Audience

Who is your target audience? Be specific.
Our target audience is anyone who would like to be able to work out without the need of going to the gym. 
What feedback have you gotten from potential users?
People are excited to have a way to sign up for a class and attend with other people, but not have to go to the gym. They like the idea of being able to do their workout class at the park, in their garage, or on the top of a mountain.
Some people are worried about having to miss a class they sign up for, and want to be able to cancel their reservation and move it to another class.
Have you validated this problem and your solution with a target audience? Describe how.
Yes, we give our clients the opportunity to cancel their reservations. Our clients are welcome to sign up for any class they’d like to.

                                🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features?
2-3 days, as long as we are able to access the correct data from the backend.
Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
If there is enough time, absolutely!


                        --------- FOR THE DEVS------------ 


You can check out the product canvas here: 

https://www.notion.so/Anywhere-Fitness-fc0ac268df284aaf8db3ae1913fa3134

Guide to set up things for build week: 

https://www.notion.so/Build-Week-Student-Guide-Full-time-1995e4ff529e40db9f240f46c3d2afd3

                                       ---Anywhere Fitness---

                                               Pitch


These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.

While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.

Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.



                                     -------  MVP ---------

1. User can create/register as a client and login with the registered credentials.

2. User can create/register as an instructor by entering an additional Auth Code during signup, and can login with the registered credentials.

3. client and instructor are both presented with the appropriate on-boarding walkthrough on first sign-in, with an option to skip it.

4. Authenticated Instructor can create update and delete a class. At a minimum, each class must have the following properties:

        -Name
        -Type
        -Start time
        -Duration
        -Intensity level
        -Location
        -Current number of registered attendees
        -Max class size

5. Authenticated client can search for available classes. At a minimum, they must be able to search by the following criteria:

        -class time
        -class date
        -class duration
        -class type
        -intensity level
        -class location

6. Authenticated instructor can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)

7. Authenticated user can reserve a spot in a class with available seats open, and can reschedule or cancel their current reservation from the mobile app.



                                     ???------ Sprint ------???

 1.) Implement payments using PayPal, Stripe or another 3rd party API.




----------------- CRA READ ME ------------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
