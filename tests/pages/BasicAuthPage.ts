import { expect, type Locator, type Page, type Response } from '@playwright/test';
import { BasePage } from './BasePage';

export class BasicAuthPage extends BasePage {
  readonly heading: Locator;
  readonly successMessage: Locator;
  readonly unauthorizedMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Basic Auth' });
    this.successMessage = page.getByText('Congratulations! You must have the proper credentials.');
    this.unauthorizedMessage = page.getByText('Not authorized');
  }

  async openWithCredentials(username: string, password: string) {
    await this.page.context().setHTTPCredentials({ username, password });
    await this.visit('/basic_auth');
  }

  async openWithInvalidCredentials(username: string, password: string): Promise<Response | null> {
    await this.page.context().setHTTPCredentials({ username, password });
    return this.page.goto('/basic_auth');
  }

  async expectAccessFormRequested(response: Response) {
    expect(response.status()).toBe(401);
    expect(response.headers()['www-authenticate']).toContain('Basic');
  }

  async expectCongratulations() {
    await expect(this.page).toHaveURL(/\/basic_auth$/);
    await expect(this.heading).toBeVisible();
    await expect(this.successMessage).toBeVisible();
  }

  async expectAuthenticationRejected(response: Response | null) {
    expect(response?.status()).toBe(401);
    expect(response?.headers()['www-authenticate']).toContain('Basic');
    await expect(this.unauthorizedMessage).toBeVisible();
    await expect(this.successMessage).toBeHidden();
  }
}
