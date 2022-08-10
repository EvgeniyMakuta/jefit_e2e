import { WebElement } from "../utils/types";
import { URL } from "../utils/urls"
import * as pages from "../pages/index"

export const elements = {
    username: (): WebElement => $("#regusername"),
    email: (): WebElement => $("#myemail"),
    password: (): WebElement => $("#password"),
    confirmPassword: (): WebElement => $("#passwordconfirm"),
    createAccBtn: (): WebElement => $(".loginblueButton1"),
    loginBtn: (): WebElement => $(`[href=${URL.login}]`),
    captcha: (): WebElement => $("#recaptcha-anchor"),
    captchaIframe: (): WebElement => $("[title=reCAPTCHA]"),
    captchaCheck: (): WebElement => $("[aria-checked=true]"),
    welcomeModal: (): WebElement => $("#myModal"),


}

export class SignUpPage extends pages.base.BasePage {
    public async signUpUser(username, email, password): Promise<void> {
        await elements.username().setValue(username);
        await elements.email().setValue(email);
        await elements.password().setValue(password);
        await elements.confirmPassword().setValue(password);
        await browser.switchToFrame(0);
        await elements.captcha().click();
        await elements.captchaCheck().waitForDisplayed();
        await browser.switchToParentFrame();
        await elements.createAccBtn().click();
    }
}