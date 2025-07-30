import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../support/custom-world";
import ProductDetails from "../../pages/ProductPage";

When("the user clicks on a product title", async function (this: CustomWorld) {
    const produt = new ProductDetails(this.page)
    await produt.producname();

})
Then("the product details page should display the correct product name", async function (this: CustomWorld) {
    const produt = new ProductDetails(this.page);
    await produt.assertion();

})