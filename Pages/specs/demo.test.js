const { chromium } = require('playwright');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');


describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll( async ()=>{
        browser = await chromium.launch({ headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    afterAll( async ()=> {
        await context.close();
        await browser.close();

    });

    it('Should be able to login', async() => {
        await loginPage.login('demo121@gmail.com', 'demo121');
        expect(await page.title()).not.toBeNull();
    })

    it('Should be logged in as don joe', async() => {
        expect(await homePage.getUserName()).toBe('don joe');
    })
})