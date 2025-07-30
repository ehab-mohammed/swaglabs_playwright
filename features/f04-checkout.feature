@regression
Feature: Checkout functionality
    @checkout
    Scenario: User completes checkout successfully
        Given the user logs in with username "standard_user" and password "secret_sauce"
        When adds "Sauce Labs Bolt T-Shirt" to the cart
        And proceeds to the checkout page
        And fills in checkout information with first name "star", last name "link", and postal code "12345"
        And the user confirms the order
        Then the order confirmation page and successfull message should display
