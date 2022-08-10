@e2e @init
Feature: E2E: JeFit

  @scenarioNewUserCreate
  Scenario: New User Create
    Given framework creates new user
    Then new user should be created

  @scenarioUserLogin
  Scenario: User Login
    Given framework logins as an user

  @scenarioTermsOfUse
  Scenario: Terms of Use Open
  Given framework open the "SIGNUP" page