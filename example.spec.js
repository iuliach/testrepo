const {test , expect} = require('@playwright/test');

test.only('Browser login',async ({page})=>
{
const username = "student";
//const text = page.locator("p[class='has-text-align-center'] strong");
//const button = page.locator("//a[normalize-space()='Log out']");

await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator('#username').fill(username);
await page.locator('#password').fill("Password123");
await page.locator("#submit").click();
await page.waitForLoadState('networkidle');
//await page.locator("p[class='has-text-align-center'] strong");
//await page.locator("//a[normalize-space()='Log out']").click();
//console.log(page.locator("p[class='has-text-align-center'] strong"));
const titles = await page.locator(".post-title").allTextContents();
console.log(titles);
    //await expect(page.locator("p[class='has-text-align-center'] strong").last()).toBeChecked();
await page.waitForTimeout(5000); 


});

/*
test('Browser negative login1',async ({page})=>
{
//chrome - plugins/cookies
const username = "student";

const button = page.locator("//a[normalize-space()='Log out']");

await page.goto("https://practicetestautomation.com/practice-test-login/");
await page.locator('#username').fill(username);
await page.locator('#password').fill("Password123");
await page.locator("#submit").click();
await page.waitForLoadState('networkidle');
await page.locator("//a[normalize-space()='Log out']").click();


await page.waitForTimeout(5000); 


});


