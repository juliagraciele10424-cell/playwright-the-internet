import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly addRemoveElementsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.addRemoveElementsLink = page.getByRole('link', { name: 'Add/Remove Elements' });
  }

  async open() {
    await this.visit('/');
  }

  async openAddRemoveElements() {
    await this.addRemoveElementsLink.click();
  }
}
