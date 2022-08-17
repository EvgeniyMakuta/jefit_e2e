import { WebElement } from "../utils/types";

export const elements = {
    loginBtn: (): WebElement => $("#menu-item-18861"),
    signupBtn: (): WebElement => $("[data-section=section-hb-button-1]")
}