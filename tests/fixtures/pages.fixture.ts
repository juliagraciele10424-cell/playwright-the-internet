import { test as base, expect } from '@playwright/test';
import { ABTestingPage } from '../pages/ABTestingPage';

type PageFixtures = {
  abTestingPage: ABTestingPage;
};

export const test = base.extend<PageFixtures>({
  abTestingPage: async ({ page }, use) => {
    await use(new ABTestingPage(page));
  },
});

export { expect };
