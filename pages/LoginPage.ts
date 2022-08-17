import { WebElement } from "../utils/types";
import { URL } from "../utils/urls"
import * as pages from "../pages/index"

export const elements = {
    loginField: (name: "username" | "password"): WebElement => $(`#navbar_${name}`),
    loginSubmit: (): WebElement => $(".loginblueButton1"),
    signUpBtn: (): WebElement => $(`[href=${URL.signup}]`),
    forgotPass: (): WebElement => $("#forgotpasswordlogin"),
    rememberMe: (): WebElement => $("#cb_cookieuser_navbar"),
    errorLoginMsg: (): WebElement => $("#invalidpassworderrormessage"),
    resetPassword: (): WebElement => $("#reset-btn"),
    errorMsg: (): WebElement => $(".error-message"),
    successMsg: (): WebElement => $(".success-message"),
    emailField: (): WebElement => $("#email")
}

export class LoginPage extends pages.base.BasePage {
    public async login(username: string, password: string): Promise<void> {
        await elements.loginField("username").setValue(username);
        await elements.loginField("password").setValue(password);
        await elements.loginSubmit().click();
    }
}