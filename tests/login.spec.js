import { test, expect } from '@playwright/test'
import { SignInPage } from '../pageObjects/SignInPage.js'

test.describe('TC003: Sign in with empty fields shows error', () => {

  test('Sign in page is displayed', async ({ page }) => {
    const signInPage = new SignInPage(page)
    await signInPage.open()

    await expect(page).toHaveURL(/\/login/)
  })

  test('Empty fields show error message', async ({ page }) => {
    const signInPage = new SignInPage(page)
    await signInPage.open()

    await signInPage.clickLogin()

    await expect(signInPage.errorMessage).toBeVisible()
    await expect(signInPage.errorMessage).toContainText('Invalid user or password')
  })
})