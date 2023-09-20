import LoginPage from "../specs/Pages/main_page.js"

it("Should show registration on the main page.", async () => {

    await browser.url('https://github.com/');
    await browser.pause(2000);

    await LoginPage.signupButton.click()
    await browser.pause(2000);

    await expect(LoginPage.textElement).toBeExisting();
 
    await LoginPage.inputEmail.addValue('testaqa@gmail.com');

    await LoginPage.continueEmail.waitForClickable();
    await LoginPage.continueEmail.click();

    await LoginPage.inputPassword.addValue('wadawdawdadwdawdawd');

    await LoginPage.continuePassword.waitForClickable();
    await LoginPage.continuePassword.click();
    
    await LoginPage.inputUsername.addValue('WinTheCase');
    
    await LoginPage.continueUser.waitForClickable();
    await LoginPage.continueUser.click();

    await LoginPage.confirmationText.addValue('y');

    await LoginPage.continueConfirmation.waitForClickable();
    await LoginPage.continueConfirmation.click();

    await browser.pause(2000);
    
});


