import { JsPolandPage } from './app.po';

describe('js-poland App', () => {
  let page: JsPolandPage;

  beforeEach(() => {
    page = new JsPolandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sd!!');
  });
});
