module.exports = {
  root: true,
  extends: ['@react-native'],
  rules: {
    'object-curly-newline': [
      'error',

      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    'array-element-newline': ['error',
'always'],
    semi: ['error', 'never'],
  },
}
