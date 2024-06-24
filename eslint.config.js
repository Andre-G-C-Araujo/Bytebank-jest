const { Linter } = require('eslint');
const linter = new Linter();

const config = {
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    parser: "@babel/eslint-parser", 
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        },
        requireConfigFile: false
    },
    plugins: [
        "react",
        "import",
        "jsx-a11y"
    ],
    env: {
        es6: true,
        browser: true,
        jest: true,
        node: true
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
