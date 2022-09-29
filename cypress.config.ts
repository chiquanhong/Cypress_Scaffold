const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    autoOpen: true,
    overwrite: false,
    timestamp: true,
    reportFilename: '[status]_[datetime]-[name]-report',
  },
  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: 'https://infometis.ch/',
    experimentalSessionAndOrigin: true,
  },
  defaultCommandTimeout: 20000,
  numTestsKeptInMemory: 10,
  viewportWidth: 1440,
  viewportHeight: 900,
  retries: 3,
});
