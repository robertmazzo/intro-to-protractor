// PROBLEM HERE !!!!!!
// I cannot enter a ratings record for the event. There is no ratings view/controller in this app !!!!
describe('Event Details', function () {
    describe('Ratings Block', function () {
        beforeEach(function () {
            // GET ID OF FIRST RECORD
            browser.get('http://localhost:3000/#!/EventRatings/57ca1447976b5a341bc43a23');
        });

        it('Should show all ratings', function () {
            var ratings = element.all(by.repeater('r in eventDetails.ratings'));

            expect(ratings.count()).toBe(6); // BAD IDEA
            //expect(ratings.count()).toBeGreaterThan(0); // greaterThan(0) ?
        });
        it('Should have a description', function () {
            var desc = element.all(by.repeater('r in eventDetails.ratings').column('description'));
            expect(desc.getText()).toMatch('Some nice jazz music outside.');
        });

    });
});