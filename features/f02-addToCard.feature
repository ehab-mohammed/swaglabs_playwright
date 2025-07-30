@regression
Feature: Cart actions

    Background:
        Given the user logs in with username "standard_user" and password "secret_sauce"
    @add
    Scenario: Add item to cart
        When the user adds the first product to the cart
        Then the cart badge should show 1 item
    @remove
    Scenario: Remove item from cart
        When the user click on cart icon
        When click on remove icon
        Then the user should not see this item in cart
