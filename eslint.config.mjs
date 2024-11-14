// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'import/prefer-default-export': ['off'],
    'import/no-default-export': ['off'],
    'import/no-cycle': ['off'],
    'import/order': ['error', { groups: [['builtin', 'internal']] }],
    'class-methods-use-this': ['off'],
    'arrow-body-style': ['off'],
    'max-len': ['off'],
    'newline-before-return': ['error'],
    'no-param-reassign': ['off'],
    'prefer-destructuring': ['off'],
    'no-bitwise': ['off'],
    'no-lonely-if': ['off'],
    'no-underscore-dangle': ['off'],
    'func-names': ['off'],
    'no-continue': ['off'],
    'no-useless-return': ['off'],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
    'default-case': ['off'],
    'curly': ['error', 'all'],
    'function-paren-newline': ['off'],
    'function-call-argument-newline': ['off'],
    'no-await-in-loop': ['off'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-loss-of-precision': ['off'],
    '@stylistic/lines-between-class-members': ['off'],
    '@stylistic/indent': ['off'],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    '@typescript-eslint/no-loop-func': ['off'],
    '@stylistic/type-annotation-spacing': 'error',
  },
})
