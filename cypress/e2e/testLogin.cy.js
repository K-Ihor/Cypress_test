import { basePage } from '../support/pages/BasePage';
import { signInPage } from '../support/pages/SignInPage';


describe('Login', () => {

    beforeEach(() => {
        basePage.open(basePage.baseUrl);
    });

    it.only(`wrongLogin`, () => {
        basePage.goToSignInPage();
        basePage.typeEmailData(signInPage.wrongEmail);

        cy.get('#username-note').should('be.visible').and('contain.text', "Please check if the email address you've entered is correct.");

    });

});