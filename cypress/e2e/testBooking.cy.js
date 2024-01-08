import { basePage } from '../support/pages/BasePage';
import { resultPage } from '../support/pages/ResultPage';

describe('Booking', () => {
    const searchQueries = ['Bukovel, Ukraine', 'Yaremche, Ukraine'];

    beforeEach(() => {
        basePage.open(basePage.baseUrl);
    });

    searchQueries.forEach((searchQuery) => {
        it(`search with filter "${searchQuery}"`, () => {
            basePage.inputDestination(searchQuery);
            basePage.setDataFilter();
            resultPage.assertResultCard(searchQuery.split(',')[0]);
        });
    });
});











