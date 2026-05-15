# Playwright Redmine Tests

Automated tests for [redmine.org](https://www.redmine.org) built with Playwright.

## Run tests
```bash
npm install
npx playwright install --with-deps chromium
npx playwright test
```

## Allure Report
https://o-sahaidak.github.io/playwright-redmine/

## CI/CD
GitHub Actions runs tests on every push and publishes Allure report to GitHub Pages.