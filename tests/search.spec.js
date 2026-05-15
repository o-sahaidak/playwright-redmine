import { test, expect } from '@playwright/test'
import { HomePage } from '../pageObjects/HomePage.js'
import { SearchPage } from '../pageObjects/SearchPage.js'

test.describe('TC002: Search works', () => {

  test('Search field is visible', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    const searchPage = new SearchPage(page)
    await expect(searchPage.searchField).toBeVisible()
  })

  test('Search returns results for "wiki"', async ({ page }) => {
    const homePage = new HomePage(page)
    await homePage.open()

    const searchPage = new SearchPage(page)
    await searchPage.search('wiki')

    await expect(page).toHaveURL(/search/)
    await expect(searchPage.searchResults).toBeVisible()
  })
})