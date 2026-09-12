import { test } from '../fixtures/pages.fixture';

test.describe('Add/Remove Elements', () => {
  test('deve redirecionar para a pagina de adicionar e remover elementos', async ({
    addRemoveElementsPage,
    homePage,
  }) => {
    await homePage.open();
    await homePage.openAddRemoveElements();

    await addRemoveElementsPage.expectLoaded();
  });

  test('deve exibir o botao remove ao adicionar um elemento', async ({
    addRemoveElementsPage,
  }) => {
    await addRemoveElementsPage.open();

    await addRemoveElementsPage.addElement();

    await addRemoveElementsPage.expectRemoveButtonVisible();
  });

  test('deve remover o botao remove ao excluir o elemento', async ({
    addRemoveElementsPage,
  }) => {
    await addRemoveElementsPage.open();
    await addRemoveElementsPage.addElement();

    await addRemoveElementsPage.removeElement();

    await addRemoveElementsPage.expectRemoveButtonHidden();
  });
});
