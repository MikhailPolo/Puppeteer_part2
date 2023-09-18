let page;
const { clickElement, getText } = require("./lib/commands.js");
beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
    await clickElement(page, ".page-nav > a:nth-child(2)");
    await clickElement(page, "a.movie-seances__time");
  });
  
  afterEach(() => {
    page.close();
  });

describe("Booking tickets", () => {

    test ("Booking one ticket for tomorrow", async () => {
        await clickElement(page, '.buying-scheme__row > span:nth-child(6)');
        await clickElement(page, 'button.acceptin-button');
		const actual = await getText(page, ".acceptin-button");
        expect(actual).toContain('Получить код бронирования');
	});
    
    test ("Booking two ticket for tomorrow", async () => {
        await clickElement(page, '.buying-scheme__row > span:nth-child(6)');
        await clickElement(page, '.buying-scheme__row > span:nth-child(7)');
        await clickElement(page, "button.acceptin-button");
        await clickElement(page, "button.acceptin-button");
		const actual = await getText(page, ".ticket__hint");
        expect(actual).toContain('Покажите QR-код нашему контроллеру для подтверждения бронирования.');
	})

    test ("Booking purchase of occupied space for tomorrow", async () => {
        await clickElement(page, '.buying-scheme__row > span:nth-child(7)');
        await clickElement(page, 'button.acceptin-button');
        expect(await page.$eval("button", (button) => { return button.disabled;})).toBe(true);             

    })


})