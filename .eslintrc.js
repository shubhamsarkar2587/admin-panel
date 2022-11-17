module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard'
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		semi: ['error', 'always'],
		// suppress errors for missing 'import React' in files
		'react/react-in-jsx-scope': 'off',
		// eslint-disable react/prop-types
		'react/prop-types': 'off',
		indent: [2, 'tab'],
		'no-tabs': 0
	}
};
