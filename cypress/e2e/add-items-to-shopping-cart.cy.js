/// <reference types = "cypress" />
import * as data from "../support/variables.js";

import * as locators from "../support/locators.js";

describe('Add items to shopping cart', () => {

    it('Remove all itens from shopping cart', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.viewport(1349, 606)
        cy.clearAllSessionStorage({log: true})
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
        cy.get('[data-test="username"]').type(data.user.username)
        cy.get('[data-test="password"]').type(data.user.password)
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack')
        cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$29.99')
        cy.contains('Add to cart').click()
        cy.contains('Sauce Labs Bike Light')
        cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$9.99')
        cy.contains('Add to cart').click()
        cy.contains('Sauce Labs Bolt T-Shirt')
        cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$15.99')
        cy.contains('Add to cart').click()
        cy.contains('Sauce Labs Fleece Jacket')
        cy.get(':nth-child(4) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$49.99')
        cy.contains('Add to cart').click()
        cy.contains('Sauce Labs Onesie')
        cy.get(':nth-child(5) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$7.99')
        cy.contains('Add to cart').click()
        cy.get(':nth-child(6) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$15.99')
        cy.contains('Test.allTheThings() T-Shirt (Red)')
        cy.contains('Add to cart').click()
        cy.get('.shopping_cart_badge').contains('6')
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.cart_list').should('not.include.text', 'Sauce Labs Backpack')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('.cart_list').should('not.include.text', 'Sauce Labs Bike Light')
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.cart_list').should('not.include.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
        cy.get('.cart_list').should('not.include.text', 'Sauce Labs Fleece Jacket')
        cy.get('[data-test="remove-sauce-labs-onesie"]').click()
        cy.get('.cart_list').should('not.include.text', 'Sauce Labs Onesie')
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('.cart_list').should('not.include.text', 'Test.allTheThings() T-Shirt (Red)') 
        
    });

    it('Check Sauce Labs Backpack Product Details', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.viewport(1349, 606)
        cy.clearAllSessionStorage({log: true})
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
        cy.get('[data-test="username"]').type(data.user.username)
        cy.get('[data-test="password"]').type(data.user.password)
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack').click()
        cy.get('.inventory_details_name').contains('Sauce Labs Backpack')
        cy.get('.inventory_details_desc').contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    });
    
    it('Add all items to shopping cart', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.viewport(1349, 606)
        cy.clearAllSessionStorage({log: true})
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
        cy.get('[data-test="username"]').type(data.user.username)
        cy.get('[data-test="password"]').type(data.user.password)
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack')
        cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$29.99')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.contains('Sauce Labs Bike Light')
        cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$9.99')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.contains('Sauce Labs Bolt T-Shirt')
        cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$15.99')
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.contains('Sauce Labs Fleece Jacket')
        cy.get(':nth-child(4) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$49.99')
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.contains('Sauce Labs Onesie')
        cy.get(':nth-child(5) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$7.99')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get(':nth-child(6) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$15.99')
        cy.contains('Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('.shopping_cart_badge').contains('6')
    });

    it('Add all items to shopping cart and buy it', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        cy.viewport(1349, 606)
        cy.clearAllSessionStorage({log: true})
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
        cy.get('[data-test="username"]').type(data.user.username)
        cy.get('[data-test="password"]').type(data.user.password)
        cy.get('[data-test="login-button"]').click()
        cy.contains('Sauce Labs Backpack')
        cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$29.99')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.contains('Sauce Labs Bike Light')
        cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$9.99')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.contains('Sauce Labs Bolt T-Shirt')
        cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$15.99')
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.contains('Sauce Labs Fleece Jacket')
        cy.get(':nth-child(4) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$49.99')
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.contains('Sauce Labs Onesie')
        cy.get(':nth-child(5) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$7.99')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get(':nth-child(6) > .inventory_item_description > .pricebar > .inventory_item_price').contains('$15.99')
        cy.contains('Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('.shopping_cart_badge').contains('6')
        cy.get('.shopping_cart_link').click()
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$29.99')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$9.99')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$15.99')
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$49.99')
        cy.get(':nth-child(7) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$7.99')
        cy.get(':nth-child(8) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$15.99')
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type(data.user.firstname)
        cy.get('[data-test="lastName"]').type(data.user.lastname)
        cy.get('[data-test="postalCode"]').type(data.user.postalcode)
        cy.get('[data-test="continue"]').click()
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$29.99')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$9.99')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$15.99')
        cy.get(':nth-child(6) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$49.99')
        cy.get(':nth-child(7) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$7.99')
        cy.get(':nth-child(8) > .cart_item_label > .item_pricebar > .inventory_item_price').contains('$15.99')
        cy.get('.summary_total_label').contains('140.34')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').contains('Thank you for your order!')
        cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get('[data-test="back-to-products"]').click()
    });
});