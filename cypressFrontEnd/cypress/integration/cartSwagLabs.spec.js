/// <reference types = "cypress"/>
import SauceCart from "../pages/sauce_cart.page";

describe("Testes em carrinho de compras ", ()=>{
    context("Estar logado no SwagLab",() =>{
        it("adicionando produto ao carrinho", ()=>{
            cy.visitar()
            cy.logar()
            SauceCart.addItemNoCarrinho()
        })
    })
})

describe(" Deve fazer checkout do produto no carrinho", ()=>{
    context("Estar na Pagina do carrinho com pelo menos 1 produto", ()=>{
        beforeEach(()=>{
            cy.visitar()
            cy.logar()
            SauceCart.addItemNoCarrinho()
        })
        it('fazer checkout do produto no carrinho', ()=>{
            SauceCart.fazerCheckoutDoProdutoCorretamente()
        })
        describe(" Deve fazer checkout sem prencher todos os campos obrigatorios", ()=>{
            it('fazer checkout do produto no carrinho incorretamente', ()=>{
                SauceCart.fazerCheckoutDoProdutoIncorretamente()
            })
        })
    })
})