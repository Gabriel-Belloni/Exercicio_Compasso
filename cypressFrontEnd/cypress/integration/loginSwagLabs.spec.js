/// <reference types = "cypress"/>

import SauceLogin from '../pages/sauce_login.page'



describe("Teste de Login SwagLab", () =>{
    beforeEach(() =>{

        cy.visit('https://www.saucedemo.com')
    })
    it("logar corretamente no swagLab", ()=>{
        SauceLogin.logar('standard_user')
        SauceLogin.validarUrl()
    })
    it("logar incorretamente no swagLab", ()=>{
        SauceLogin.logar('standard_usser')
        SauceLogin.validarLoginIncorreto()
    })
}) 
