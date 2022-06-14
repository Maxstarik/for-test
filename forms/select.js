export async function select(name, option) {
  page.click(`mat-select[formcontrolname="${name}"]`);
  const xpath = `//div[contains(@class, 'mat-select-panel-wrap')]//*[contains(text(), '${option}')]`;
  const element = await page.waitForXPath(xpath, { timeout: 10000 });
  await page.evaluate((e) => e.scrollIntoView(), element);
  await element.click();
  await page.waitForSelector('.mat-select-panel-wrap', { hidden: true });
}
