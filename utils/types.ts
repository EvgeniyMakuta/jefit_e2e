import { ChainablePromiseArray, ChainablePromiseElement } from "webdriverio";
import { Page, Pages } from "./enums";

export type WebElement = ChainablePromiseElement<WebdriverIO.Element>;
export type WebElements = ChainablePromiseArray<WebdriverIO.ElementArray>;

export type PageKey = keyof typeof Page;

export type PagesKey = keyof typeof Pages;