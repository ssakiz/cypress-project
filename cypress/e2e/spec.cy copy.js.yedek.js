// cypress/e2e/login_spec.js

describe('Login Test', () => {
  it('should navigate to login page, log in, and verify successful login', () => {

    // Step 1: Navigate to the Login Page
    cy.visit('https://example.com/login')  // Replace with your login page URL
    
    // Verify that the login page is loaded
    cy.url().should('include', '/login')
    cy.get('h1').should('contain', 'Login')  // Check if the page has an <h1> with the text 'Login'

    // Step 2: Enter valid credentials, submit the form, and verify the login success message
    cy.get('input[name="username"]')  // Replace with your input field selector
      .type('testuser')  // Replace with a valid username

    cy.get('input[name="password"]')  // Replace with your password field selector
      .type('password123')  // Replace with a valid password

    cy.get('button[type="submit"]')  // Replace with the correct button selector
      .click()  // Click the login button

    // Verify successful login by checking the page's URL or the presence of a success message
    cy.url().should('not.include', '/login')  // Check if the URL changed (indicating a successful login)
    cy.get('.welcome-message').should('contain', 'Welcome, testuser')  // Check if a welcome message appears

  })
})
