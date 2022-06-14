export async function input(name, text) {
  await page.$eval(`*[formcontrolname="${name}"]`, (e) => e.scrollIntoView());
  await page.type(`*[formcontrolname="${name}"]`, text);
}
