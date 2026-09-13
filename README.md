# Playwright - The Internet

Projeto de automacao de testes end-to-end usando Playwright, Page Objects, fixtures e componentes reutilizaveis.

## Estrutura

- `AGENTS.md`: instrucoes para manter o padrao de arquitetura dos testes.
- `tests/specs`: cenarios de teste.
- `tests/pages`: Page Objects.
- `tests/components`: componentes reutilizaveis entre paginas.
- `tests/fixtures`: fixtures customizadas para injetar Page Objects nos testes.
- `playwright.config.ts`: configuracao central do Playwright.

## Comandos

```bash
npm install
npm run install:browsers
npm run test:e2e
npm run test:e2e:headed
npm run test:e2e:ui
npm run report
```

## Fluxos cobertos

O teste `A/B Testing` acessa `https://the-internet.herokuapp.com/abtest`, valida que a pagina carregou, aceita as variacoes conhecidas do titulo do experimento e verifica o texto principal sobre split testing.

O teste `Add/Remove Elements` acessa a pagina inicial, clica no link `Add/Remove Elements` e valida o redirecionamento para `https://the-internet.herokuapp.com/add_remove_elements/`.

O teste `Basic Auth` acessa a pagina inicial, clica no link `Basic Auth` e valida que o navegador recebeu a solicitacao de autenticacao HTTP Basic. Tambem valida que usuario `admin` e senha `admin` permitem acessar a tela de sucesso com a mensagem de congratulations, e que credenciais invalidas mantem o acesso negado.
