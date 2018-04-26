import puppeteer from "puppeteer";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        args: [`--window-size=${width},${height}`]
      });
    page = await browser.newPage();
});

describe("Check google page title", () => {
    test("lead can submit a contact request", async () => {
      await page.goto("http://google.com");
      const pageTitle = await page.title()
      expect(pageTitle).toBe("Google");
    }, 16000);
  });

afterAll(() => {
    browser.close();
});