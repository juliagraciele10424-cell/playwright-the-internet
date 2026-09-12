import { type Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async visit(path: string) {
    await this.page.goto(path);
  }
}
