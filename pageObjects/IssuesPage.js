export class IssuesPage {
  constructor(page) {
    this.page = page

    this.columnId = page.locator('th.id')
    this.columnTracker = page.locator('th.tracker')
    this.columnStatus = page.locator('th.status')
    this.columnSubject = page.locator('th.subject')
    this.columnUpdated = page.locator('th.updated_on')
    this.columnCategory = page.locator('th.category')
  }

  async open() {
    await this.page.goto('/projects/redmine/issues')
  }
}