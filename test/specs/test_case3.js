import MainTest from "..//specs/Pages/attempt.js"

it('Should show scroll and make the Subscribe button visible and clickable', async () => {
    await browser.url('https://github.com/');

    const isExisting = await MainTest.isSubscribeButtonExisting();
    const isClickable = await MainTest.isSubscribeButtonClickable();

    expect(isExisting).toBe(true);
    expect(isClickable).toBe(true);

    await MainTest.clickSubscribeButton();

    await browser.waitUntil(async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl === 'https://resources.github.com/newsletter/';
    });

    expect(await browser.getUrl()).toBe('https://resources.github.com/newsletter/');
    expect(await MainTest.textNewsletter.getText()).toBe("Subscribe to our developer newsletter");

    await MainTest.enterEmailAddress("testaqa@gmail.com");
    await MainTest.selectCountryByValue('AR');
    await MainTest.checkMarketingOptIn();
    await MainTest.doubleClickFinalSubscribeButton();

    await browser.pause(5000);

    const thanksMessage = await browser.$('h1.Primer_Brand__Heading-module__Heading___IVpmp');
    const thanksletter = await thanksMessage.getText();

    expect(thanksletter).toBe("Thanks for subscribing!");

    await browser.pause(2000);
});

