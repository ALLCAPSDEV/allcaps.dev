module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "overrides": [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    "plugins": ["svelte3", "prettier", "jest"],
    "extends": ["eslint:recommended", "prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error"
    }
};