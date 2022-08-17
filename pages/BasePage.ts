import { World } from "../utils/worldInterface";
import { PageFactory } from "../pageFactory/pageFactory";
import * as pages from "./index";
import { URL } from "../utils/urls"

export class BasePage {

    public async getRandomString(): Promise<string> {
        return (Math.random() + 1).toString(36).substring(7);
    }

   public async setUserFields(user: World): Promise<void> {
       const basePage = await PageFactory.getPage("BASE") as pages.base.BasePage;
       user.username = `evgeniy_user_${await basePage.getRandomString()}`;
       user.password = `Werq1234_${await basePage.getRandomString()}`;
       user.email = `testEmail${await basePage.getRandomString()}@gmail.com`;
   }

   public async log(message): Promise<void> {
        console.log(message)
   }

   public async openPage(name: string): Promise<void> {
        await browser.url(URL[name]);
   }
}