describe('SauceDemo E2E Test', () => {

    const username = 'standard_user';
    const password = 'secret_sauce';

    it('login successfully', function(){
        cy.visit('https://www.saucedemo.com/')
    })

})