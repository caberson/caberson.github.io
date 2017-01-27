import { CabersonPage } from './app.po';

describe('caberson App', function() {
  let page: CabersonPage;

  beforeEach(() => {
    page = new CabersonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
