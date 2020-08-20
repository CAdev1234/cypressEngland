/// <reference types = "Cypress" />

import Login from '../Login/Login'
var login_info = {}
function searchSupplierCode(search_code) {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get("#stibo_stackpanel_Supplier_Code_Search").click()
    cy.wait(2000)
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(6) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > input").clear().type(search_code)
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(6) > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(4) > td > table > tbody > tr:nth-child(2) > td > select").select('Emilia01')
    cy.wait(2000)
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(6) div div:nth-child(2) div div div button.button-secondary.SearchButton").click()
    cy.wait(2000)
}
before(function() {
    cy.fixture('example').then(function(data) {
        login_info = data
    })
})
describe('Regression suite', () => {
    it('Login test', () => {
        const lp=new Login()
        lp.visit()
        lp.fillUsername(login_info.name)
        lp.fillPassword(login_info.password)
        lp.submit()
    })
    it('Supplier code search', () => {
        cy.wait(5000)
        let search_code = "A0645"
        searchSupplierCode(search_code)
        cy.wait(1000)
        cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody > tr > td:nth-child(1) > div > span").click()
        cy.wait(1000)
        cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(2) > div > div").should('include.text', "Supplier Maintenance")
        cy.get("#Supplier_Code > div > div.stibo-Value-ReadOnly.stibo-Value.readonly.stibo-Value-ReadOnly.stibo-Value-Numeric-Text.validator-numeric_text > div").should('include.text', search_code)
        cy.get("#stibo_tab_Supplier_Revision_Details > div > div > span").click()
        cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody").find('tr').should('have.length', 5)
        cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(5) > div > div > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div:nth-child(3) > div > div:nth-child(2) > div").should('include.text', "Number of revisions : 5")
        cy.wait(5000)
        cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div:nth-child(4) > div > div.mainArea-content > div > div:nth-child(4) > div > div > div > button").click()
        // cy.wait(2000)
        // search_code = "ABB MARKETING LTD (A0844)"
        // searchSupplierCode(search_code)
    })
})