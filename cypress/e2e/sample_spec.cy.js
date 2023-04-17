describe('Test create new issue', () => {
  it('Test create new issue',() =>{
    cy.allure().step('Access the website')
    cy.visit('https://jira-9.aandd.io/')
    cy.allure().step('Input username password and select login')
    cy.get('#login-form-username').type('admin')
    cy.get('#login-form-password').type('12345678')
    cy.get('#login').click()
    cy.allure().step('Select button create new issue')
    cy.get('#create-menu').click()
  })
})
  



