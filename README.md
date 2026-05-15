# Playwright Redmine Tests

Automated tests for [redmine.org](https://www.redmine.org) built with Playwright.

## Run tests
```bash
npm install
npx playwright install --with-deps chromium
npm test
```

## Run tests with browser visible
```bash
npm run test:headed
```

## Generate Allure report
```bash
npm run report
```

## Allure Report
https://o-sahaidak.github.io/playwright-redmine/

## CI/CD
GitHub Actions runs tests on every push and publishes Allure report to GitHub Pages.