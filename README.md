# Playwright - The Internet

Projeto de automacao de testes end-to-end usando Playwright, Page Objects, fixtures e componentes reutilizaveis.

## Estrutura

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

## Primeiro fluxo coberto

O teste `A/B Testing` acessa `https://the-internet.herokuapp.com/abtest`, valida que a pagina carregou, aceita as variacoes conhecidas do titulo do experimento e verifica o texto principal sobre split testing.
