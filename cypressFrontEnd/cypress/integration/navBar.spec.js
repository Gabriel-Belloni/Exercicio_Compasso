/// <reference types = "cypress"/>




describe("Teste de barra de navegação", () =>{
    beforeEach(() =>{

        cy.visit('https://filipeconde.com.br')
    }) 
    
    it('deve acessar area "channel ao clicar no botao', () =>{

        cy.get('[title="Channel"]').click()
        cy.url().should('contain', '/channel')
    })

    it('deve acessar area "sobre mim ao clicar no botao', () =>{

        cy.get('[title="Sobre mim"]').click()
        cy.url().should('contain', '/sobre-mim')
    })

    it('deve acessar area "serviços ao clicar no botao', () =>{

        cy.get('[title="Serviços"]').click()

        cy.url().should('contain', '/servicos')
    })

    it('deve acessar area "contato ao clicar no botao', () =>{

        cy.get('[title="Contato"]').click()

        cy.url().should('contain', '/contato')
    })
    
})