 class MainTest {
    get subscribeButton() { return $('a[href="https://resources.github.com/newsletter/"]')}
    get textNewsletter() { return $('h1.Primer_Brand__Heading-module__Heading___IVpmp')}
    get inputEmail() { return $('input[name="emailAddress"]')}
    get countrySelect() { return $('#country')}
    get checkBox() { return $('#gated-agree-marketingEmailOptin1')}
    get subscribeButtonFinal() { return $('form > :nth-child(1) > button')}



    async clickSubscribeButton() {
        await this.subscribeButton.click();
    }

    async isSubscribeButtonExisting() {
        return await this.subscribeButton.isExisting();
    }

    async isSubscribeButtonClickable() {
        return await this.subscribeButton.isClickable();
    }

    async enterEmailAddress(email) {
        await this.inputEmail.addValue(email);
    }

    async selectCountryByValue(value) {
        await this.countrySelect.selectByAttribute('value', value);
    }

    async checkMarketingOptIn() {
        await this.checkBox.click();
    }

    async doubleClickFinalSubscribeButton() {
        await this.subscribeButtonFinal.scrollIntoView({ block: 'center', inline: 'center' });
        await this.subscribeButtonFinal.waitForClickable();
        await this.subscribeButtonFinal.doubleClick();
    }
}

export default new MainTest();