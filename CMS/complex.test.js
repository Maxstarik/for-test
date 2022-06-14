import 'expect-puppeteer';
import { newForm } from '../pageObjects/form';
import { newMedia } from '../pageObjects/media loads';
const BASE_URL = process.env.BASE_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

beforeAll(async () => {
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto(`${BASE_URL}/auth/sign-in`);
  await page.waitForSelector('input[type=email]', { visible: true });
  await page.type('input[type=email]', EMAIL);
  await page.type('input[type=password]', PASSWORD);
  await page.click('button[type=submit]');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
});

describe('Residential complex', () => {
  it('schould be create', async () => {
    await page.goto(`${BASE_URL}/cms/objects/complexes/new`);
    await newForm.complex();
  })
  it ('media should be load', async () =>{
    await newMedia.loads();
  })})
//BASE_URL=http://localhost EMAIL=admin@oz.ru PASSWORD=qwerty123 npm test
