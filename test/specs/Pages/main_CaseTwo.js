class GitHubPage {

    get linkToScrollTo() { return $('a[href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=Home+campaign+footer&ref_page=%2F"]');}
    get headerText() { return $('.color-fg-default.mb-3.h3-mktg.col-lg-8.mx-md-auto.px-3'); }
    get startButton() { return $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]'); }
    get enterpriseButton() { return $('a[href="/account/enterprises/new?ref_cta=Enterprise%2520Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan%3Fref_cta%3DStart%2Ba%2Bfree%2Benterprise%2Btrial%26ref_loc%3DHome%2Bcampaign%2Bfooter%26ref_page%3D%252F"]'); }
    get elementText() { return $('h1.d-none.d-md-block.mt-0.mb-3.text-center.h1.lh-condensed-ultra'); }



    async scrollToSignUpLink() {
        await this.linkToScrollTo.scrollIntoView({ block: 'center', inline: 'center' });
    }

    async checkHeaderText() {
        return await this.headerText.getText();
    }

    async clickStartButton() {
        await this.startButton.click();
    }

    async checkElementText() {
        return await this.elementText.getText();
    }

    async clickEnterpriseButton() {
        await this.enterpriseButton.click();
        await browser.pause(5000);
    }
}

export default new GitHubPage();