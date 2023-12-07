import { Page, expect } from '@playwright/test';
import { locatorToolTip } from '../POM/locators/locator';

export class ToolTip {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  async mouseHover(){
    await this.page.locator(locatorToolTip.buttonHover).hover()
    await this.page.waitForTimeout(3000)
  }

  async assertToolTip() {
    const toolTipTxt = await this.page.getByText('You hovered over the Button').textContent()
    await expect(toolTipTxt).toBe('You hovered over the Button')
  }
}
