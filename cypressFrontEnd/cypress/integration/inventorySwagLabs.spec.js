/// <reference types = "cypress"/>


describe("teste Do seletor de ordenação", () =>{
    it("verificar se funciona corretamente o seletor de ordenaçao", ()=>{
        cy.visit('https://www.saucedemo.com')
        cy.logar()
        for (let i = 0; i < 4; i++) {

                 cy.selecionarOrdenacao(i)
                }
})
}) 
describe("Teste de navegaçao BURGER MENU", () =>{
    beforeEach(() =>{

        cy.visit('https://www.saucedemo.com')
        cy.logar()
    })
   
    it("verificar funcionamento do burguer menu", ()=>{
        cy.get('#react-burger-menu-btn').click();

    })
    it("verificar funcionamento do all items no  burguer menu", ()=>{
        cy.burgerMenuAllItems()
    })

    it("verificar funcionamento do logout no burguer menu", ()=>{
       cy.burgerMenuLogout()
    })

    it("verificar funcionamento do burguer menu", ()=>{
        cy.burgerMenu()
    })
    it("verificar funcionamento do sobre no burguer menu", ()=>{
        cy.burgerMenuSobre()
    })

})