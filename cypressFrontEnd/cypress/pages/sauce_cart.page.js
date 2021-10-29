import Base from './_base.page' 
import faker from 'faker';
const CART_URL              = 'cart.html'
const CHECKOUT_FINISHED_URL ='checkout-complete.html'
const CART_BUTTON           = '#shopping_cart_container'
const CART_ADD              ='[data-test=add-to-cart-sauce-labs-backpack]'
const CART_ELEMENT          ='.cart_item > div >a'
const CART_ITEM             ='item_4_title_link'
const NUM_CART              = '.shopping_cart_badge'
const CHECKOUT_CART         ='[data-test=checkout]'
const CHECKOUT_NAME         ='[data-test=firstName]'
const CHECKOUT_LAST_NAME    ='[data-test=lastName]' 
const CHECKOUT_ZIP_CODE     ='[data-test=postalCode]'
const CHECKOUT_BTN          ='[data-test=continue]'
const CHECKOUT_SUMMARY      = '.summary_info'
const CHECKOUT_FINISHED     ='[data-test=finish]'
const TXT_ERROR          ='[data-test=error]'
export default class SauceCart extends Base {



    
    static addItemNoCarrinho(){
        super.validarExistenciaEVisibilidadeDoElemento(CART_ADD)
        super.validarExistenciaEVisibilidadeDoElemento(CART_BUTTON)

        super.clickOnElement(CART_ADD)
        super.clickOnElement(CART_BUTTON)
    
        super.validarUrl(CART_URL)

        super.validarIdDoElemento(CART_ELEMENT,CART_ITEM)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_CART)

        super.validarConteudoDoElemento(NUM_CART, 1)
        super.clickOnElement(CHECKOUT_CART)

    }
    static fazerCheckoutDoProdutoCorretamente(){

        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_NAME)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_LAST_NAME)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_ZIP_CODE)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_BTN)

        super.typeValue(CHECKOUT_NAME, `${faker.name.firstName()}`)
        super.typeValue(CHECKOUT_LAST_NAME, `${faker.name.lastName()}`)
        super.typeValue(CHECKOUT_ZIP_CODE, `${faker.address.zipCode()}`)

        super.clickOnElement(CHECKOUT_BTN)

        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_SUMMARY)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_FINISHED)
        super.validarConteudoDoElemento(CHECKOUT_SUMMARY,'Payment Information:')
        super.clickOnElement(CHECKOUT_FINISHED)

        super.validarExistenciaEVisibilidadeDoElemento('.pony_express')
        super.validarUrl(CHECKOUT_FINISHED_URL)


    }
    static fazerCheckoutDoProdutoIncorretamente(){
        let valor = 1
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_NAME)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_LAST_NAME)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_ZIP_CODE)
        super.validarExistenciaEVisibilidadeDoElemento(CHECKOUT_BTN)

        for (valor; valor < 4; valor++){
            if(valor ==1){
                super.typeValue(CHECKOUT_LAST_NAME, `${faker.name.lastName()}`)
                super.typeValue(CHECKOUT_ZIP_CODE, `${faker.address.zipCode()}`)
                super.clickOnElement(CHECKOUT_BTN)
                super.validateElementText(TXT_ERROR, 'Error: First Name is required')
            }
            if(valor ==2){
                super.typeValue(CHECKOUT_NAME,  `${faker.name.firstName()}`)
                super.typeValue(CHECKOUT_ZIP_CODE, `${faker.address.zipCode()}`)
                super.clickOnElement(CHECKOUT_BTN)
                super.validateElementText(TXT_ERROR, 'Error: Last Name is required')
            }
            if(valor ==3){
                super.typeValue(CHECKOUT_NAME,  `${faker.name.firstName()}`)
                super.typeValue(CHECKOUT_LAST_NAME, `${faker.name.lastName()}`)
                super.clickOnElement(CHECKOUT_BTN)
                super.validateElementText(TXT_ERROR, 'Error: Postal Code is required')
            }
            super.limparCampos(CHECKOUT_NAME,CHECKOUT_LAST_NAME,CHECKOUT_ZIP_CODE)
        }

    }
}