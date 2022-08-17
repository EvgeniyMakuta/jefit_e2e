import * as pages from "../pages/index";
import { User } from "../utils/enums";

import { When } from "@wdio/cucumber-framework";

When('player clicks TermsOfUses link', async () => {
    await pages.signUp.elements.termsOfUsesLink().scrollIntoView()
    await pages.signUp.elements.termsOfUsesLink().click();
});

When('player clicks privacyPolicy link', async () => {
    await pages.signUp.elements.privacyPolicy().scrollIntoView()
    await pages.signUp.elements.privacyPolicy().click();
});

When('player clicks forgot password', async () => {
    await pages.login.elements.forgotPass().click();
});

When('player clicks reset password', async () => {
    await pages.login.elements.resetPassword().click();
});

When('player type email to reset password', async () => {
    await pages.login.elements.emailField().setValue(User.EMAIL);
})