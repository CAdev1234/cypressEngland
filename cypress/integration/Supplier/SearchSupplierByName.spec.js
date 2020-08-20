/// <reference types = "Cypress" />

import Login from '../Login/Login'
var login_info = {}
function searchSupplierName(search_name) {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get("#stibo_stackpanel_Supplier_Name_Search").click()
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div table tbody tr:nth-child(1) td table tbody tr:nth-child(2) td .stb-SearchBox").clear().type(search_name)
    cy.wait(2000)
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div.left-panel div div:nth-child(2) div div:nth-child(8) div div:nth-child(2) div div div button.button-secondary.SearchButton").click()
    cy.wait(2000)
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr > th > span > span > label").click()
    cy.wait(1000)
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody > tr > td:nth-child(1) > div > span").click()
    cy.get("body div:nth-child(10) div:nth-child(2) div div.main-area-root div:nth-child(4) div div:nth-child(4) div div.mainArea-content div div:nth-child(2) div div").should('include.text', "Supplier Maintenance")
    cy.get("#ID div div.stibo-Value-ReadOnly").should('include.text', search_name)
}
// before(function() {
//     cy.fixture('example').then(function(data) {
//         login_info = data
//     })
// })
describe('Regression suite', () => {
    it('Login test', () => {
        const lp=new Login()
        lp.visit()
        lp.fillUsername("emilia")
        lp.fillPassword("emilia")
        lp.submit()
    })
    it('Supplier name search', () => {
        cy.wait(5000)
        let search_name = "SupplierCreateTest"
        searchSupplierName(search_name)
        cy.wait(2000)
        // search_name = "ABB MARKETING LTD (A0844)"
        // searchSupplierName(search_name)
    })
})