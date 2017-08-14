import { EtradeAppPage } from './app.po';

describe('etrade-app App', () => {
  let page: EtradeAppPage;

  beforeEach(() => {
    page = new EtradeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
