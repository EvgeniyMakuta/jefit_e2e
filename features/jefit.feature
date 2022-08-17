@e2e @init
Feature: E2E: JeFit

  @scenarioNewUserCreate @skip()
  Scenario: New User Create
    Given framework creates new user
    Then new user should be created

  @scenarioUserLogin @skip()
  Scenario: User Login
    Given framework logins as an user
    Then user should be logged in

  @scenarioUserLoginError
  Scenario: User Login Error
    Given framework logins as wrong user
    Then user should not be logged in

  @scenarioTermsOfUsesOpen
  Scenario: Terms of Use Open
    Given framework open the "SIGNUP" page
    When player clicks TermsOfUses link
    Then termsOfUses page should be opened

  @scenarioPrivacyPolicyOpen
  Scenario: Privacy Policy Open
    Given framework open the "SIGNUP" page
    When player clicks privacyPolicy link
    Then privacyPolicy page should be opened

  @scenarioForgotPasswordError
  Scenario: Forgot Password Error
    Given framework open the "LOGIN" page
    When player clicks forgot password
    * player clicks reset password
    Then reset password error message should be displayed

  @scenarioForgotPassword
  Scenario: Forgot Password
    Given framework open the "LOGIN" page
    When player clicks forgot password
    * player type email to reset password
    * player clicks reset password
    Then reset password success message should be displayed

  @scenarioDateOfBirthChange
  Scenario: Date Of Birth Change
    Given framework logins as an user
