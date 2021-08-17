import { waitForDebugger } from "inspector";
import { until, WebElement } from "./../../node_modules/selenium-webdriver"; //../../.. /node_modules/@types/selenium-webdriver

export class WebActions{

    clickOnElement(element: WebElement): void{
        until.elementLocated(element.findElement);
        element.click();
    }

    enterInputValue(element: WebElement, value: string): void{
        until.elementLocated(element.findElement);
        element.sendKeys(value);
    }


    getText(element: WebElement): string{
        until.elementLocated(element.findElement);
        return element.getText().toString();
    }


}