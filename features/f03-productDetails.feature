@regression
Feature: Product Details
    @product
    Scenario: View product details
        Given the user logs in with username "standard_user" and password "secret_sauce"
        When the user clicks on a product title
        Then the product details page should display the correct product name
