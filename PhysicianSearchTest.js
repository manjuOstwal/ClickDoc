describe('ClickDoc homepage', function() {
    var suchseite = element(by.xpath("(//a[contains(@data-text,'Suchseite')])[1]"));
    var name = element(by.css('#search-query-typeahead'));
    var place = element(by.css('#search-location-typeahead'));
    var onlineTermineText = element(by.css('div.row.mb-2:nth-child(3) div.col-sm-12 div.custom-control.custom-checkbox label.custom-control-label.d-flex > span.text'));
    var videospreche = element(by.css('div.row.mb-2:nth-child(4) div.col-sm-12 div.custom-control.custom-checkbox label.custom-control-label.d-flex > span.text'));
    var Barrierefreiheit = element(by.css('div.row.mb-4.ng-star-inserted:nth-child(5) div.col-sm-12 div.custom-control.custom-checkbox label.custom-control-label.d-flex > span.text'));
    var suchenButton = element(by.css('div.row:nth-child(6) div.col-sm-12 > button.btn.btn-primary.btn-block')); 
    var BesteRadioButton = element(by.css('div.row.ng-star-inserted:nth-child(2) div.sort div.container div.row.mb-2:nth-child(2) div.col-sm-12 > div.custom-control.custom-radio'));
    var alphabetischRadioButton = element(by.css('div.row.ng-star-inserted:nth-child(2) div.sort div.container div.row.mb-2:nth-child(3) div.col-sm-12 > div.custom-control.custom-radio'));
    var entfernungRadioButton = element(by.css('div.row.ng-star-inserted:nth-child(2) div.sort div.container div.row.mb-3:nth-child(4) div.col-sm-12 div.custom-control.custom-radio > label.custom-control-label'));
    var distanceSlider = element(by.css('div.row.mb-2:nth-child(5) div.col-sm-12.mb-4 div.custom-slider ng5-slider.ng5-slider.ng-untouched.ng-pristine.ng-valid > span.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min:nth-child(5)'));
    var doctorHeadLineName = element(by.css('app-physician-card.ng-star-inserted:nth-child(1) div.card.physician-card div.card-header.d-flex > div.physician-name.align-self-center:nth-child(2)'));
    var profile = element(by.css('app-physician-card.ng-star-inserted:nth-child(1) div.card.physician-card div.card-header.d-flex a.physician-link.d-sm-none.d-md-flex:nth-child(4) button.btn.d-sm-none.d-md-block.see-profile-button > span.btn-text'));
    var doctorName = element(by.css('app-search.ng-star-inserted:nth-child(2) div.container div.search div.row:nth-child(2) div.col-sm-12.col-md-8.col-lg-9:nth-child(3) div.row div.panel.default-panel app-physician-card.ng-star-inserted:nth-child(1) div.card.physician-card div.card-body div.physician-description div.row div.col-md-6.col-sm-12:nth-child(1) div.d-flex.flex-row.ng-star-inserted:nth-child(1) > span.description-text'));
    var address = element(by.xpath("//span[@class='description-text'][contains(.,'Maria Trost 25')]"));
    var appointmentDates = element(by.css('div.d-flex.justify-content-between:nth-child(1) div.d-flex.align-items-center.date-picker-container div.d-flex.align-items-center:nth-child(2)'));
    var noappointment = element(by.css('div.align-self-center:nth-child(2) div.col-sm-12.card-title > span'));
    browser.manage().timeouts().implicitlyWait(4000);
//Redirect to Website URL
 it('Should contain title ClickDoc', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://demo.clickdoc.de');
    browser.manage().window().maximize();
    expect(browser.getTitle()).toContain('CLICKDOC');
    });
//Click on search box
 it('Should click on suchseite', function() {
    suchseite.click();
    });
//Verify fields present on search page
 it('verify elemenets present', function() {
    expect(name.isDisplayed()).toBe(true);
    expect(place.isDisplayed()).toBe(true);
    expect(onlineTermineText .isDisplayed()).toBe(true);
    expect(videospreche.isDisplayed()).toBe(true);
    expect(Barrierefreiheit.isDisplayed()).toBe(true);
    expect(suchenButton.isDisplayed()).toBe(true);
    browser.executeScript('window.scrollTo(0,200)');
    expect(BesteRadioButton.isDisplayed()).toBe(true);
    expect(alphabetischRadioButton.isDisplayed()).toBe(true);
    expect(entfernungRadioButton.isDisplayed()).toBe(true);
    expect(distanceSlider.isDisplayed()).toBe(true);
    });
//Verify result for search with name 'Beate'
 it('verify results for search', function() {
    name.sendKeys('Beate');
    suchenButton.click();
    browser.sleep(2000);
    expect(doctorHeadLineName.getText()).toEqual('Granate, Beate');
    expect(profile.isDisplayed()).toBe(true);
    expect(doctorName.isDisplayed()).toBe(true);
    expect(address.isDisplayed()).toBe(true);
    expect(appointmentDates.isDisplayed()).toBe(true);  
    });
//Verify result for search with name 'Beate Edel'
 it('verify results for search with differentName i.e.Beate Edel', function() {
    name.clear();
    name.sendKeys('Beate Edel');
    suchenButton.click();
    var docName = element(by.xpath("(//div[@class='physician-name align-self-center'][contains(.,'Beate Edel')])[1]"));    
    expect(docName.getText()).toEqual('Beate Edel');
    expect(profile.isDisplayed()).toBe(true);
    expect(doctorName.isDisplayed()).toBe(true);
    var addressEdel = element(by.xpath("//span[@class='ng-star-inserted'][contains(.,'42853')]"));
   });
//Verify result for search with name 'Beate Edelse'
 it('verify results for search with differentName i.e.Beate Edelse', function() {
    name.clear();
    name.sendKeys('Beate Edelse');
    suchenButton.click();
    expect(noappointment.getText()).toEqual('KEINE ERGEBNISSE'); 
   });
//Verify result for search with name 'Beate' again and click on load more link
 it('verify results for again search with name Beate', function() {
    name.clear();
    name.sendKeys('Beate');
    suchenButton.click();
    expect(doctorHeadLineName.getText()).toEqual('Granate, Beate');
    expect(profile.isDisplayed()).toBe(true);
    expect(doctorName.isDisplayed()).toBe(true);
    expect(address.isDisplayed()).toBe(true);
    expect(appointmentDates.isDisplayed()).toBe(true);
    browser.executeScript('window.scrollTo(0,2000)');
    element(by.xpath('//div[@class="accept-tracking-button d-flex align-items-center justify-content-center"]')).click();
    element(by.css('div.row div.panel.default-panel div.load-more.text-center.ng-star-inserted:nth-child(11) a.load-more-link > span.icon.icon-G3_expandedBig')).click();
  });
//Verify result for search with location ,click on online termine, videosprache and check sorting order
 it('verify results for again search with location,Online termine, videosprache, sorting order ', function() {
    browser.executeScript('window.scrollTo(3000,0)');
    place.sendKeys('56567');
    element(by.xpath("//typeahead-container[@class='dropdown open dropdown-menu']//span[contains(text(),'Neuwied') and not(contains(text(),'('))]")).click();
    suchenButton.click();  
    onlineTermineText.click();
    suchenButton.click(); 
    expect(doctorHeadLineName.getText()).toEqual('Granate, Beate');
    onlineTermineText.click();
    name.clear();
    videospreche.click(); 
    suchenButton.click(); 
    videospreche.click();
    Barrierefreiheit.click();
    suchenButton.click();
    alphabetischRadioButton.click();
    browser.executeScript('window.scrollTo(0,400)');
    var slider = element(by.css('span.ng5-slider-span.ng5-slider-pointer.ng5-slider-pointer-min:nth-child(5)'));   
    browser.actions().dragAndDrop(slider,{x:100, y:0}).perform();     
    browser.sleep(2000);
    browser.close();
});


});