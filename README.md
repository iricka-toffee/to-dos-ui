# to-dos-ui

Demonstrates a Test-Driven Development approach on how to develop a React web app using MobX and Cypress.  

## Prerequisites

- [API](https://github.com/TourmalineCore/to-dos-api)
- [Docker](https://www.docker.com/get-started/) (needed for VSCode Dev Containers and TS types generation)
- [VSCode](https://code.visualstudio.com/) (optional but highly recommended due to its Dev Containers)
- [VSCode Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Node.js](https://nodejs.org/en) (version 20.11.1 was used but it should be also fine with some older versions)

## Start

If you open this project in VSCode please install Dev Containers extension and agree to re-open this project's folder in it with installing all the rest of recommended extensions.

```bash
# run once to install dependencies
npm ci

# to run the web site
npm start

# to run linting
npm run lint

# to run unit tests
npm run test

# to re-generate TypeScript types by locally running API
npm run generate-api-types

# to open Cypress
npm run cypress:open
```

## React + TypeScript + Vite (as it was created by npm create vite@latest to-dos-ui -- --template react-ts)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

>Note: ESLint configuration was tuned and different from the template default setup

## Env (for future)

Useful refs on how to build docker image with this UI and make its env configurable at docker run:
- https://stackoverflow.com/a/78156859
- https://vitejs.dev/guide/env-and-mode
