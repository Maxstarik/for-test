export async function toggleSwitch(label) {
  const xpath = `//mat-slide-toggle//*[contains(text(), '${label}')]`;
  const element = await page.waitForXPath(xpath, { timeout: 10000 });
  // await page.evaluate((e) => e.scrollIntoView(), element);
  await element.click();
  // await page.waitForSelector('.cdk-focused', { hidden: true });
}
