// cypress/e2e/login_spec.js

// cypress/integration/login.spec.js
describe('Login Page 1', () => {
  it('should log in with correct credentials', () => {
    cy.visit('/login'); // Assume your login page is at /login

    // Fill in the username and password fields
    cy.get('input[name="username"]').type('user');
    cy.get('input[name="password"]').type('password123');

    // Click the login button
    cy.get('button[type="submit"]').click();

    // Assert that login was successful (alert or some UI element appears)
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Logged in successfully!');
    });
  });

  it('should show an error with incorrect credentials', () => {
    cy.visit('/login');

    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpassword');

    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid credentials');
    });
  });
});
