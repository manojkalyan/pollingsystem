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















