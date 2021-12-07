const assert = require ('assert')
export class BasketPage{
    async open(path:string){
        await browser.url(path)
    }
    async workNextPage(){
        await $('//button[@id="onetrust-reject-all-handler"]').click()
        const sum = $('//li[1]//article/div[2]/div/div')
        await sum.click()
        await $('//option[@value="4"]').click()
        await sum.click()
        await $('//article//div[2]/button').click()
        await browser.pause(3000)
        await browser.refresh()
        await browser.pause(2000)
        const price = await $('//li[4]/span[2]')
        assert(price.isDisplayed(),'wrong sum')
            const delivery = await price.getText()
            const fullPrice = await $('//td[text()="1 898 Руб "]')
            assert (fullPrice >= price)
            browser.pause(10000)
            
    }
}
export const basket = new BasketPage()