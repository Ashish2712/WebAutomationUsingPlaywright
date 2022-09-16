const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);


        // locators
        this.userNameTxt = '#email';
        this.passwordTxt = '#passwd';
        this.submitBtn = '#SubmitLogin'

    }

    async navigate(){
        await super.navigate('index.php?controller=authentication&back=my-account');
    }

    async login(usermame, password){
        await this.page.fill(this.userNameTxt, usermame);
        await this.page.fill(this.passwordTxt, password);
        await this.page.click(this.submitBtn);
    }
}

module.exports = LoginPage;