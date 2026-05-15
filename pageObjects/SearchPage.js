export class SearchPage {
  constructor(page) {
    this.page = page

    this.searchField = page.locator('#q')
    this.searchResults = page.locator('#search-results')
  }

  async search(text) {
    await this.searchField.fill(text)
    await this.searchField.press('Enter')
  }
}