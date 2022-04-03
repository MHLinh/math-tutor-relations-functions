# Math Tutor - Relations and Functions
This repository contains the code for the Math Tutor - Relations and Functions application. The application was created for the Individual Project 6CCS3PRJ 2021-2022 at King's College London.

**Author:** Hoang Linh Mai

**Supervisor:**  Dr. Agi Kurucz

## Description
Math Tutor - Relation and Functions is a Single-page Progressive Web Application created using React, TypeScript, Material UI, IndexedDB, Firebase, and other open-source libraries.

The application is intended to be used to study various topics in Relations and Functions in Discrete mathematics.
* Representation of a relation
* Properties of a relation
* Warshall's algorithm for transitive closure
* Vertical line test
* Domain of a function
* Properties of a function
* Slope of a linear function
* Vertex and roots of quadratic function
* Function transformation
* Function composition

## Running the application locally
These instructions have only been tested on Windows 10, as the software was only developed on a Windows 10 machine.

### Environment set up
Environment settings used:
- Chocolatey version 0.10.15
- Node version 16.11.0
- Yarn version 1.22.5

### Instructions:
- Install Chocolatey from https://chocolatey.org/install#individual.
- Install Node from https://nodejs.org/en/download/.
- Check if both have been installed correctly with by running the following commands in command prompt or powershell:
  - `node --version`
  - `choco --version`
- Administrator in the command prompt or powershell, install Yarn with: `choco install yarn`.
- Refresh the environment
- Check if yarn has been added to environment path, if not then add in to the path.
- Check if yarn has been installed correctly with: `yarn --version`.

### Running the application
- Extract the source code zip file.
- Navigate to the root of the source code folder using a command prompt.
- Install dependencies with: `yarn install`.
- Start the application with: `yarn start`.

## Deployment
The web application was deployed using Heroku at the following url: https://relations-and-functions.herokuapp.com.

## Project structure
The following shows a high overview of the project folder structure.
```
math-tutor-relation-functions
├── public
├── src
│   ├── __tests__
│   ├── components
│   ├── pages
│   ├── theme
│   ├── utils
│   ├── App.tsx
│   ├── index.tsx
│   ├── service-worker.ts
│   └── serviceWorkerRegistration.ts
├── .eslintrc.json
├── .prettierrc.son
├── jest.config.js
├── package.json
└── tsconfig.json
```

### Public folder
The public folder contains the favicon, logo images, index.html, and the manifest of the web application.

### Src folder
The src folder contains the main application code which is split into subfolders: \_\_tests\_\_, components, pages, theme, and utils.

The **\_\_tests\_\_** folder contains the code for running the unit tests.

The **components** folder contains the code of the components that provide functionalities in the application.

The **pages** folder contains the code for the specific pages that the user can navigate to.

The **theme** folder contains the code for styling and colours of the application.

The **utils** folder contains the code for utility functions used in the components for computing relation properties, generating ordered pairs, generating matrices, compute Warshall's algorithm, etc.

The **App.tsx** file specifies the routes for each page and what should be rendered.

The **index.tsx** adds the code to the ReactDOM and connects the service worker.

The **service-worker.ts** and **serviceWorkerRegistration.ts** provide the settings for the Progressive Web Application service worker.

## Configuration files
The **.eslintrc.json** file contains configurations for eslint.

The **.prettierrc.son** file contains configurations for prettier.

The **jest.config.js** file contains configurations for Jest testing.

The **package.json** file contains application dependencies and scripts.

The **tsconfig.json** file contains configurations for TypeScript.
