// cypress/e2e/login_spec.js

describe('Login Test for HerokuApp', () => {
  it('should log in with valid credentials and verify successful login', () => {

    // Step 1: Visit the login page of the HerokuApp
    cy.visit('https://the-internet.herokuapp.com/login') // Visit the login page

    // Step 2: Verify that we are on the login page
    cy.url().should('include', '/login')  // Make sure the URL includes '/login'
    cy.get('h2').should('contain', 'Login Page')  // Ensure the page contains a heading 'Login Page'

    // Step 3: Enter valid credentials
    cy.get('input[name="username"]')  // Find the username input field
      .type('tomsmith')  // Type in the username

    cy.get('input[name="password"]')  // Find the password input field
      .type('SuperSecretPassword!')  // Type in the password

    // Step 4: Click the login button
    cy.get('button[type="submit"]')  // Find the submit button
      .click()  // Click the login button

    // Step 5: Verify successful login
    // Check if the URL changes and we are redirected to a secure page
    cy.url().should('include', '/secure')  // The page should redirect to '/secure' upon successful login

    // Verify the presence of the success message
    cy.get('.flash.success').should('contain', 'You logged into a secure area!')  // Check the success message

  })

  it('should show error on invalid credentials', () => {

    // Step 1: Visit the login page of the HerokuApp
    cy.visit('https://the-internet.herokuapp.com/login') // Visit the login page

    // Step 2: Verify that we are on the login page
    cy.url().should('include', '/login')  // Make sure the URL includes '/login'
    cy.get('h2').should('contain', 'Login Page')  // Ensure the page contains a heading 'Login Page'

    // Step 3: Enter invalid credentials
    cy.get('input[name="username"]')  // Find the username input field
      .type('invaliduser')  // Type in an invalid username

    cy.get('input[name="password"]')  // Find the password input field
      .type('wrongpassword')  // Type in an invalid password

    // Step 4: Click the login button
    cy.get('button[type="submit"]')  // Find the submit button
      .click()  // Click the login button

    // Step 5: Verify error message for invalid login
    cy.get('.flash.error').should('contain', 'Your username is invalid!')  // Check for the error message

  })
})
