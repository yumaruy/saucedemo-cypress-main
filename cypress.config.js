const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    experimentalStudio: false,
    experimentalRunAllSpecs: false,
    keystrokeDelay: 0,
    viewportHeight: 606,
    viewportWidth: 1349,
    retries: 0,
    pageLoadTimeout: 12000,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 0,
    video: false,
    includeShadowDom: false,
    screenshotOnRunFailure: false,
    baseUrl:'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      hideXHRInCommandLog: true
      // implement node event listeners here
    },
  },
});
