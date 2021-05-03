# Dynamo Task

## Table of Contents

1. [Purpose](#purpose)
2. [Requirements](#requirements)
3. [Getting Started](#getting-started)
4. [Application Structure](#application-structure)
5. [Application Structure](#client-application-structure)
7. [URL WHICH PROVIDES THE INTIAL ROUTE WHICH IS LOGIN](#component-which-logs-in)
8. [URL WHICH PROVIDES TO SIGNUP or REGISTER](#component-which-registers-users)
9. [URL WHICH PROVIDES THE LIST OF LAUNCHES](#component-which-provides-launches)
10. [URL WHICH PROVIDES THE LIST LAUNCHES BY ID](#component-which-provides-launches-by-ids)


## Purpose

It is a task to develop a single page application with displaying all Rocket launches and its details

## Requirements

- node
- npm

## Getting Started

To get Started please follow the below Requirements
[requirements](#requirements), you can follow these steps to get the project up and running:

```window
$ git clone "https://github.com/karthick-krishnan/Dynamo-task.git"
$ npm install                      # Install all the dependencies
$ npm start                        # Compile and launch the application
```

##  Application Structure
```
├── public                  # Main module which contains all html,css and javascript files
├── src                     # Main module which contains all the React/Redux implimentation with routing

```
## client Application Structure
```
├── components               # module which contains all components
├── actions                  # module which contains the business logics/actions to pass through reducers
├── reducers                 # Module which contains all the reducers which receive the state
├── store                    # Module which contains all the stores which recieves all the state from reducers
├── utils                    # Module which has the utilities of the project
├── assests                  # Module which has all the images
```


## URL WHICH PROVIDES THE INTIAL ROUTE WHICH IS LOGIN

- **::** <http://localhost:3000/>

Login Module which provides the user to login. The datas are saved through firebase authentication techniques

```

```

## URL WHICH PROVIDES TO SIGUP or REGISTER

- **::** <http://localhost:3000/register>

  ```json

Register Module which provides the user to register. The datas are saved through firebase authentication techniques
  
  ```


```

## URL WHICH PROVIDES THE LIST OF LAUNCHES

- **::** <http://localhost:3000/launches>

  ```json

launches component which provides the list of rocket launchers list and by clicking it you can view the details.
  
  ```


```

## URL WHICH PROVIDES THE LIST OF LAUNCHES

- **::** <http://localhost:3000/launches/1>

  ```json

launches component with id which provides the details of rocket launchers list over here we can view the video of launchers
  ```
  
  
  

## Get requests API Exceptions

Error code |                         Error Message
---------- | :-----------------------------------------------------------:
400        |                    Invalid Input
401        |                    Unauthorized
403        |                    User is not authorized to access this resource with an explicit deny
500        |                    FAILED



# Tables
No tables are required