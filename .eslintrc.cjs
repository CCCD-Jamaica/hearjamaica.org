/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es6: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			processor: 'svelte/svelte',
			rules: {
				// General rules
                'no-undef': 'off', // Svelte takes care of this
                'no-unused-vars': 'off', // Prevent false positives
                // Accessibility (a11y) rules
                // 'svelte/a11y-alt-text': 'warn',
				// 'svelte/a11y-missing-attribute': 'warn',
				// 'svelte/a11y-aria-attributes': 'warn',
				// 'svelte/a11y-hidden': 'warn',
				// 'svelte/a11y-distracting-elements': 'warn',
				// 'svelte/a11y-img-redundant-alt': 'warn',
				// 'svelte/a11y-incorrect-aria-attribute-type': 'warn',
				// 'svelte/a11y-invalid-attribute': 'warn',
				// 'svelte/a11y-missing-content': 'warn',
                // 'svelte/a11y-anchors': 'warn',
                // 'svelte/a11y-autofocus': 'warn',
                // 'svelte/a11y-media-has-caption': 'warn',
				// 'svelte/a11y-click-events-have-key-events': 'warn',
                // 'svelte/a11y-mouse-events-have-key-events': 'warn',
				// 'svelte/a11y-aria-activedescendant-has-tabindex': 'warn',
                // 'svelte/a11y-no-access-key': 'warn',
				// 'svelte/a11y-access-key': 'warn',
                // 'svelte/a11y-no-autofocus': 'warn',
                // 'svelte/a11y-no-onchange': 'warn',
				// 'svelte/a11y-tabindex-no-positive': 'warn',
                // 'svelte/a11y-positive-tabindex': 'warn',
                // 'svelte/a11y-title': 'warn',
                // 'svelte/a11y-role': 'warn',
				// 'svelte/a11y-scope': 'warn',  
				// 'svelte/a11y-label-has-associated-control': 'warn',
                // 'svelte/a11y-role-has-required-aria-props': 'warn',
                // 'svelte/a11y-heading-has-content': 'warn',
                // 'svelte/a11y-interactive-supports-focus': 'warn',
                // 'svelte/a11y-lang': 'warn',
                // 'svelte/a11y-no-redundant-roles': 'warn',
				// 'svelte/a11y-no-interactive-element-to-noninteractive-role': 'warn',
				// 'svelte/a11y-role-supports-aria-props': 'warn',	
				// 'svelte/a11y-structure': 'warn',	
				// 'svelte/a11y-unknown-aria-attribute': 'warn',	
				// 'svelte/a11y-unknown-role': 'warn',	 
            },
		}
	],
    settings: {
        // Settings for resolving imports within your project
        'svelte/typescript': true,
        },
};
