export class WikiPage {
  constructor(page) {
    this.page = page

    this.headingRedmine = page.locator('h1', { hasText: 'Redmine' })
    this.headingFeatures = page.locator('h2', { hasText: 'Features' })
    this.headingDocumentation = page.locator('h2', { hasText: 'Documentation' })
    this.headingOnlineDemo = page.locator('h2', { hasText: 'Online demo' })
    this.headingSupport = page.locator('h2', { hasText: 'Support & getting help' })
    this.headingContributing = page.locator('h2', { hasText: 'Contributing and helping out' })
    this.headingWhoUses = page.locator('h2', { hasText: 'Who uses Redmine?' })
    this.headingBooks = page.locator('h2', { hasText: 'Redmine books' })
  }

  async open() {
    await this.page.goto('/')
  }
}