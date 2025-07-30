import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/custom-world";
import AddToCard from "../../pages/addToCardPage";



When("the user adds the first product to the cart", async function (this: CustomWorld) {
    const addtocard = new AddToCard(this.page)
    await addtocard.cardbtn();

})
Then("the cart badge should show 1 item", async function (this: CustomWorld) {
    const addtocard = new AddToCard(this.page)
    await addtocard.countNumber(1)

})

When("the user click on cart icon", async function (this: CustomWorld) {
    const addtocard = new AddToCard(this.page)
    await addtocard.cardbtn();
    await addtocard.carticon()

})

When("click on remove icon", async function (this: CustomWorld) {
    const addtocard = new AddToCard(this.page)
    await addtocard.removeicon()
})


Then("the user should not see this item in cart", async function (this: CustomWorld) {
    const addtocard = new AddToCard(this.page)
    await addtocard.assertion()

})