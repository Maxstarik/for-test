export async function complexCreated(text) {
  const xpath = `//simple-snack-bar//*[contains(text(), '${text}')]`;
  const element = await page.waitForXPath(xpath, { timeout: 30000 });
  await page.waitForTimeout(1000)
}
