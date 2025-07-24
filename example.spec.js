/*
const { test, expect } = require('@playwright/test');

test.only('example.com loads and contains expected text', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toHaveText('Example Domain');
});
*/

/*const {test} = require('@playwright/test');


test('First PWtest',async ()=> //anonymus function
{
//playwright code
//step1 - open brwser
//step2 - login - 2 seconds
//await
//step3 - click


});
*/


const {test , expect} = require('@playwright/test');
//const {expect} = require('../playwright.config');
//const { clear } = require('console');


test.only('Browser login',async ({page})=>
{
//chrome - plugins/cookies
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



//const cardTitles = page.locator('.card-body b');
//console.log(await page.title());
