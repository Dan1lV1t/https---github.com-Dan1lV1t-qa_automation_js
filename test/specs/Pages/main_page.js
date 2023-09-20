class LoginPage {
    
    get signupButton() { return $('.HeaderMenu-link--sign-up') }
    get textElement() { return $('[data-target="typing-effect.content"]')}
    get inputEmail() { return $('#email')}
    get continueEmail() { return $('#email-container .signup-continue-button')}
    get inputPassword() { return $('#password')}
    get continuePassword() { return $("#password-container .signup-continue-button")}
    get inputUsername() { return $("#login")}
    get continueUser() { return $('#username-container .signup-continue-button')}
    get confirmationText() { return $('#opt_in')}
    get continueConfirmation() { return $('#opt-in-container .signup-continue-button')}



    async clickSignupButton() {
       await this.signupButton.click()
   }

    async SetInputEmail() {
       await this.inputEmail.addValue.addValue(value)
   }

   async clickContinueEmail() {
       await this.continueEmail.click()
   }

   async SetInputPassword() {
       await this.inputPassword.addValue(value)
   }
   
    async clickContinuePassword() {
       await this.inputPassword.click()
   }

   async SetInputUserName() {
       await this.SetInputUserName.addValue(value)
    }

    async clickContinueUser() {
       await this.SetInputUserName.click()
    }

    async SetInputConfirmationText() {
       await this.confirmationText.addValue(value)
    }

    async clickContinueConfirmation() {
       await this.continueConfirmation.click()
   }


};

export default new LoginPage