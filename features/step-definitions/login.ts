import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../pages/loginpage";
import Dashboaredpage from "../../pages/dashboaredpage";
import { CustomWorld } from "../../support/custom-world";

Given("the user is on the login page", async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.goto();
});

When(
    "the user logs in with username {string} and password {string}", { timeout: 20000 },
    async function (this: CustomWorld, username: string, password: string) {
        const loginPage = new LoginPage(this.page);
        await loginPage.goto();
        await loginPage.login(username, password);
    }
);

Then("the user should see the dashboard", async function (this: CustomWorld) {
    const dashboard = new Dashboaredpage(this.page);
    await dashboard.dashboraed();
});

When("the user logs in with invalid credentials", async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login("standard_user", "wrong-password")

})

Then("the user should not see the dashboard", async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.assertLoginFailed();
});


