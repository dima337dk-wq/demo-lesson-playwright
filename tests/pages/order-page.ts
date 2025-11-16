import { expect } from '@playwright/test'
import type { Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton
  readonly nameField
  readonly phoneField
  readonly commentField
  readonly createOrderButton
  readonly successfullCreationPopup
  readonly logoutButton
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.nameField = page.getByTestId('username-input')
    this.phoneField = page.getByTestId('phone-input')
    this.commentField = page.getByTestId('comment-input')
    this.createOrderButton = page.getByTestId('createOrder-button')
    this.successfullCreationPopup = page.locator('main > .popup')
    this.logoutButton = page.getByTestId('logout-button')
  }

  async checkInnerComponentsVisible(): Promise<void> {
    await expect(this.statusButton).toBeVisible()
    await expect(this.statusButton).toBeEnabled()
    await expect(this.nameField).toBeVisible()
    await expect(this.phoneField).toBeVisible()
    await expect(this.commentField).toBeVisible()
    await expect(this.createOrderButton).toBeVisible()
  }

  // condition ? true : false
  async checkCreationPopupVisible(visible = true): Promise<void> {
    expect(await this.successfullCreationPopup.getAttribute('class')).toContain(
      visible ? 'popup_opened' : 'undefined',
    )
  }
}
