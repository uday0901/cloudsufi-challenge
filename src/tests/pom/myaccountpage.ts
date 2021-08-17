import { WebElement } from "selenium-webdriver";
import by from "selenium-webdriver/lib/by";
import { WebActions } from "../../helpers/webactions";
import AccountData from "../../testdata/account-data.json";

export class MyAccountPage extends WebActions{

    navigateToAccountPage():void{
        driver.get("my-account-page-url");
    }
    get emailAddress(): WebElement{
        return driver.findElement(by.By.xpath(""));
    }

    get createAccount(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get salutationMr(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get salutationMrs(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get firstName(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get lastName(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get password(): WebElement{
        return driver.findElement(by.xpath(``));
    }

    get emailOnForm(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get dobDate(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get dobMonth(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get dobYear(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get newsLetterCheckBox(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get specialOffersCheckBox(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get firstNameOnAddress(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get lastNameOnAddress(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get company(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get address(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get city(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get state(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get zip(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get country(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get additionalInformation(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get homePhone(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get mobilePhone(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get aliasAddress(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get registerButton(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get addressHelpText(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get phoneNumberHelpText(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get requiredHelpText(): WebElement{
        return driver.findElement(by.xpath(''));
    }

    get signOutButton(): WebElement{
        return driver.findElement(by.xpath(``));
    }

    get errorMessage(): WebElement{
        return driver.findElement(by.xpath(``));
    }

    clickOnCreateAccountButton(): void{
        this.clickOnElement(this.createAccount);
    }

    clickOnRegisterButton(): void{
        this.clickOnElement(this.registerButton);
    }

    selectSalutation(salutation: string): void{
        if(salutation.toLocaleLowerCase() == 'mr')
        this.clickOnElement(this.salutationMr);
        else if(salutation.toLocaleLowerCase() == 'mrs')
        this.clickOnElement(this.salutationMrs);
    }

    verifyEmailInputField(data: string, isValid: boolean): boolean{
        return false;
    }

    verifyFirstNameInputField(data: string, isValid: boolean): boolean{
        return false; 
    }

    verifyLastNameInputField(data: string, isValid: boolean): boolean{
        return false;
    }

    fillFormWithDetails(dataType: string): void{
        let data: any = null;;
        if(dataType.toLowerCase() === "valid"){
            data = AccountData.valid;
        }else if(dataType.toLowerCase() === "invvalid"){
            data = AccountData.invalid;
        }
        else if(dataType.toLowerCase() === "validmandatory"){
            data = AccountData.validmandatory;
        }
        this.selectSalutation("Mrs");
        this.enterInputValue(this.firstName, data.firstName);
        this.enterInputValue(this.lastName, data.lastName);
        this.enterInputValue(this.password, data.password);
        this.selectByValue(this.dobDate, data.date);
        this.selectByValue(this.dobMonth, data.month);
        this.selectByValue(this.dobYear, data.year);
        this.enterInputValue(this.company, data.company);
        this.enterInputValue(this.address, data.address);
        this.enterInputValue(this.city, data.city);
        this.selectByValue(this.state, data.state);
        this.enterInputValue(this.zip, data.zip);
        this.selectByValue(this.country, data.country);
        this.enterInputValue(this.additionalInformation, data.additionalInformation);
        this.enterInputValue(this.homePhone, data.homePhone);
        this.enterInputValue(this.mobilePhone, data.mobilePhone);
        this.enterInputValue(this.aliasAddress, data.aliasAddress);

    }

    validateInputFieldsWithInvalidData(obj: any, fieldName: string ){
            let result = false;
            let isArray = obj instanceof Array;
            for (let j in obj) {
                if (obj.hasOwnProperty(j)) {
                    if (typeof(obj[j]) == "object") {
                        if(!isArray)
                        {
                           // console.log(j);
                            if(j == fieldName){
                                console.log(j);
                                if((obj[j]) instanceof Array)
                                {
                                    let elements = obj[j];
                                    switch(fieldName){
                                        case "firstName":
                                            for(let i=0; i < elements.length; i++){
                                                this.enterInputValue(this.firstName,elements[i]);
                                                result = this.errorMessage.isDisplayed();
                                                if(!result) break;
                                            }  
                                            break;
                                        case "lastName":
                                            for(let i=0; i < elements.length; i++){
                                                this.enterInputValue(this.lastName,elements[i]);
                                                result = this.errorMessage.isDisplayed();
                                                if(!result) break;
                                            }
                                            break;
                                        case "email":
                                            for(let i=0; i < elements.length; i++){
                                                this.enterInputValue(this.emailAddress,elements[i]);
                                                result = this.errorMessage.isDisplayed();
                                                if(!result) break;
                                            }
                                            break;
                                        case "address":
                                            for(let i=0; i < elements.length; i++){
                                                this.enterInputValue(this.address,elements[i]);
                                                result = this.errorMessage.isDisplayed();
                                                if(!result) break;
                                            }
                                            break;

                                    }
                                    if(!result) break;
                                  }
                                } 
                            }
                        }
                        this.validateInputFieldsWithInvalidData(obj[j], fieldName);
                    }
                }
            }
        }
    