export class SignInPage {
  constructor(page) {
    this.page = page

    this.loginField = page.locator('#username')
    this.passwordField = page.locator('#password')
    this.loginButton = page.locator('#login-submit')
    this.errorMessage = page.locator('.flash.error')
  }

  async open() {
    await this.page.goto('/login')
  }

  async clickLogin() {
    await this.loginButton.click()
  }
}