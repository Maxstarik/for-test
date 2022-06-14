const PageObject = require('puppeteer-page-object');
import { select, autocomplete, toggleSwitch, input, button, complexCreated } from '../forms';

export class form {
  async complex() {
    await input('name', 'Венеция на Крестовском');
    await select('region', 'Краснодарский край');
    await select('type', 'Апартаментный комплекс');
    await autocomplete('city', 'Сочи');
    await toggleSwitch('Отображать в каталоге');
    await input('parking', 'Подземный');
    await button('Сохранить');
    await page.waitForTimeout(2000)
    await complexCreated('ЖК успешно создан');
  }
}
export const newForm = new form();
