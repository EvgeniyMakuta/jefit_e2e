import { Before } from "@wdio/cucumber-framework";

Before({ tags: "@init" },
    async function () {
        await browser.maximizeWindow();
    });