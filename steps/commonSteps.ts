import { Given, Then } from "@wdio/cucumber-framework"
import * as pages from "../pages/index"
import { PageFactory } from "../pageFactory/pageFactory";
import { World} from "../utils/worldInterface";
import { URL } from "../utils/urls"
import { Page, User } from "../utils/enums";
import { PageKey } from "../utils/types"

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

Given('framework logins as an user', async function () {
    const loginPage = await PageFactory.getPage("LOGIN") as pages.login.LoginPage;
    await browser.url(URL.base);
    await pages.home.elements.loginBtn().click();
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'Message on failure'
        }
    );
    await loginPage.login(User.USERNAME, User.PASSWORD);
});

Given('framework logins as wrong user', async function () {
    const loginPage = await PageFactory.getPage("LOGIN") as pages.login.LoginPage;
    await browser.url(URL.base);
    await pages.home.elements.loginBtn().click();
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 60 * 1000, // 60 seconds
            timeoutMsg: 'Message on failure'
        }
    );
    await loginPage.login(User.WRONG_USERNAME, User.WRONG_PASSWORD);
});

Given('framework open the {string} page', async (page: PageKey) => {
    const basePage = await PageFactory.getPage("BASE") as pages.base.BasePage;
    await basePage.openPage(Page[page]);
});

Then('termsOfUses page should be opened', async () => {
    await expect(browser).toHaveUrlContaining("terms-of-use");
});

Then('user should be logged in', async () => {
    await expect(browser).toHaveUrlContaining(URL.myProfile)
});
Then('user should not be logged in', async () => {
    await expect(pages.login.elements.errorLoginMsg()).toBeDisplayed();
});

Then('privacyPolicy page should be opened', async () => {
    await expect(browser).toHaveUrlContaining("privacy-policy");
});

Then('reset password error message should be displayed', async () => {
    await expect(pages.login.elements.errorMsg()).toBeDisplayed()
});

Then('reset password success message should be displayed', async () => {
    await expect(pages.login.elements.successMsg()).toBeDisplayed()
});


