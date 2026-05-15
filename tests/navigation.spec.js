import { test, expect } from '@playwright/test'
import { HomePage } from '../pageObjects/HomePage.js'

test.describe('TC001: Navigation links are visible and clickable', () => {

  test('Home link is visible and clickable', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    await expect(homePage.homeLink).toBeVisible()
    await homePage.homeLink.click()
    await expect(page).toHaveURL('https://www.redmine.org/')
  })

  test('Projects link is visible and clickable', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    await expect(homePage.projectsLink).toBeVisible()
    await homePage.projectsLink.click()
    await expect(page).toHaveURL(/\/projects/)
  })

  test('Help link is visible and clickable', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    await expect(homePage.helpLink).toBeVisible()
    await homePage.helpLink.click()
    await expect(page).toHaveURL(/\/guide/)
  })

  test('Sign in link is visible and clickable', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    await expect(homePage.signInLink).toBeVisible()
    await homePage.signInLink.click()
    await expect(page).toHaveURL(/\/login/)
  })

  test('Register link is visible and clickable', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    await expect(homePage.registerLink).toBeVisible()
    await homePage.registerLink.click()
    await expect(page).toHaveURL(/\/account\/register/)
  })
})