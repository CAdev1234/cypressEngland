/// <reference types = "Cypress" />

import Login from '../Login/Login'
var login_info = {}
function supplierGroupAssignment() {
    cy.get("#stibo_anchor_Supplier_Group_Maintenance").click()
    cy.get("#stibo_stackpanel_Assign_Supplier_Grouping_Workflow").click()
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > div").click();
    
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label").click({force: true})
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody > tr.even > td.readonly-cell.sheet-coll > div > div").click()
    

    cy.get("#toolbar_button_Allocate_Task_to_me > div").click();
    cy.wait(15000)
    
    cy.get("body > div:nth-child(10) > div:nth-child(2) > div > div.main-area-root > div:nth-child(4) > div > div.left-panel > div > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td > div > div.status-selector__assignees > div.stibo-w-icon.material.User.status-selector__group-icon > div > i").click();
    cy.get(".gwt-Label.status-selector__link.state-Initial_State").click()
    
    // cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > input").should('have.attr', 'checked')
    cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad-row-headers.unselectable > div > div > table > thead > tr:nth-child(1) > th > span > span > label").click({force: true}) 
    cy.wait(2000)
    
    //cy.get("#PropertySheetTable > div > div.sheet-inside-container > div.sheet-body-container > div.sheet-body-vertical-scroll > div.sheet-quad > div > div > table > tbody > tr:nth-child(1) > td.readonly-cell.sheet-coll > div > div > span.DomainNodeCell.extra-local").click();
    
    cy.get("#toolbar_button_Release_Task_from_me > div").click()
    
}
beforeEach(() =>{
    cy.viewport(1440, 800)
})

describe('Regression suite', () => {
    it('Login test', () => {
        const lp=new Login()
        lp.visit()
        lp.fillUsername("emilia")
        lp.fillPassword("emilia")
        lp.submit()
    })
    it('Supplier Group Assignment', () => {
        cy.wait(1000)
        supplierGroupAssignment()
    })
})