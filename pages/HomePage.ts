import { WebElement } from "../utils/types";
import { BasePage } from "./BasePage";

export const elements = {
    loginBtn: (): WebElement => $("#menu-item-18861"),
    signupBtn: (): WebElement => $("[data-section=section-hb-button-1]")
}

export class HomePage extends BasePage {

}