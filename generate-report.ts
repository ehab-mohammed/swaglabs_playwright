// generate-report.ts
import reporter from "cucumber-html-reporter";

const options = {
    theme: "bootstrap" as const,
    jsonFile: "./reports/report.json",
    output: "./reports/index.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome",
        "Platform": "Windows 10",
        "Executed": "Local",
    },
};

reporter.generate(options);
