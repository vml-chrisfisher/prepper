module.exports = {
  "parser": '@typescript-eslint/parser', // Specifies the ESLint parser
  "extends": [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  "overrides": [
    // Override some TypeScript rules just for .js files
    {
      "files": ['src/**/*.{js}'],
      "rules": {
        '@typescript-eslint/no-var-requires': 'off' //
      }
    }
  ]
}
