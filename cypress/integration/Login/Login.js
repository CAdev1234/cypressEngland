/// <reference types = "Cypress" />

class Login
{

    visit()
    {
        cy.wait(2000)
        cy.visit('')
        cy.wait(5000)
    
    }
    fillUsername(value)
    {
        const field=cy.get('[id=username-input]')
        field.clear
        field.type(value)
        return this
    }


    fillPassword(value)
    {
        const field=cy.get('[id=password-input]')
        field.clear
        field.type(value)
        return this
    }

    submit()
    {
    const button=cy.get('[id=login-button]')
    button.click()
    }
}

 export default Login