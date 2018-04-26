import puppeteer from "puppeteer";

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
});

describe("Check google page title", () => {
    test("lead can submit a contact request", async () => {
      await page.goto("http://google.com");
      const pageTitle = await page.title()
      expect(pageTitle).toBe("Google");
    });
  });

afterAll(() => {
    browser.close();
});