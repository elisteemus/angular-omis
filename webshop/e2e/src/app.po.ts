import { browser, by, element } from 'protractor';

export class AppPage {

  clickOnLogin() {
    return element.all(by.className('123')).get(0).click();
}

}
