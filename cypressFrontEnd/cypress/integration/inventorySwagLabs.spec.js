/// <reference types = "cypress"/>
import SauceHome from '../pages/sauce_home.page'

describe("teste Do seletor de ordenação", () =>{
    context("Estar logado no SwagLab",() =>{

        it("verificar se funciona corretamente o seletor de ordenaçao", ()=>{
            cy.visitar()
            cy.logar() 

            SauceHome.organizadorDeProdutos()
        })
    })
})
describe("testar presença do elementos", () =>{
    beforeEach(()=>{
        cy.visitar()
        cy.logar()
    })
    it("verificar se o elementos da pagina home", () =>{
        SauceHome.validarElementos()

    })
})
