//import { tab } from '../forms';
const PageObject = require('puppeteer-page-object');
export class load {
  async loads() {
    await page.waitForTimeout(2000);
    await page.click('[id="mat-tab-label-0-1"]');
  }
}
export const newMedia = new load();
