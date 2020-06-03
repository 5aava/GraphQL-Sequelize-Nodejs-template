module.exports = {
	'env': {
	  'browser': true,
	  'es6': true,
	  'node': true
	},
	'extends': [],
	'globals': {
	  'Atomics': 'readonly',
	  'SharedArrayBuffer': 'readonly'
	},
	// 'parser': 'babel-eslint',
	'parserOptions': {
	  'ecmaFeatures': {
		'jsx': true
	  },
	  'ecmaVersion': 2018,
	  'sourceType': 'module'
	},
	'plugins': [],
	'rules': {
	  'linebreak-style': ['error', 'unix'],
	  'semi': ['error', 'always'],
	  'comma-dangle': ['error', 'always-multiline'],
	  'no-console': 'off',
	  'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 2}],
	  'curly': [2, 'all'],
	  'operator-linebreak': [2, 'after'],
	  'quotes': [2, 'single'],
	  'no-multi-str': 2,
	  'no-mixed-spaces-and-tabs': 2,
	  'no-trailing-spaces': 2,
	  'brace-style': [2, '1tbs', {'allowSingleLine': true}],
	  'keyword-spacing': [2, {}],
	  'space-infix-ops': 2,
	  'space-before-blocks': [2, 'always'],
	  'eol-last': 2,
	  'space-before-function-paren': [2, 'always'],
	  'array-bracket-spacing': [2, 'never', {'singleValue': false}],
	  'space-in-parens': [2, 'never'],
	  'no-multiple-empty-lines': 2,    
	  'space-unary-ops': [2, {'nonwords': false, 'overrides': {}}],
	}
  }