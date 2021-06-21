# Minilist

## Exercise

Given the html template and the css stylesheet we want you to build a working interface that has the following functionalities:

- List all the apps
- Paginate the list (page size = 3)
- Filter the apps as you type in the search bar
- Have all the existing categories in the left navigation sorted by alphabetic order
- Allow filtering of apps when we click on a category
- Apps should be sorted by ascending order of the sum of the plans price

## Input data

The input data should be fetched dynamically (like would you do if it was data from a REST API) from the provided json file that has a list of apps. 

Each app has:

- an identifier
- a name
- a descriptions
- one or more categories
- one or more subscriptions with a name and a price (in cents)

## Development

The application is using a JSON-Server to provide static data and it's located in `data/apps.json`

It was used a React library (with Hooks),  styled-component for styling and storybook to do a documentation about the components.

## Folder Structure

- js
  - Components - Components used in Application
- ui - Custom Theme used in application
- utils - Helpers functions

## Available Scripts

In the project directory, you can run:

### `npm install`

To install the application.

### `npm run dev`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. it loads concurrenty the frontend app and JSON-Server

### `npm run storybook`

Launches the storybook.

Open the [http://localhost:9001](http://localhost:9001) to view in the browser rhe components documentation.
