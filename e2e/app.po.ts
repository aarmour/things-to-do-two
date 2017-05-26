import { browser, by, element } from 'protractor';

export class ThingsToDoTwoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ttd-root h1')).getText();
  }
}
