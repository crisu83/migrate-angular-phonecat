import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('angular-phonecat App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should set page title', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Google Phone Gallery');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
