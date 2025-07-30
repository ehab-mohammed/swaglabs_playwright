import { Page, expect } from "@playwright/test";

export default class ProductDetails {
    //constructor
    constructor(private page: Page) { }

    //Locators
    private get productName() {
        return this.page.locator('[data-test="inventory-item-name"]')
    }
    private get assertproductname() {
        return this.page.locator('[data-test="inventory-item-name"]')
    }

    //methods

    async producname() {
        await this.productName.nth(2).click({ timeout: 3000 })
    }

    async assertion() {
        await expect(this.assertproductname).toHaveText("Sauce Labs Bolt T-Shirt");
    }


}

