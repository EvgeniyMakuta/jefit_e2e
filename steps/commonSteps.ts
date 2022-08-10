import { Given, Then } from "@wdio/cucumber-framework"
import * as pages from "../pages/index"
import { PageFactory } from "../pageFactory/pageFactory";
import { World} from "../utils/types";
import { URL } from "../utils/urls"
import {Page, PageKey} from "../utils/enums";

Given('framework creates new user', async function (this: World) {
    const basePage = await PageFactory.getPage("BASE") as pages.base.BasePage;
    await basePage.setUserFields(this);
    await browser.url(URL.base);
    await pages.home.elements.signupBtn().click();
    const signupPage = await PageFactory.getPage("SIGNUP") as pages.signUp.SignUpPage;
    await signupPage.signUpUser(this.username, this.email, this.password);
    await basePage.log(`New user is created: '${this.username}' with email: '${this.email}'`);
});

Then('new user should be created', async function (this: World) {
    await expect(pages.signUp.elements.welcomeModal()).toBeDisplayed();
    await expect(pages.signUp.elements.welcomeModal()).toHaveTextContaining(`Hello ${this.username}`)
});

Given('framework logins as an user', async function (this: World) {
    const loginPage = await PageFactory.getPage("LOGIN") as pages.login.LoginPage;
    await browser.url(URL.base);
    await pages.home.elements.loginBtn().click();
    await loginPage.login(this);
});

Given('framework open the {string} page', async (page: PageKey) => {
    const basePage = await PageFactory.getPage("BASE") as pages.base.BasePage;
    await basePage.openPage(page);
})

