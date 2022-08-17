import { Pages } from "../utils/enums";
import { PagesKey } from "../utils/types";

import * as pages from "../pages/index"

export class PageFactory {
    static getPage(pageName: PagesKey) {
        switch (Pages[pageName]) {
            case "BasePage":
                return new pages.base.BasePage();
            case "LoginPage":
                return new pages.login.LoginPage();
            case "SignUpPage":
                return new pages.signUp.SignUpPage();
            default:
                return new pages.base.BasePage();
        }
    }
}