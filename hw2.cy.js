describe('automationteststore test cases', ()=>{
    it('register user', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get('#AccountFrm_firstname').type('Mari')
        cy.get('#AccountFrm_lastname').type('Ivaneishvili')
        cy.get('#AccountFrm_telephone').type('123456789')
        cy.get('#AccountFrm_company').type('Co.')
        cy.get('#AccountFrm_address_1').type('Tbilisi')
        cy.get('#AccountFrm_city').type('Tbilisi')
        cy.get('#AccountFrm_zone_id').select('Kent')
        cy.get('#AccountFrm_postcode').type('1234')
        cy.get('#AccountFrm_loginname').type('Mari.iva')
        cy.get('#AccountFrm_password').type('Mm123')
        cy.get('#AccountFrm_confirm').type('Mm123')
        cy.get('[for="AccountFrm_newsletter0"]').click() 
        cy.get('#AccountFrm_agree').click() 
        cy.get('.col-md-2 > .btn').click() 
        cy.get('.alert').should('be.visible')
       })
}
)


describe('automationteststore test cases', ()=>{
    it('register user', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get('#AccountFrm_firstname').type('Mari')
        cy.get('#AccountFrm_lastname').type('Ivaneishvili')
        cy.get('#AccountFrm_email').type('Mar.ivan@gmail.com')
        cy.get('#AccountFrm_telephone').type('123456789')
        cy.get('#AccountFrm_company').type('Co.')
        cy.get('#AccountFrm_address_1').type('Tbilisi')
        cy.get('#AccountFrm_city').type('Tbilisi')
        cy.get('#AccountFrm_zone_id').select('Kent')
        cy.get('#AccountFrm_postcode').type('1234')
        cy.get('#AccountFrm_loginname').type('Mar.ivane')
        cy.get('#AccountFrm_password').type('Mm123')
        cy.get('#AccountFrm_confirm').type('Mm123')
        cy.get('[for="AccountFrm_newsletter0"]').click() 
        cy.get('#AccountFrm_agree').click() 
        cy.get('.col-md-2 > .btn').click() 
        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('contain','Welcome back Mari')
        cy.get('#topnav > .form-control').select('Specials').click
        cy.get('.maintext').should('be.visible')
        cy.url().should('include','product/special')
       })
}

)
