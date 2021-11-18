# TRIVIA CHALLENGE

This is a small application to show how I would structure a React and Redux project.


# TECHNOLOGIES USED

The technologies used were:-

 - **Next.js with Typescript**
 - **Redux Toolkit instead of just Redux**
 - **CSS Modules**

## Reasons behind the above choices
I could have easily used used **Create React App** but chose to use **Next.js** since it came with configurations out of the box that met the requirements of the project. These configurations were a router which would be sufficient for the project, out of the box support for **CSS Modules** and **Sass**, out of the box image optimization.

I went for **Redux Toolkit** because it seemed to reduce the **Redux** boilerplate to get started and also because it is now the recommended way to write **Redux** applications.

I considered using **styled-components** but chose **CSS Modules** because I could use CSS pre-processors, clean code as CSS and JS/TS code are separated, from my research **CSS Modules** seemed to provide faster rendering than **styled-componenents** but injecting JS logic into CSS was really tempting.

# Project Structure

I partioned the application into the following major areas inside the src folder:-

 1. app
 2. components
 3. features
 4. pages
 5. styles
 6. utils

I will discuss each of the above in the following sections.

## 1. App

Inside this folder is the redux store and commonly used hooks.

## 2. Components

Inside this folder are UI components, it includes simple UI components like buttons to complex ones like progress bars. The CSS module files to the corresponding componenets are also found here.

## 3. Features

Inside this folder are folders relating to the features we have in our application and the redux slices involved with the feature's state. In our case, we have a **questions** folder since our app has a quiz feature. In the **questions** folder, we have a slice to define the state structure of the questions and the reducers and actions to manipulate the questions state. 

We also have other files defining feature interactions for the questions. These feature interactions are setting the quiz questions, answering the quiz questions and scoring the quiz. These use the components in the **components** folder as building blocks. 

## 4. Pages

The pages folder contains the routes of the application. The files inside this folder use the components in the **features** folder as building blocks.

## 5. Styles

This folder contains the global css file, in this file we have global styles that can be used all over the app. 


# Demo

The demo to this application is hosted on Heroku. I did not turn off **Redux Devtools** so that one can be able to see the state and its changes.

You can view the demo of the app **[here](https://quiz-app-next-22.herokuapp.com/)**

Thank you!!