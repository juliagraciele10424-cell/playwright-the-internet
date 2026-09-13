import { type Locator, type Page, type Response } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly addRemoveElementsLink: Locator;
  readonly basicAuthLink: Locator;

  constructor(page: Page) {
    super(page);
    this.addRemoveElementsLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.basicAuthLink = page.getByRole('link', { name: 'Basic Auth' });
  }

  async open() {
    await this.visit('/');
  }

  async openAddRemoveElements() {
    await this.addRemoveElementsLink.click();
  }

  async openBasicAuth(): Promise<Response> {
    const [response] = await Promise.all([
      this.page.waitForResponse((response) => response.url().endsWith('/basic_auth')),
      this.basicAuthLink.click(),
    ]);

    return response;
  }
}
