import { assert } from "chai"

const asser = require('assert')
export class MainPage{
    async open(path: string){
        await browser.url(path)
        }
    async slippers(){
            await $('//span[@class="icon icon-shopping-bag-white"]').click()
            await $('//span[text()="42/43"]').click()
            await browser.pause(3000)
            const box = await $('//span[@class="shoppingbag-item-count"]')
            assert(await box.isDisplayed(),'good')
            assert(await box.getText()==="1",'wrong test')
            
    }
        async AddSecondSlippers(){
            await $('//a[@id="filter-colour-1025755001"]').click()
            await $('//span[@class="icon icon-shopping-bag-white"]').click()
            await browser.pause(3000)
            await $('//span[text()="44/45"]').click()
            await browser.pause(7000)
        }
        async NextPage(){
            await $('//a[@href="/ru_ru/cart"]').moveTo()
            await browser.pause(2000)
            const colorName = $('//span[text()="Светло-серый/Рик и Морти"]')
            assert(await colorName.isDisplayed(), 'wrong selector')
            assert(await colorName.getText() == "Светло-серый/Рик и Морти", "wrong text")
        }
}
export const main = new MainPage()

