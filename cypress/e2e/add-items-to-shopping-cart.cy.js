/// <reference types = "cypress" />
import * as variables from "../support/variables.js";

describe('Add items to shopping cart', () => {
    
    it('Add items to shopping cart', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.viewport(1349, 606)
        cy.clearAllSessionStorage({log: true})
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
        cy.get('[data-test="username"]').type(variables.user.username)
        cy.get('[data-test="password"]').type(variables.user.password)
        cy.get('[data-test="login-button"]').click()
        cy.contains('Add to cart').click()
        cy.contains('Add to cart').click()
        cy.contains('Add to cart').click()
        cy.contains('Add to cart').click()
        cy.contains('Add to cart').click()
        cy.contains('Add to cart').click()
    });
});