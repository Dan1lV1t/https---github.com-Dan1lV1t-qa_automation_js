class GitHubPricePage {
    get buttonPrice() { return $('a[href="/pricing"]');}
    get headerText() { return $('h1.h2-mktg');}
    get compareFeaturesButton() { return $('a[href="#compare-features"]');}



    async clickPriceButton() {

        await this.buttonPrice.click();
    }

    async waitForHeaderText() {

        await this.headerText.waitForDisplayed();
    }

    async scrollIntoView(element) {

        await element.scrollIntoView();
    }

    async clickCompareFeaturesButton() {
        
        await this.compareFeaturesButton.click();
    }
}

export default new GitHubPricePage();