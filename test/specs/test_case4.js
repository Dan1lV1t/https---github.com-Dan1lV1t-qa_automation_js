import SearchGit from "../specs/Pages/main_CaseFour.js"
import { Key } from 'webdriverio'

it('Should show search', async () => {
    await browser.url('https://github.com/')
    await browser.pause(2000)

    

    await SearchGit.searchButton.waitForClickable()

    await SearchGit.searchButton.doubleClick()

    await SearchGit.searchButton.addValue("tools")
    await browser.pause(1000)

    await browser.keys([Key.Enter])

    await browser.pause(5000)

    const elements = await $$('span.Text-sc-17v1xeu-0.qaOIC.search-match')
    let found = false

    for (const element of elements) {
        const text = await element.getText()
        if (text.includes('tools')) {
            found = true
            break
        }
    }

    expect(found).toBe(true)
})