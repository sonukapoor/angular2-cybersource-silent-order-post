import { Angular2CybersourceSlientOrderPostPage } from './app.po';

describe('angular2-cybersource-slient-order-post App', function() {
  let page: Angular2CybersourceSlientOrderPostPage;

  beforeEach(() => {
    page = new Angular2CybersourceSlientOrderPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
