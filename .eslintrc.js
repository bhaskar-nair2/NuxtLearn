module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'plugin:es-beautifier/standard'],
	plugins: ['es-beautifier'],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'import/no-unresolved': 0,
		quotes: ['error', 'single'],
		'no-param-reassign': 0,
		'no-underscore-dangle': 0,
		eqeqeq: ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'linebreak-style': 'off',
		semi: 'off',
		'vue/singleline-html-element-content-newline': 'off',
		indent: 1,
		'no-trailing-spaces': 1,
		'vue/html-self-closing': 1,
		'no-unused-expressions': 1,
		'no-labels': 1,
		'arrow-parens': 1
	}
};
