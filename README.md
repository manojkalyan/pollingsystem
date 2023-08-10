# Polling System API

Welcome to the Polling System API! This API allows users to create, manage, and interact with polls and their options. It's built using Node.js, Express.js, and MongoDB.

# Project Structure
- app
  - controllers
    - questionController.js
    - optionController.js
  - models
    - Question.js
    - Option.js
  - routes
    - questionRoutes.js
    - optionRoutes.js
- config
  - database.js
- index.js
- README.md


# API Endpoints
Here are the available API endpoints:

# Create a Question:

Method: POST
URL: http://localhost:3002/api/v1/questions/create

# Add an Option to a Question:

Method: POST
URL: http://localhost:3002/api/v1/options/:id/create

# Delete a Question:

Method: DELETE
URL: http://localhost:3002/api/v1/questions//delete/:id

 # View a Question:

Method: GET
URL: http://localhost:3002/api/v1/questions/view/:id
  
# Add vote
Method : GET
URL: http://localhost:3002/api/v1/options/:id/add_vote

# Delete a Options:

Method: DELETE
URL: http://localhost:3002/api/v1/options/delete/:id

# Create a Question image:
![Screenshot (14)](https://github.com/manojkalyan/pollingsystem/assets/70328306/c7675337-36b6-4c23-928c-57a7a2e1ffdd)
# Add an Option to a Question Image:
![Screenshot (15)](https://github.com/manojkalyan/pollingsystem/assets/70328306/39273b53-d066-40e5-927d-b9a00d487bfa)
![Screenshot (16)](https://github.com/manojkalyan/pollingsystem/assets/70328306/08440420-0d1a-44f9-916c-39fabd00d755)
# Add vote image:


![Screenshot (18)](https://github.com/manojkalyan/pollingsystem/assets/70328306/70eac62f-9545-407c-8729-9d50f51cfb7f)
![Screenshot (17)](https://github.com/manojkalyan/pollingsystem/assets/70328306/f28cfda5-8680-4a72-a8bb-67196725ec68)


