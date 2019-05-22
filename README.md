Project "Github-CV" is a React application developed by Marek Kotajny as resolution of Javascript Challenge (for React Developer).

## Running application on the web
"Github-cv" is deployed on web server - works on [http://github-cv.surge.sh](http://github-cv.surge.sh) .


## JS challenge specification
- Please implement a Javascript one-page-application that lets users build a github
resumé similiar to http://resume.github.io/
- Create a landing page where the user can enter his or her github account
- Implement a “generate button” on the landing page that starts processing the
previously entered account name and shows a result view to the user (the
generated resumé)
- The result view shows a summary showing which programming languages the
github account owner has used in his/her repository. That is sufficient. Feel free to
add more statistics or to aggregate more data if you wish to.  
- Implement a model that connects the data to the given HTML / Javascript
template. 
- Make sure to use the github API, please don't start parsing web pages manually


## Key features of the application

### features from user perspective
- logo (as favicon)
- Landing Page with simple text-field input (for github account) and with "GO" (start of cv creation) button
- simple CV page - which generates CV (via github API) 
- navigation between landing page and CV page
- "home" button in the left-upper corner of CV page
- "spinner" for tracking progress of gathering data via github api
- error handling - modal window with eventual error messages
- responsive layout of landing and cv pages (layout adapts for multiple display-widths)
 
### features from developer perspective
- react-router (configured in App.js) 
- proptypes in almost all components


## log history in the repository
All commits in the repository refers to github issues (tasks or user stories):
https://bitbucket.org/mkotajny/github-cv/issues


## I've run `npm run eject` in the project
The consequence is bunch of dependencies listed in the package.json file.
I've decided to run "eject" mostly for setup [CSS-modules](https://medium.com/@dannyhuang_75970/how-to-setup-css-modules-in-create-react-app-a03b65e14746) in the application.


## no Redux
- Imho state management in this application is quite simple, so I've decided to use standard react state instead of Redux (and Redux-thunk or Redux-saga for asynchronous operations like communication with Github API). Anyway, if I should implement Redux solutions, then please let me know then I will (refactor) enhance the application :)


## way of communication with github API
This chapter describes  "... a model that connects the data to the given HTML / Javascript
template .." (mentioned in the JS challenge). 

### first solution
First I've implemented HoC solution described in this article - "How to fetch data in Higher-Order Components": https://www.robinwieruch.de/react-fetching-data/
Than I've changed my mind :) and refactored code for other, current solution (described below)

### second (current) solution
The logic of gathering data from github and creation of cv is chained in Components:

#### ApiDataCollector
This component contains logic of gathering data via github API.
Asynchronous operations are handled with axios and es6 async/await.
The component sends request (url is taken from props.url) and passes the results into parent component.

#### CvDataCollector
(Parent for ApiDataCollector).

Based on list of github urls (different requests e.g. /users , users/repos etc.) received from props, CvDataCollector runs (for all requests) ApiDataCollector component and collects all responses (json data sets) as one, aggregated datasource.

#### CvGenerator
(Parent for CvDataCollector).

This component manages different scenarios:
a) invokes CvDataCollector with the progress-spinner
b) or invokes CvContainer component for creation of CV content (if all data from github api has been gathered)
c) or shows error if something went wrong with scenario b)

#### CvContainer
(Child of CvDataCollector).

This components receives (with props) data from CvGenerator and creates CV content (also by rendering other child CV-content components)

## Summary
I was doing my best by creating this project, but of course I'm aware, that they are better solutions (compare to mine) in similar React applications. I cannot wait to quickly learn and adapt to best practices used in your teams ... as your future contractor I hope :)
