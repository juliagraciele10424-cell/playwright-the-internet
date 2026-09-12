import { expect, type Locator, type Page } from '@playwright/test';

export class PageContentComponent {
  readonly heading: Locator;
  readonly paragraph: Locator;
  readonly footer: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.locator('h3');
    this.paragraph = this.page.locator('#content .example p');
    this.footer = this.page.locator('#page-footer');
  }

  async expectDefaultStructure() {
    await expect(this.heading).toBeVisible();
    await expect(this.paragraph).toBeVisible();
    await expect(this.footer).toBeVisible();
  }
}
