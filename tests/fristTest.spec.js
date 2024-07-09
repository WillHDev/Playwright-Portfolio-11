const {test, expect} = require('@playwright/test');

test('Validate Youtube title', async({page}) => {
    await page.goto('https://www.youtube.com/')

    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('gratitude tips');

    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.getByRole('link', { name: 'Gratitude For Kids - How To' }).click();
    

    //expect(await page.getByRole('link', { name: 'Gratitude For Kids - How To' })
    await expect(page).toHaveTitle( 'Gratitude For Kids - How To Develop The Attitude Of Gratitude - YouTube');
   
})
