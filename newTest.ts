import { basket } from "../../pageObject/basketPage";
import { main } from "../../pageObject/mainPage"

const asser = require ('assert')
describe ('Buy a slippers',() => {
    it ('The slippers bought', async ()=> {
        await main.open('/ru_ru/productpage.1025755003.html');
        await main.slippers();
        await browser.pause(3000)
        await main.AddSecondSlippers();
        await main.NextPage();
        await basket.open('/ru_ru/cart')
        await basket.workNextPage()
})
    })