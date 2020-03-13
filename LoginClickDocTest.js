describe('ClickDoc homepage', function() {
    var login = element(by.css('input#mat-input-0'));
    var password = element(by.id('mat-input-1'));
    var loginButton = element(by.xpath("//button[@data-web-test='login_primary_btn']"));
    var forgotPassword = element(by.css('div>main>app-login>div>div>div>div>div:nth-of-type(2)>div>div>span'));
    var registerButton = element(by.xpath("//button[@data-web-test='login_register_btn']"));
    var errorMessage = element(by.css('div.col-12>app-error-message.ng-star-inserted>div.error-container'));
    var userProfile = element(by.css('div.dropdown-container a.dropdown-item:nth-child(1) div.menu-link > span.menu-text'));
    var logout = element(by.css('div.dropdown-menu.ng-tns-c1-0.ng-star-inserted.show div.dropdown-container a.dropdown-item:nth-child(2) div.menu-link > span.menu-text'));
    var profileIconBeforeLogout = element(by.css('a.menu-link.user-profile-dropdown-toggle app-avatar.extra-small div.avatar-image.extra-small > img.ng-star-inserted'));    
    var profileIconAfterLogout = element(by.xpath("//li[@id='menu-item-2004']//a[contains(text(),'Profil')]"));
    browser.manage().timeouts().implicitlyWait(4000);
//Redirect to Website Url
  it('Should contain title ClickDoc', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://demo.clickdoc.de/cd-de/search');
    browser.manage().window().maximize();
    expect(browser.getTitle()).toContain('CLICKDOC');
    });
//Switch to Login popup
  it('Should switch to iframe', function() {
    element(by.css('div.app-container.ng-star-inserted app-header.ng-tns-c1-0:nth-child(1) div.header div.header-wrapper div.container div.float-right ul.menu-desktop.d-lg-block.d-md-none.d-sm-none li.menu-item.fullOpacity.ng-tns-c1-0.ng-star-inserted:nth-child(5) a.menu-link > span.bold-menu-text')).click();
    browser.switchTo().frame(element(by.id('iframeDialog')).getWebElement());
    });
//Verify fields on login popup
  it('Verify login,password,forgot password,login button and click on login', function() {
    browser.sleep(12000);
    expect(login.isDisplayed()).toBe(true);
    expect(password.isDisplayed()).toBe(true);
    expect(loginButton.isDisplayed()).toBe(true);
    expect(forgotPassword.isDisplayed()).toBe(true);
    expect(registerButton.isDisplayed()).toBe(true);
    loginButton.click();
    browser.sleep(10000);
   });
//Verify error when login with invalid password details
  it('Login as invalid user with invalid password', function() {
    login.sendKeys('dirk.nonn@cgm.com#1111');
    password.sendKeys('abcdefg');
    loginButton.click();
    browser.sleep(30000);
    expect(errorMessage.getText()).toContain('Sie Ihre E-Mail-Adresse, Passwort und probieren Sie es noch einmal.');
  });
//Verify error when login with invalid emailid details
  it('Login as invalid user with invalid emailid', function() {
    login.clear();
    password.clear();
    login.sendKeys('test123@gmail.com');
    password.sendKeys('recruitingTest1!');
    loginButton.click();
    browser.sleep(30000);
    expect(errorMessage.getText()).toContain('Sie Ihre E-Mail-Adresse, Passwort und probieren Sie es noch einmal.');
  });
//Verify login with valid user
  it('Login as valid user', function() {
    login.clear();
    password.clear();
    login.sendKeys('dirk.nonn@cgm.com#1111');
    password.sendKeys('recruitingTest1!');
    loginButton.click();
    browser.sleep(30000); 
    browser.switchTo().defaultContent();
  });
//Verify logout
  it('Logout', function() {
    element(by.css('span.icon.icon-G3_thirdLevelPointer')).click();
    browser.sleep(5000);
    expect(profileIconBeforeLogout.isDisplayed()).toBe(true);
    logout.click();
    browser.sleep(6000);
    expect(profileIconAfterLogout.isDisplayed()).toBe(true);
    browser.sleep(2000);
  });
});
