import { ShulappPage } from './app.po';

describe('shulapp App', function() {
  let page: ShulappPage;

  beforeEach(() => {
    page = new ShulappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
