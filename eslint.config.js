/**
 * eslint.config.js - Flat Config fuer React + TypeScript + Prettier
 * (minimales Setup)
 */

import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	/**
	 * Global ignorieren
	 */
	 { ignores: ['node_modules', 'dist', 'build', 'coverage'] },
	 
	 /**
	  * Basis: JS + TS (ohne Type-Checking, schnell)
	  */
	  js.configs.recommended,
	  ...tseslint.configs.recommended,
	  
	  /**
	   * React/JSX/Hooks
	   */
	   {
		   files: ['**/*.{ts,tsx,js,jsx}'],
		   plugins: { react, 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
		   languageOptions: {
			   ecmaVersion: 'latest',
			   sourceType: 'module',
			   parserOptions: { ecmaFeatures: {jsx: true} },
			   globals: { ...globals.browser, ...globals.node }
		   },
		   settings: { react: {version: 'detect' } },
		   rules: {
			   /**
			    * React 17+ braucht kein `import React` mehr
			    */
			   'react/react-in-jsx-scope': 'off',
			   'react/jsx-uses-react': 'off',
			   
			   /**
			    * Hooks-Best-Practices
			    */
			   'react-hooks/rules-of-hooks': 'error',
			   'react-hooks/exhaustive-deps': 'warn',
			},
	   },
	   
	   /**
	    * Prettier am Ende: Schaltet kollidierende Stilregeln ab
		*/
	   prettier,
];