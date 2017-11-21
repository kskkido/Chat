module.exports = {
	extends: 'airbnb',
	env: {
		'browser': true,
		'node': true
	},
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'quote-props': [1, 'consistent-as-needed'],
		'no-cond-assign': [2, 'except-parens'],
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'semi': [2, 'never'],
		'no-unused-vars': 1,
		'no-console': 0,
		'comma-dangle': [0, {'functions': 'never'}],
		'no-confusing-arrow': 0,
		'function-paren-newline': [2, 'multiline'],
		'import/extensions': 0,
		'import/no-unresolved': 1,
		'import/no-extraneous-dependencies': 0,
		'no-use-before-define': ['error', { 'functions': false }]
	}
}
