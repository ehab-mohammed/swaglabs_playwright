@regression
Feature: Login

    Background:
        Given the user is on the login page
    @valid
    Scenario Outline: Successful login with valid credentials
        When the user logs in with username "<username>" and password "<password>"
        Then the user should see the dashboard

        Examples:
            | username      | password     |
            | problem_user  | secret_sauce |
            | standard_user | secret_sauce |
    @invalidLogin
    Scenario: User should not login with invalid credentials
        When the user logs in with invalid credentials
        Then the user should not see the dashboard
