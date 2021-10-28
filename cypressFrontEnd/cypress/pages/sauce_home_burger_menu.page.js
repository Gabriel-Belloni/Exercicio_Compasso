import Base from './_base.page' 
const URL                   ='/inventory.html';                         
const URL_ITEM              = 'inventory-item.html';
const URL_SOBRE             = 'saucelab';
const URL_LOGOUT            = 'saucedemo';
const FIRST_ITEM            = '#item_4_img_link > .inventory_item_img';    
const BURGER_MENU           = '#react-burger-menu-btn';
const BURGER_MENU_INVENTORY = '#inventory_sidebar_link';
const BURGER_MENU_RESET     = '#reset_sidebar_link';
const BURGER_MENU_SOBRE     = '#about_sidebar_link';
const BURGER_MENU_LOGOUT    = '#logout_sidebar_link';  

export default class SauceHomeBurger extends Base {

    static BurgerMenuAccess(){

        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU)
        super.clickOnElement(BURGER_MENU)

        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU_RESET)
        super.clickOnElement(BURGER_MENU_RESET)
    }

    static BurgerMenuAllItems(){

        super.validarExistenciaEVisibilidadeDoElemento(FIRST_ITEM)
        super.clickOnElement(FIRST_ITEM)

        super.validarUrl(URL_ITEM)

        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU)
        super.clickOnElement(BURGER_MENU)

        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU_INVENTORY)
        super.clickOnElement(BURGER_MENU_INVENTORY)

        super.validarUrl(URL)
    }

    static BurgerMenuSobre(){
        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU)
        super.clickOnElement(BURGER_MENU)

        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU_SOBRE)
        super.clickOnElement(BURGER_MENU_SOBRE)

        super.validarUrl(URL_SOBRE)
    
    }
    static BurgerMenuLogout(){
        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU)
        super.clickOnElement(BURGER_MENU)

        super.validarExistenciaEVisibilidadeDoElemento(BURGER_MENU_LOGOUT)
        super.clickOnElement(BURGER_MENU_LOGOUT)

        super.validarUrl(URL_LOGOUT)
    
    }
}

