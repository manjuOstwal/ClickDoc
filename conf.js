var HtmlReporter = require('C:/Users/manju.bala/node_modules/protractor-beautiful-reporter');
exports.config = {
directConnect:true,
specs: ['LoginClickDocTest.js','PhysicianSearchTest.js'],
framework: 'jasmine',
jasmineNodeOpts: {
defaultTimeoutInterval:2500000
},
capabilities: {
    'browserName' : 'chrome'
      },
 onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots',
         screenshotsSubfolder: 'AllImages',
   
      }).getJasmine2Reporter());
   }

};



 
  