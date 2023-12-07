import { Page, expect } from '@playwright/test';
import { Commands } from '../POM/commands';
import { locatorWidget } from '../POM/locators/locator';

export class ProgressBar {
  readonly page: Page;

  constructor(page) {
    this.page = page;
  }

  async progressBarStartButton() {
    const pw = new Commands(this.page);
    await pw.clickOnButton(locatorWidget.startStopButton);

    let progressBarWidth = await this.page.locator(locatorWidget.progressBar).evaluate((element) => {
      return element.style.width;
    });
    while (progressBarWidth != '100%') {
      progressBarWidth = await this.page.locator(locatorWidget.progressBar).evaluate((element) => {

        return element.style.width;
      });
    }
  }

  async assertProgressBar() {
    const progressBarWidth = await this.page.locator(locatorWidget.progressBar).evaluate((element) => {
      return element.style.width;
    });
    expect(progressBarWidth).toBe('100%');
  }
}
