// @ts-check
// const { test, expect } = require('@playwright/test');
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("heading", { name: "Resorts Lite" });
  //add await expection for the line above
  await expect(
    page.getByRole("heading", { name: "Resorts Lite" })
  ).toBeVisible();

  await expect(page.getByText("Indonesia")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Gili Air Hotel" })
  ).toBeVisible();
  await expect(page.getByText("4.8 ★")).toBeVisible();
  await expect(page.getByText("$589/night")).toBeVisible();

  await expect(page.getByText("Seychelles")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Hilton Resort" })
  ).toBeVisible();
  await expect(page.getByText("4.2 ★")).toBeVisible();
  await expect(page.getByText("$629/night")).toBeVisible();

  await expect(page.getByText("US Virgin Islands")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Goa Resort" })).toBeVisible();
  await expect(page.getByText("3.5 ★")).toBeVisible();
  await expect(page.getByText("$485/night")).toBeVisible();

  await expect(page.getByText("Bahamas")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Kuredu Resort" })
  ).toBeVisible();
  await expect(page.getByText("4.1 ★")).toBeVisible();
  await expect(page.getByText("$729/night")).toBeVisible();

  await expect(page.getByText("Mauritius")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Trou D'eau Douce" })
  ).toBeVisible();
  await expect(page.getByText("4.9 ★")).toBeVisible();
  await expect(page.getByText("$877/night")).toBeVisible();

  await expect(page.getByText("Bermuda")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Staniel Cay Hotel" })
  ).toBeVisible();
  await expect(page.getByText("3.2 ★")).toBeVisible();
  await expect(page.getByText("$365/night")).toBeVisible();

  await expect(page.getByText("France")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Trou-Aux-Biches" })
  ).toBeVisible();
  await expect(page.getByText("3.3 ★")).toBeVisible();
  await expect(page.getByText("$499/night")).toBeVisible();
  await expect(page.getByText("Resorts LiteIndonesiaGili Air")).toBeVisible();
});
