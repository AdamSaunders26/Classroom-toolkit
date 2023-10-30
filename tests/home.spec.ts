import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/Classroom Toolkit/);
});

test("sign in link", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Sign in" }).click();
  await expect(page).toHaveURL(
    "http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
  );
});
