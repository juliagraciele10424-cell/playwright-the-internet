import { test as base, expect } from '@playwright/test';
import { ABTestingPage } from '../pages/ABTestingPage';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';
import { HomePage } from '../pages/HomePage';

type PageFixtures = {
  abTestingPage: ABTestingPage;
  addRemoveElementsPage: AddRemoveElementsPage;
  homePage: HomePage;
};

export const test = base.extend<PageFixtures>({
  abTestingPage: async ({ page }, use) => {
    await use(new ABTestingPage(page));
  },
  addRemoveElementsPage: async ({ page }, use) => {
    await use(new AddRemoveElementsPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect };
