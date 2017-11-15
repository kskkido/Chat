module.exports = {
	extends: 'airbnb',
	env: {
		'browser': true,
		'node': true
	},
	rules: {
		"react/jsx-indent": [2, 'tab'],
		'quote-props': [1, 'consistent-as-needed'],
		'no-cond-assign': [2, 'except-parens'],
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'semi': [2, 'never'],
		'no-unused-vars': 1,
		'no-console': 0,
		'comma-dangle': [0, {'functions': 'never'}],
		'no-confusing-arrow': 0,
		'function-paren-newline': [2, 'multiline']
	}
}
