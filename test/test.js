const assert = require('assert');
const puppeteer = require('puppeteer'); 
const opts = process.env.D ? { headless: true, slowMo: 250 } : {};

describe('Mocha Puppeteer Sample', function() {
  let browser;
  let page;
  let server;

  before(async function() { 
    this.timeout(10000);
    // Create an Express static server that will serve up `index.html` at
    // `http://localhost:3000/index.html`
    // const app = require('express')();
    // app.use(require('express-static')('.'));
    // server = await app.listen(3001);
    //
    // // Launch Puppeteer and navigate to the Express server
    // browser = await puppeteer.launch(opts);
    // page = await browser.newPage();
    // await page.goto('http://localhost:3001/index.html');
  });

  after(async function() {
    // await browser.close();
    // await server.close();
  });

  it('Test Case 1"', async function() {
    // const tag = 'h1';
    // await page.waitForTimeout(tag);
    // const heading = await page.$eval(tag, heading => heading.innerText);
    // assert.equal(heading, 'Katalon TestOps')
  });

  it('Test Case 2"', async function() {
    // const tag = 'h1';
    // await page.waitForTimeout(tag);
    // const heading = await page.$eval(tag, heading => heading.innerText);
    // assert.equal(heading, 'Katalon TestOps')
  });
});