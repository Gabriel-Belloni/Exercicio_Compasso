/// <reference types = "cypress"/>
import SauceHome from '../pages/sauce_home.page'

describe("teste Do seletor de ordenação", () =>{
    context("Estar logado no SwagLab",() =>{

    it("verificar se funciona corretamente o seletor de ordenaçao", ()=>{
        SauceHome.acessarSauceDemo()
        cy.logar()
        for (let i = 0; i < 4; i++) {
                 SauceHome.organizadorDeProdutos(i)
                }
        })
    }) 
})

describe("Teste de navegaçao BURGER MENU", () =>{
    beforeEach(() =>{

        SauceHome.acessarSauceDemo()
        cy.logar()
    })
    it("verificar funcionamento do burguer menu", ()=>{
        SauceHome.BurgerMenu()
    })

    it("verificar funcionamento do all items no burguer menu", ()=>{
        SauceHome.BurgerMenuAllItems()
    })

    it("verificar funcionamento do logout no burguer menu", ()=>{
        SauceHome.BurgerMenuLogout()
    })

    it("verificar funcionamento do sobre no burguer menu", ()=>{
        SauceHome.BurgerMenuSobre()
     })

})
describe("adicionar produto ao carrinho", ()=>{
    beforeEach(() =>{

        SauceHome.acessarSauceDemo()
        cy.logar()
    })

    it("adicionar produto ao carrinho", ()=>{
      SauceHome.addItemNoCarrinho()
    })
})
