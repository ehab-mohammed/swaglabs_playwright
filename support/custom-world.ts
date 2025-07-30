import { Browser, Page } from "@playwright/test";
import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";

export class CustomWorld extends World {
    page!: Page;
    browser!: Browser;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
