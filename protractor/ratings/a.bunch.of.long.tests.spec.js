describe('My long tests', function(){
    beforeEach(function(){
        browser.get('http://localhost:3000/#!/EventRatings');
        browser.driver.sleep(1000);
    });

    it('Should check some data', function(){
        expect(true).toBeTruthy();
    });

    it('Should check some more data', function(){
        expect(false).toBeFalsy();
    });
});
