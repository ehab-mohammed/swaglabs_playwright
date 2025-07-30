import { Page, expect } from "@playwright/test";

export default class LoginPage {
    //constructor
    constructor(private page: Page) { }

    //  Locators 
    private get usernameInput() {
        return this.page.locator('[data-test="username"]');
    }

    private get passwordInput() {
        return this.page.locator('[data-test="password"]');
    }

    private get loginButton() {
        return this.page.locator('[data-test="login-button"]');
    }

    private get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    // Methods
    async goto() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


    async assertLoginFailed() {
        await expect(this.errorMessage).toBeVisible();
    }
}
