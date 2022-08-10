import { ChainablePromiseArray, ChainablePromiseElement } from "webdriverio";

export type WebElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebElements = ChainablePromiseArray<WebdriverIO.ElementArray>;

export interface World {
    username: string;
    password: string;
    email: string;
}