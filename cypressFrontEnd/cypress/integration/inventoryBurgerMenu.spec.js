/// <reference types = "cypress"/>
import SauceHomeBurger from '../pages/sauce_home_burger_menu.page'

describe("Teste de navegaçao BURGER MENU", () =>{
    beforeEach(() =>{

        cy.visitar()
        cy.logar()
    })
    it("verificar funcionamento do burguer menu", ()=>{
        SauceHomeBurger.BurgerMenuAccess()
    })

    it("verificar funcionamento do all items no burguer menu", ()=>{
        SauceHomeBurger.BurgerMenuAllItems()
    })

    it("verificar funcionamento do logout no burguer menu", ()=>{
        SauceHomeBurger.BurgerMenuLogout()
    })

    it("verificar funcionamento do sobre no burguer menu", ()=>{
        SauceHomeBurger.BurgerMenuSobre()
     })

})