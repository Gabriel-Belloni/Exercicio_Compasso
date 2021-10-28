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
describe("adicionar produto ao carrinho", ()=>{
    context("Estar logado no SwagLab",() =>{
        it("adicionar produto ao carrinho", ()=>{
            cy.visitar()
            cy.logar()
            SauceHome.addItemNoCarrinho()
        })
    })
})

describe(" Deve fazer checkout do produto no carrinho", ()=>{
    context("Estar na Pagina do carrinho com pelo menos 1 produto", ()=>{
        beforeEach(()=>{
            cy.visitar()
            cy.logar()
            SauceHome.addItemNoCarrinho()
        })
        it('fazer checkout do produto no carrinho', ()=>{
            SauceHome.fazerCheckoutDoProdutoCorretamente()
        })
            describe(" Deve fazer checkout sem prencher todos os campos obrigatorios", ()=>{
            it('fazer checkout do produto no carrinho incorretamente', ()=>{
                SauceHome.fazerCheckoutDoProdutoIncorretamente()
            })
        })
    })
})
    
