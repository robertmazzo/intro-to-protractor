describe('Event List Details: ', function () {
    describe('When clicking on an event', function () {

        // grabs e.name from event.list.html; also see ratings\config\ratings.routes.js
        var name;
        
        beforeEach(function () {    // THIS SECTION RUNS BEFORE EACH "it" TEST BELOW !!!
            browser.get('http://localhost:3000/#!/EventRatings');    // PART OF PROTRACTOR !!!

            var firstElement = element.all(by.binding('name')).first();

            firstElement.getText().then(function(text){
                name = text;
            });

            // we click on the first rating item, which brings up the details page
            firstElement.click();

            browser.waitForAngular(); // tells browser to wait for angular to fully render.
        })

        it('Should navigate to the details page',function () {
            // Now we landed on the event.details view (..\ratings\views)
            var header = element.all(by.binding('name'));

            expect(header.getText()).toMatch('Jazz On The Green');   // Jasmine test. The promise is built into getText()
        });

        it('Should update the url', function () {
            // i.e. when a rating item is click, the details page comes up as 'EventRatings/'
            expect(browser.getCurrentUrl()).toMatch('EventRatings/');
        })
    });
});