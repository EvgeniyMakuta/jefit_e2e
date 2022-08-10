import { WebElement, World } from "../utils/types";
import { URL } from "../utils/urls"
import * as pages from "../pages/index"

export const elements = {
    loginField: (name: "username" | "password"): WebElement => $(`#navbar_${name}`),
    loginSubmit: (): WebElement => $(".loginblueButton1"),
    signUpBtn: (): WebElement => $(`[href=${URL.signup}]`),
    forgotPass: (): WebElement => $("#forgotpasswordlogin"),
    rememberMe: (): WebElement => $("#cb_cookieuser_navbar"),
}

export class LoginPage extends pages.base.BasePage {
    public async login(user: World): Promise<void> {
        await elements.loginField("username").setValue(user.username);
        await elements.loginField("password").setValue(user.password);
        await elements.loginSubmit().click();
    }
}