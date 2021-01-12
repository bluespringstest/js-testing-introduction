const{generateText, checkAndGenerate} = require('../util.js');
const puppeteer = require('..node_modules/../puppeteer');

test('should output name and age', () => {
    const text = generateText('Fred', 30);
    expect(text).toBe('Fred is 30 years old') ;
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Joe', 27);
    expect(text).toBe('Joe is 27 years old')
});

test('should click', async () =>{
    const browser = await puppeteer.launch({
        headless: false,
        slowM: 80,
        args: ['--window-size = 1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('C://Users//user//OneDrive//Documents//GitHub//js-testing-introduction//index.html');
    await page.click('input#name');
    await page.type('input#name', 'joe');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('joe (28 years old)');
});