# Newton Backend
## Description
Christopher Huynh's solution to Paycor's Programming Challenge. This project will make requests to OMDb API and return results to the client. This project was built under the assumption that the OMDb API will always return successful messages 
## Installation
1. `npm install`
## Usage
1. Populate the api key into the `.env` file
2. `npm start`
## Future Enhancements / Questions to Stakeholders
If this was an ongoing project, here are some items I would reach out to stakeholders and gauge their feedback for future enhancements
1. Allowing different search phrases
2. Pagination of results vs. composite of all search results
3. Written in TypeScript
4. Error Handling for things like incorrect parameters passed, HTTP 400s/500s from the OMDb API and being able to pass those errors back instead of 200s
5. Setting an environment that allows for secrets to be securely handled
6. Better utilization of Unit Test/writing in TDD approach - could have been written in a much more testable manner which would result in much more modular code