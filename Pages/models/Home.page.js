const BasePage = require('./Base.page');
class HomePage extends BasePage {
    constructor(page){
        super(page);

        //locators
        this.loggedUser = 'a[class="account"]>span';
    }

    async getUserName(){
        let user = await this.page.locator(this.loggedUser);
        return await user.innerText();
    }

    async navigate(){
        await super.navigate('index.php?controller=my-account');
    }
}

module.exports = HomePage;