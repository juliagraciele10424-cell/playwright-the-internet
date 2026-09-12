import { expect, type Locator, type Page } from '@playwright/test';
import { PageContentComponent } from '../components/PageContentComponent';
import { BasePage } from './BasePage';

const EXPECTED_HEADINGS = [
  'A/B Test Control',
  'A/B Test Variation 1',
  'No A/B Test',
] as const;

export class ABTestingPage extends BasePage {
  readonly content: PageContentComponent;
  readonly heading: Locator;
  readonly description: Locator;

  constructor(page: Page) {
    super(page);
    this.content = new PageContentComponent(page);
    this.heading = this.content.heading;
    this.description = this.content.paragraph;
  }

  async open() {
    await this.visit('/abtest');
  }

  async expectLoaded() {
    await this.content.expectDefaultStructure();
    await expect(this.page).toHaveURL(/\/abtest$/);
  }

  async expectKnownHeadingVariation() {
    await expect(this.heading).toContainText(new RegExp(EXPECTED_HEADINGS.join('|')));
  }

  async expectSplitTestingDescription() {
    await expect(this.description).toContainText('Also known as split testing');
    await expect(this.description).toContainText(/simultaneously test and learn.*versions of a page/);
  }
}
