import { test } from '../fixtures/pages.fixture';

test.describe('Basic Auth', () => {
  test('deve solicitar autenticacao ao acessar basic auth pela home', async ({
    basicAuthPage,
    homePage,
  }) => {
    await homePage.open();

    const response = await homePage.openBasicAuth();

    await basicAuthPage.expectAccessFormRequested(response);
  });

  test('deve acessar a tela de congratulations ao autenticar com usuario e senha validos', async ({
    basicAuthPage,
  }) => {
    await basicAuthPage.openWithCredentials('admin', 'admin');

    await basicAuthPage.expectCongratulations();
  });

  test('deve permanecer sem acesso ao autenticar com usuario e senha invalidos', async ({
    basicAuthPage,
  }) => {
    const response = await basicAuthPage.openWithInvalidCredentials('incorreto', 'incorreta');

    await basicAuthPage.expectAuthenticationRejected(response);
  });
});
