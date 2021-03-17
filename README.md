# YFII / DFI.MONEY

DFI.MONEY

## Stack

This project is initialized with [Create React App](https://github.com/facebook/create-react-app) consisting of:

- React (16+)
- react-scripts (createReactApp)
- react-testing-library (not Enzyme)
- react-router-dom
- react-i18next
- styled-components
- styled-reset
- rebass
- polished
- ESLint (instead of deprecated TSLint)
- Prettier
- react-deploy-sftp

## Get Started

### Make sure you run Node.js v10+

To install check ([Node.js installation](https://nodejs.org/en/) or [Node Version Manager installation](https://github.com/nvm-sh/nvm)).

### `yarn install` (or `npm install`)

Note: this project is initialized with [Yarn]() and it's recommended to use it,<br>
but instead you could also use `npm` for all scripts and please remove the yarn.lock file if you do so.

## Development Scripts

In the project directory, you can run:

### `yarn start` (or `npm start`)

Runs the app in the development mode.<br>Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br>You will also see any lint errors in the console.

### `yarn typecheck` (or `npm run typecheck`)

Launches the typescript check for code to check for TypeScript compilation errors or warnings.

### `yarn lint` (or `npm run lint`)

Launches the linter for code to check for code layout errors or warnings.

### `yarn lint:fix` (or `npm run lint:fix`)

Launches the linter for code to check for code layout errors or warnings, and fixes the ones that can be fixed automatically.

### `yarn test` (or `npm run test`)

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Production Scripts

### `yarn build` (or `npm run build`)

Builds the app for production to the build folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy` (or `npm run deploy`)

Deploys the app to the remote host using ssh/sftp. See configuration file react-up.example.json.

Edit react-up.example.json and save it as react-up.json.

### `yarn deploy:dev` (or `npm run deploy:dev`)

Deploys the app to the development remote host using ssh/sftp. See configuration file react-up.example.json.

Edit react-up.example.json and save it as react-up.json.

For more information visit [react-deploy-sftp](https://github.com/aido179/react-deploy-sftp).
