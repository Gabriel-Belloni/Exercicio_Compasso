/// <reference types = "cypress"/>

describe("Teste de Login SwagLab", () =>{
    beforeEach(() =>{

        cy.visit('https://www.saucedemo.com')
    })
    it("logar corretamente no swagLab", ()=>{
        cy.logar()
    })
    it('login incorreto', ()=>{
        cy.logarIncorreto()
           })
}) 
