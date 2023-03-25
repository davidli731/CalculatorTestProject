# Calculator Test Project

## Overview
A lightweight Express API for handling simple calculations.

### Technologies
* Node.js (version 14.17.1)
* TypeScript (version 4.4.4)
* Express (version 4.18.2)

## Dev Installation

Install node from [here](https://nodejs.org/en/download/).

Install TypeScript as a global module using the command `npm i -g typescript` and verify it was installed by running `tsc -v`.

Within the root directory of the repo, run the command `npm install` to install the project dependencies.

## Running the API locally

Run the command: `npm run dev`.

The port for the local server is 3000.

Using an API platform such as Postman, you may use the following API calls:
[GET] http://localhost:3000/api
[POST] http://localhost:3000/api/addition
[POST] http://localhost:3000/api/subtraction
[POST] http://localhost:3000/api/multiplication
[POST] http://localhost:3000/api/division

To perform a post request to the API endpoint, it will require a JSON payload to be sent in the format of the following, replacing 'X' with a number value:
`{
    "numInputOne": X,
    "numInputTwo": X
}`

## License
[MIT](https://choosealicense.com/licenses/mit/)
