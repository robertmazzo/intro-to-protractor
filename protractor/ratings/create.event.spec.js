var CreatePage = require('./pages/create.event.page.js');
var ListPage = require('./pages/event.list.page.js');

describe('Adding a new event',function () {
    var button;
    var css;
    var createPage = new CreatePage();  // an instance of our Createpage
    var listPage = new ListPage();

    beforeEach(function () {
        browser.get('http://localhost:3000/#!/EventRatings/new');
        button = element(by.buttonText('Create'));
    })
    describe('When the form is empty', function () {
        it('Should disable the Create button', function () {

            //var css = button.getAttribute('class');
            var css = createPage.getButtonClasses();

            expect(css).toMatch('disabled');
        });
    });
    describe('When specifying the name', function () {
        it('Should enable the Create button', function () {

            // THIS ENTERS THE TEXT, WHICH SHOULD NOW EBABLE THE 'Create' Button

            // **** Comment out and use the createPage var instead ****
            //element(by.model('event.name')).sendKeys('A Sample Event');

            // .name replaces 'event.name' above; see create.event.page.page.js export object
            createPage.name.sendKeys('A Sample Event');

            // **** Comment and use createPage object instead ***
            //var css = button.getAttribute('class');
            var css = createPage.getButtonClasses;

            expect(css).not.toMatch('disabled');
        });
    });
    
    describe('When saving the form', function () {
        it('Should add the event to the list', function () {

            // **** Comment out and use the createPage var instead ****
            //element(by.model('event.name')).sendKeys('Module 3');
            createPage.name.sendKeys('Module 3');

            //button.click();   // see create.event.page.js for button var
            createPage.saveData();

            browser.waitForAngular();

            // *** COMMENT OUT AND USE listPage var instead ****
            //var list = element.all(by.binding('name'));
            //expect(list.getText()).toMatch('Module 3');

            expect(listPage.getNameTexts()).toMatch('Module 3');
        })        
    });
});