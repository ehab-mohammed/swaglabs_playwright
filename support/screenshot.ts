import fs from "fs";
import path from "path";
import { ITestCaseHookParameter } from "@cucumber/cucumber";
import { CustomWorld } from "./custom-world";

export async function captureScreenshot(
    world: CustomWorld,
    scenario: ITestCaseHookParameter
) {
    if (scenario.result?.status === "FAILED") {
        const screenshotPath = path.join(
            "screenshots",
            `${scenario.pickle.name.replace(/ /g, "_")}.png`
        );

        await world.page.screenshot({ path: screenshotPath });
        console.log(`📸 Screenshot saved to: ${screenshotPath}`);
    }
}
