# Cypress Setup and Usage Guide

## Installation

Follow the steps below to set up Cypress on your machine.

### Go to TOOLS directory
```bash
cd /TOOLS
```

### Install npm for mac
Refer to the [official Node.js documentation](https://nodejs.org/en/download/package-manager) for installation instructions.

### Install Cypress for mac
```bash
npm install cypress --save-dev
```

## Usage

### Open Cypress & create default test e2e test spec via wizards
```bash
npx cypress open
```

### Run Cypress test spec
```bash
npx cypress run --spec "./cypress/e2e/spec.cy.js"
```

### Run all Cypress e2e specs
```bash
npx cypress run --e2e
```

## Additional Tools

### Install Cypress Mochawesome Reporter
```bash
npm i --save-dev cypress-mochawesome-reporter
```

Add the following import statement into `/cypress/support/e2e.js`:
```javascript
import 'cypress-mochawesome-reporter/register';
```

## Display Version Information
```bash
npx cypress -v
node -v 
npm -v
```