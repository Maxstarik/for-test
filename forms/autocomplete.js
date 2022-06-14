export async function autocomplete(name, option) {
  page.click(`app-autocomplete[id="${name}"]`);
  const xpath = `//div[contains(@class, 'mat-autocomplete-panel')]//*[contains(text(), '${option}')]`;
  const element = await page.waitForXPath(xpath, { timeout: 10000 });
  await page.evaluate((e) => e.scrollIntoView(), element);
  await element.click();
  await page.waitForSelector('.mat-autocomplete-panel', { hidden: true });
}
