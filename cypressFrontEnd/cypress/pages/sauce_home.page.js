import Base from './_base.page' 
const SELETOR_HOME          = '[data-test=product_sort_container]';             
const ARRAY_PRODUTOS        ='.inventory_list'
const LOGO                  = '.app_logo'
const CART_IMG              ='.shopping_cart_link'
const BURGER                = '#react-burger-menu-btn'
export default class SauceHome extends Base {

    static organizadorDeProdutos(){
        for (let i = 0; i < 4; i++) {
        super.waitElementAndSelectOption(SELETOR_HOME, i)
        if(i == 0){
            super.validarPrimeiroElementoDoArray(ARRAY_PRODUTOS,'Sauce Labs Backpack' )
        }
        if(i == 1){
            super.validarPrimeiroElementoDoArray(ARRAY_PRODUTOS,'Test.allTheThings() T-Shirt (Red)' )
        }
        if(i == 2){
            super.validarPrimeiroElementoDoArray(ARRAY_PRODUTOS,'Sauce Labs Onesie' )
        }
        if(i == 3){
            super.validarPrimeiroElementoDoArray(ARRAY_PRODUTOS,'Sauce Labs Fleece Jacket' )
            
        }
    }
        
    }

    static validarElementos(){
        super.validarExistenciaEVisibilidadeDoElemento(LOGO)
        super.validarExistenciaEVisibilidadeDoElemento(CART_IMG)
        super.validarExistenciaEVisibilidadeDoElemento(BURGER)
    }
}