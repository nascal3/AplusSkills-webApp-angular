import { AplusFRONTPage } from './app.po';

describe('aplus-front App', () => {
  let page: AplusFRONTPage;

  beforeEach(() => {
    page = new AplusFRONTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
