import GitHubPage from "../specs/Pages/main_CaseTwo.js"

it("Should show scroll and make the link visible", async () => {
    await browser.url("https://github.com/");

    await GitHubPage.scrollToSignUpLink();

    const headerText = await GitHubPage.checkHeaderText();
    expect(headerText).toBe("The place for anyone from anywhere to build anything");

    await GitHubPage.clickStartButton();

    const elementText = await GitHubPage.checkElementText();
    expect(elementText).toBe("Pick your trial plan");

    await GitHubPage.clickEnterpriseButton();
});