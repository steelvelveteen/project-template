# A front end template setup with Tyepscript, scss and webpack

## Configuring airbnb for a non-reactjs project

**Prettier** A code formatter used here for Typescript

Packages:

1. `npm install --save-dev eslint eslint-config-airbnb-base @typescript-eslint/eslint-plugin @typescript-eslint/parser`

2. Optionally `npm install --save-dev eslint-plugin-jest`

3. `npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

4. eslintrc.json must know where to find the `tsconfig.json` configuration file. This is set in the `parserOptions` section: `"project": ["tsconfig.json"]`

5. Add scripts to format and lint: `"format": "prettier --write src/**/*.ts{,x}"` and `"lint": "tsc --noEmit && eslint src/**/*.ts{,x}"`

6. Add a `.prettierignore` file to exclude build, dist and public directories