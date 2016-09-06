exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',    // configure the port
    /*specs: [
        './ratings/event.list.item.spec.js',
        './ratings/new.event.spec.js',
        './ratings/create.event.spec.js',
        //'./ratings/event.details.spec.js' // There are no ratings, so I cannot test it !!!!!
    ],*/
    specs:['./**/*.spec.js'],   // *** THIS WILL TEST ALL SPEC FILES ***
    suites:{
        smoke: './smoke/*.spec.js',
        longRunning: './ratings/a.bunch.of.long.tests.spec.js',
        full: './**/*.spec.js',
        create: './ratings/create.event.spec.js'  // JUST TO TEST ONE SPEC !!
    },
    // put it in upper left hand corner, then set size
    onPrepare: function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280, 720);
    }
}
