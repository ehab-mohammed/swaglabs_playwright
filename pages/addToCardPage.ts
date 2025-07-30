import { Page, expect } from "@playwright/test";

export default class AddToCard {

    //consructor
    constructor(private page: Page) {

    }

    //locators
    private get addtocardbtn() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    private get count() {
        return this.page.locator('[data-test="shopping-cart-badge"]');
    }
    private get icon() {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }
    private get remove() {
        return this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
    }



    //method
    async cardbtn() {
        await this.addtocardbtn.click()
    }

    async countNumber(count: number) {
        await expect(this.count).toHaveText(String(count))

    }

    async carticon() {
        await this.icon.click()
    }
    async removeicon() {
        await this.remove.click()
    }
    async assertion() {
        await expect(this.remove).toHaveCount(0)
    }


}