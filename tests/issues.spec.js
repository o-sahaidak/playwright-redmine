import { test, expect } from '@playwright/test'
import { IssuesPage } from '../pageObjects/IssuesPage.js'

test.describe('TC004: Issues page displays correct columns', () => {

  test('Issues page is displayed', async ({ page }) => {
    const issuesPage = new IssuesPage(page)
    await issuesPage.open()

    await expect(page).toHaveURL(/\/issues/)
  })

  test('All columns are visible', async ({ page }) => {
    const issuesPage = new IssuesPage(page)
    await issuesPage.open()

    await expect(issuesPage.columnId).toBeVisible()
    await expect(issuesPage.columnTracker).toBeVisible()
    await expect(issuesPage.columnStatus).toBeVisible()
    await expect(issuesPage.columnSubject).toBeVisible()
    await expect(issuesPage.columnUpdated).toBeVisible()
    await expect(issuesPage.columnCategory).toBeVisible()
  })
})