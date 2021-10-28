/// <reference types = "cypress"/>
import faker from 'faker';
import SauceLogin from '../pages/sauce_login.page'

describe("Teste de Login SwagLab", () =>{
    beforeEach(() =>{
        cy.visitar()
    })
    
    it('Verificar existencia e visibilidade do logo do swagLabs', () =>{
        SauceLogin.validarLogo()
    })
    it('Verificar existencia e visibilidade do login e senha credentials', () =>{
        SauceLogin.validarLoginCredentials()
    })
    it("logar corretamente no swagLab", ()=>{
        SauceLogin.logar('standard_user')
        SauceLogin.validarUrl()
    })
    it("logar incorretamente com usuario errado no swagLab", ()=>{
        SauceLogin.logar(`${faker.name.firstName()}`)
        SauceLogin.validarLoginIncorreto('Epic sadface: Username and password do not match any user in this service')
    })
    it("logar  swagLab com usuario locked_out_user", ()=>{
        SauceLogin.logar('locked_out_user')
        SauceLogin.validarLoginIncorreto('Epic sadface: Sorry, this user has been locked out')
    })
}) 
