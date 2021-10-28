import Base from './_base.page'

const INP_USERNAME          = '#user-name'
const INP_PASSWORD          = '#password'
const BTN_LOGIN             = '#login-button'
const TXT_ERROR             = '[data-test=error]'
const URL                   = '/inventory.html'
const LOGIN_CREDENTIAL      = '#login_credentials'
const PASSWORD_CREDENTIAL   = '.login_password'
const LOGO                  = '.login_logo'

export default class SauceLogin extends Base {

    static validarLogo(){
        super.validarExistenciaEVisibilidadeDoElemento(LOGO)
    }

    static validarLoginCredentials(){
        super.validarExistenciaEVisibilidadeDoElemento(LOGIN_CREDENTIAL)
        super.validarExistenciaEVisibilidadeDoElemento(PASSWORD_CREDENTIAL)

    }
    static logar(usuario){

        super.validarExistenciaEVisibilidadeDoElemento(INP_USERNAME)
        super.validarExistenciaEVisibilidadeDoElemento(INP_PASSWORD)
        super.validarExistenciaEVisibilidadeDoElemento(BTN_LOGIN)

        super.typeValue(INP_USERNAME, usuario)
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
    }
    static validarUrl(){
        super.validarUrl(URL)
    }

    static validarLoginIncorreto(mensagem){
        super.validarExistenciaEVisibilidadeDoElemento(TXT_ERROR)
        super.validateElementText(TXT_ERROR, mensagem)
    }

}