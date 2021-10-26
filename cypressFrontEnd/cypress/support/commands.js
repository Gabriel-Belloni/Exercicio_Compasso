/// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//               TESTES DE LOGIN
    /// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
Cypress.Commands.add('logar', () => {

    cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contain', '/inventory')
    
})
Cypress.Commands.add('logarIncorreto', () => {

    cy.get('#user-name').type('standard_errado')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test=error]')
    
})
/// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//               TESTES DE ORDENAÇAO EM INVENTORY
    /// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
Cypress.Commands.add('selecionarOrdenacao', (valor) => {

    cy.get('[data-test=product_sort_container]').select(valor)
    
})
Cypress.Commands.add('selecionarOrdenacaoErrada', (valor) => {

    cy.get('[data-test=product_sort_container]').select(valor)
    
})
/// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
//               TESTES DE NAVEGAÇAO BURGER MENU
    /// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
Cypress.Commands.add('burgerMenuAllItems', () => {

    cy.get('#item_4_img_link > .inventory_item_img').click()
    cy.get('#react-burger-menu-btn').click();
    cy.get('#inventory_sidebar_link').click()
    cy.url().should('contain', 'inventory')
    
})
Cypress.Commands.add('burgerMenuSobre', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#about_sidebar_link').click()
    cy.url().should('contain', 'saucelabs')
    
})
Cypress.Commands.add('burgerMenuLogout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click()
    cy.url().should('contain', 'saucedemo')
    
})
Cypress.Commands.add('burgerMenu', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#reset_sidebar_link').click()
    
})


//Cypress.Commands.add('', () => {   
//})