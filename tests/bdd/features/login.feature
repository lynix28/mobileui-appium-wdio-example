Feature: Login

    As a User,
    I should be able to log in to Sauce Demo app.

    Background:
        Given Sauce Demo app opened and directed to login page
        
    Scenario: Login to Sauce Demo app with a valid credential
        When I enter "bob@example.com" on username field
        And I enter a valid password
        And Click login button
        Then Login will be successfully

    Scenario: Login to Sauce Demo app with invalid credential
        When I enter "abc" on username field
        And I enter an invalid password
        And Click login button
        Then Login will failed and I see an error messsage about Invalid User

    Scenario: Login to Sauce Demo app with blocked credential
        When I enter "alice@example.com" on username field
        And I enter a valid password
        And Click login button
        Then Login will failed and I see an error messsage about Blocked User