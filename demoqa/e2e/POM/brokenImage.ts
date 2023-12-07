import { Page, expect } from '@playwright/test';

export class BrokenImage {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  async assertBrokenImage() {
    await this.page.waitForLoadState()
    const brokenImage = await this.page.locator('img').nth(3).evaluate((img) => (img as HTMLImageElement).naturalWidth || 0);
    expect(brokenImage).toBe(0);
  }
}
