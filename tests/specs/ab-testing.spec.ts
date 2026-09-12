import { test } from '../fixtures/pages.fixture';

test.describe('A/B Testing', () => {
  test('deve exibir uma variacao valida da pagina de A/B testing', async ({ abTestingPage }) => {
    await abTestingPage.open();

    await abTestingPage.expectLoaded();
    await abTestingPage.expectKnownHeadingVariation();
    await abTestingPage.expectSplitTestingDescription();
  });
});
