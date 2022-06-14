export async function scroll(element) {
  //const element = await page.waitForXPath(xpath, { timeout: 10000 });
  await page.evaluate((e) => e.scrollIntoView(), element);
  element.click();
}
