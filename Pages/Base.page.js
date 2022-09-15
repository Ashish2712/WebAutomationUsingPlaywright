class BasePage{
    constructor(page){
        this.page = page;
    }
    async navigate(path){
        await this.page.goto(`http://automationpractice.com/${path}`)
    }
}

module.exports = BasePage;