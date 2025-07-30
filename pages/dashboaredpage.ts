import { Page, expect } from "playwright/test";

export default class Dashboaredpage {
    //constructor
    constructor(private page: Page) { }

    private get titlePage() {
        return this.page.locator('[data-test="title"]')

    }
    async dashboraed() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
        await expect(this.titlePage).toBeVisible()
    }

}
