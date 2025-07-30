import { Page, expect } from "@playwright/test";
import { faker, th } from '@faker-js/faker';



export default class CheckoutClass {

    //consructor
    constructor(private page: Page) {

    }

    //locators
    private get checkoutbtn() {
        return this.page.locator('[data-test="checkout"]')
    }

    private get firstNameinput() {
        return this.page.locator('[data-test="firstName"]')
    }
    private get lastNameinput() {
        return this.page.locator('[data-test="lastName"]')
    }

    private get zipcodinput() {
        return this.page.locator('[data-test="postalCode"]')
    }

    private get continuebtn() {
        return this.page.locator('[data-test="continue"]')
    }
    private get finishbtn() {
        return this.page.locator('[data-test="finish"]')
    }
    private get completemsg() {
        return this.page.locator('[data-test="complete-header"]')
    }

    //methods
    async chekoutBtn() {
        await this.checkoutbtn.click()
    }

    async checkoutProcces(firstName: string, lastName: string, zipcod: string) {
        await this.firstNameinput.fill(faker.person.firstName())
        await this.lastNameinput.fill(faker.person.lastName())
        await this.zipcodinput.fill(faker.location.zipCode())
        await this.continuebtn.click()

    }

    async finishprocces() {
        await this.finishbtn.click();
        await this.page.waitForSelector('[data-test="complete-header"]');
    }


    async assertionmsg() {
        await expect(this.completemsg).toHaveText("Thank you for your order!");
        // await expect(this.page.locator('[data-test="pony-express"]')).toBeVisible(); // optional
    }






}