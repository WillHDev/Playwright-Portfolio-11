const {test, expect} = require('@playwright/test');

test('Validate Youtube title', async({page}) => {


    // const context = await browser.newContext({
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true 
    //   });
    
    await page.goto('https://www.youtube.com/')

    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('gratitude tips');

    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.getByRole('link', { name: 'Gratitude For Kids - How To' }).click();

    
    console.log(await page.content());
    await page.screenshot({path: "test.png", fullPage: true});
    

    //expect(await page.getByRole('link', { name: 'Gratitude For Kids - How To' })
    await expect(page).toHaveTitle( 'Gratitude For Kids - How To Develop The Attitude Of Gratitude - YouTube');
   
})
