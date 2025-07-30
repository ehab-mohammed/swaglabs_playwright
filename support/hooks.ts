import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./custom-world";
import { captureScreenshot } from "./screenshot";

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
});

After(async function (this: CustomWorld, scenario) {
    await captureScreenshot(this, scenario);

    // Delay close for safety if needed
    await new Promise(res => setTimeout(res, 1000));

    if (this.page && !this.page.isClosed()) {
        await this.page.close();
    }

    if (this.browser && this.browser.isConnected()) {
        await this.browser.close();
    }
});

