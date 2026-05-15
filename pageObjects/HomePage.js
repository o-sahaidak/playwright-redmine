export class HomePage {
  constructor(page) {
    this.page = page

    // navigation links
    this.homeLink = page.locator('a.home')
    this.projectsLink = page.locator('a.projects')
    this.helpLink = page.locator('a.help')
    this.signInLink = page.locator('a.login')
    this.registerLink = page.locator('a.register')
  }

  async open() {
    await this.page.goto('/')
  }
}