import { signInPage } from "./SignInPage";

export class BasePage{

    baseUrl = 'https://www.booking.com/index.en-gb.html'
    signInButton = '[data-testid="header-sign-in-button"]';
    searchButton = 'button[type="submit"]';
    searchDestination = '[data-testid="destination-container"]';
    selectData = '[data-testid="searchbox-dates-container"]';
    configRooms = '[data-testid="occupancy-config"]';
    data1 = '[data-date="2024-02-01"]';
    data2 = '[data-date="2024-02-04"]';
    elementsOfSearchResult = '[data-testid="property-card"]'


    open(url){
        cy.visit(url);
    }

    inputDestination(destination){
        cy.get(this.searchDestination).should('be.visible');
            cy.wait(1000);
            cy.get(this.searchDestination).type(destination);
            cy.wait(1000);
            cy.get('#autocomplete-result-0').should('contain', destination.split(',')[0]).click();
    }

    setDataFilter(){
        cy.get(this.searchDestination)
                .wait(1000)
                .get(this.data1)
                .click()
                .wait(1000)
                .get(this.data2)
                .click()
                .wait(1000)
                .get(this.searchButton)
                .click()
                .wait(1000);
    }

    goToSignInPage(){
        cy.get(this.signInButton).click();
        cy.wait(3000);
        cy.get(signInPage.inputEmailAddress).should('be.visible');
        cy.get(signInPage.continueWithEmail).should('be.visible');
    }

    typeEmailData(email){
        // cy.get(signInPage.continueWithEmail).should('be.visible');
        cy.get(signInPage.inputEmailAddress).type(email);
        cy.get(signInPage.continueWithEmail).click();
    }

}

export const basePage = new BasePage() 