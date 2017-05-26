import { ThingsToDoTwoPage } from './app.po';

describe('things-to-do-two App', () => {
  let page: ThingsToDoTwoPage;

  beforeEach(() => {
    page = new ThingsToDoTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ttd works!');
  });
});
