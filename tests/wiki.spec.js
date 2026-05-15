import { test, expect } from '@playwright/test'
import { WikiPage } from '../pageObjects/WikiPage.js'

test.describe('TC005: Wiki page displays correct sections', () => {

  test('All sections are visible', async ({ page }) => {
    const wikiPage = new WikiPage(page)
    await wikiPage.open()

    await expect(wikiPage.headingFeatures).toBeVisible()
    await expect(wikiPage.headingDocumentation).toBeVisible()
    await expect(wikiPage.headingOnlineDemo).toBeVisible()
    await expect(wikiPage.headingSupport).toBeVisible()
    await expect(wikiPage.headingContributing).toBeVisible()
    await expect(wikiPage.headingWhoUses).toBeVisible()
    await expect(wikiPage.headingBooks).toBeVisible()
  })
})