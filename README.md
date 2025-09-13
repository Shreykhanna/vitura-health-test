## Project Setup

## Table of contents

- Setup steps
- Statement management choice and why
- Trade-Off's due to time limit
- What would be done differently in production

## ENV

- Create a `.env` file in **backend** folder.
- Copy the variables from the corresponding `.local.example` file into your `.env` file.

## Setup Steps

### 1. Clone the repository locally

```bash
  git clone <repository-url>
  cd <repository-folder>
```

### 2. Navigate to the backend folder and install dependencies:

```bash
  cd backend
  npm install
```

### 3. Start the backend server:

```bash
  npm run dev
```

The backend server will run on http://localhost:5000

## Frontend Setup

#### Prerequisites

Node.js & npm

Steps

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies: `npm install`

3. Start the frontend server: `npm start`

The frontend will run on http://localhost:3000.

## Running the Application

1. Start the backend server `npm run dev`.

2. Start the frontend web application `npm start`.

3. Access the application at http://localhost:3000.

## Tests

The backend of the application has been covered with unit tests

1. To run test navigate to the backend folder `cd backend` and run `npm test`

## State management choice and why

For state management I would use mobx because

1. Mobx offers simplicity as it uses observable state and automatic reactivity, so we write less boilerplate code than Redux.
2. State updates are direct in comparison with Redux as it required dispatching actions and writing reducers.
3. Mobx only re-renders those components whose state changes but redux sometimes caused multiple frequent re-renders.

## Trade-off's due to time limit

1. Apply caching so that the API's are only called when data changes else should fetch data from cache.
2. Providing options to sort each column data in alphabetical order sorting to allow users to sort data in ascending or descendin order when required.
3. Desiging could have been done in a more better way.
4. Unit tests for new filter.
5. Adding abort controller for api requests cancellation.

## What would be done differntly in production

1. Use indexing in production database for search by public name and filter by admin and doctor and new filter.
2. Apply caching so that the API's are only called when data changes else should fetch data from cache.
3. Add JWT authentication to allow authorise access to the data.
