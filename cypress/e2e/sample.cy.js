// cypress/e2e/login_spec.js

describe('access GitHub web page test ', () => {
 it('should visit the GitHub homepage', () => {
    cy.visit('https://github.com/')
    cy.contains('GitHub').should('be.visible')
 })

})
