export async function button(text) {
  const xpath = `//button//*[contains(text(), '${text}')]`;
  const element = await page.waitForXPath(xpath, { timeout: 10000 });
  await page.evaluate((e) => e.scrollIntoView(), element);
  element.click();
}

//('вынести в функцию клика при скролле')//async function click(element) {
    //await page.evaluate((e) => e.scrollIntoView(), element);
    //element.click();
//}