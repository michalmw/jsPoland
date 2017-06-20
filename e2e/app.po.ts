import { browser, by, element } from 'protractor';

export class JsPolandPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sd-root h1')).getText();
  }
}
