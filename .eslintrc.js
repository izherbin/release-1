/* eslint-disable prettier/prettier */
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', "airbnb/rules/react", "plugin:prettier/recommended"],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    "react/prop-types": 0,
    'max-len': ['error', 100],
    'no-underscore-dangle': ['error', { allow: ['_id','_embedded'] }],
    'no-mixed-operators': 'off',
    'import/no-unresolved': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        printWidth: 100,
      },
    ],
  },
};