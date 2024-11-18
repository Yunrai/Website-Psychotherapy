import { test, expect } from '@playwright/test';

test('homepage has the title Psihoterapeut', async ({page}) => {
   await page.goto('http://127.0.0.1:5500/index.html');

   await expect(page).toHaveTitle(/Psihoterapeut/);
});
