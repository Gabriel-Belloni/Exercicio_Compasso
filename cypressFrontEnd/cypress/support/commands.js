
import faker from 'faker';
Cypress.Commands.add('logar', () => {

    cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contain', '/inventory')
    
})
Cypress.Commands.add('visitar', () => {

    cy.visit('https://www.saucedemo.com')
    
})
