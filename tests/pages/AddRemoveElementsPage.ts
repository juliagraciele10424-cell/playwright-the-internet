import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddRemoveElementsPage extends BasePage {
  readonly heading: Locator;
  readonly addElementButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Add/Remove Elements' });
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.removeButton = page.getByRole('button', { name: 'Delete' });
  }

  async open() {
    await this.visit('/add_remove_elements/');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/add_remove_elements\/$/);
    await expect(this.heading).toBeVisible();
  }

  async addElement() {
    await this.addElementButton.click();
  }

  async removeElement() {
    await this.removeButton.click();
  }

  async expectRemoveButtonVisible() {
    await expect(this.removeButton).toBeVisible();
  }

  async expectRemoveButtonHidden() {
    await expect(this.removeButton).toBeHidden();
  }
}
