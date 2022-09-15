const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);


        // locators
        this.userNameTxt = '#email';
        this.passwordTxt = '#password';
        this.submitBtn = '#SubmitLogin'

    }

    async navigate(){
        await super.navigate('index.php?controller=authentication&back=my-account');
    }

    async login(usermame, password){
        await this.page.fill(this.userNameTxt);
        await this.page.fill(this.passwordTxt);
        await this.page.click(this.submitBtn);
    }
}

module.exports = LoginPage;