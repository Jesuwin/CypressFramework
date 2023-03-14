// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>
require('cypress-xpath')
require('cypress-plugin-tab')


// Type with
Cypress.Commands.add('typeWithGet', (locator, text) => {
    cy.get(locator).type(text)
  })
  Cypress.Commands.add('typeWithxPath', (locator, text) => {
    cy.xpath(locator).type(text)
  })
  Cypress.Commands.add('clickWithGet', (locator, text) => {
    cy.get(locator).click()
  })
  Cypress.Commands.add('clickWithxPath', (locator, text) => {
    cy.xpath(locator).click()
  })
  

  Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    cy.wait(500);
    cy.get('#g-recaptcha *> iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          .should('be.visible')
          .click();

      });
  });

  

  Cypress.Commands.add('getWithDataCy',(value)=>
  {
    cy.get(`[data-cy=${value}]`)
  })
 




 Cypress.Commands.add('getWithxPath',(value)=>
  {
   cy.xpath(value);
  })

  

  

 
