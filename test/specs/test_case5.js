import GitHubPricePage from "../specs/Pages/main_CaseFive.js" 

it('Should show search', async () => {
    await browser.url('https://github.com/');
    await browser.pause(2000);

    await GitHubPricePage.clickPriceButton();
    await browser.pause(2000);

    await GitHubPricePage.waitForHeaderText();
    console.log(await GitHubPricePage.headerText.getText());

    await GitHubPricePage.scrollIntoView(GitHubPricePage.compareFeaturesButton);

    const compareButton = GitHubPricePage.compareFeaturesButton;
    console.log(await compareButton.isDisplayed());
    console.log(await compareButton.isClickable());

    await GitHubPricePage.clickCompareFeaturesButton();
    await browser.pause(2000);

    const headerText = GitHubPricePage.headerText;
    await GitHubPricePage.scrollIntoView(headerText);
    console.log(await headerText.isDisplayed());
    console.log('The text visible: ' + await headerText.getText());

    await browser.pause(2000);
});
