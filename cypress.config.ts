import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: 'wo3q62',
  viewportWidth: 1600,
  viewportHeight: 900,
	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack'
		}
	},
	e2e: {
		baseUrl: 'http://localhost:3000/',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
})
