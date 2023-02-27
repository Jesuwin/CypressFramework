
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "4myuz9",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
