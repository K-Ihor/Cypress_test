export class ResultPage{

    elementsOfSearchResult = '[data-testid="property-card"]';


    assertResultCard(location){
        cy.get(this.elementsOfSearchResult).each(($propertyCard) => {
            cy.wrap($propertyCard).find('span[data-testid="address"]')
            .should('contain', location);
        });
    }
}

export const resultPage = new ResultPage()
