import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/custom-world";
import AddToCard from "../../pages/addToCardPage";
import CheckoutClass from "../../pages/CheckoutPage";


When("adds {string} to the cart", async function (this: CustomWorld, producname: string) {
    const addtocard = new AddToCard(this.page)
    await addtocard.cardbtn();
    await addtocard.carticon();
})

When("proceeds to the checkout page", async function (this: CustomWorld) {
    const check = new CheckoutClass(this.page)
    await check.chekoutBtn()

})

When("fills in checkout information with first name {string}, last name {string}, and postal code {string}", async function
    (this: CustomWorld, firstName: string, lastName: string, zipcod: string) {
    const check = new CheckoutClass(this.page);
    await check.checkoutProcces(firstName, lastName, zipcod)

})
When("the user confirms the order", async function (this: CustomWorld) {
    const check = new CheckoutClass(this.page);
    check.finishprocces();

})

Then("the order confirmation page and successfull message should display", async function (this: CustomWorld) {
    const check = new CheckoutClass(this.page);
    check.assertionmsg();

})