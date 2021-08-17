import chromeDriver from "../drivers/chrome";
import { MyAccountPage } from "./pom/myaccountpage";
import InvalidData from "../testdata/invalild-test-data.json";

const myAccountPage: MyAccountPage = new MyAccountPage();


describe("Aura Code Challenge - Create User Account Tests", () => {
  let driver;
  beforeAll(() => {
    driver = chromeDriver();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("it loads authentication page", async () => {
    await driver.get(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
    const title = await driver.getTitle();
    expect(title).toBe("Login - My Store");
  });

  test("valiidate account creation with different credentials", async () => {
    await driver.get(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
    const title = await driver.getTitle();
    expect(title).toBe("Login - My Store");
    
  });

  test("valiidate user message for already registered email id", async () => {
    myAccountPage.navigateToAccountPage();
    myAccountPage.enterInputValue(myAccountPage.emailAddress, "test@gmail.com");
    expect(myAccountPage.errorMessage.getText().toString()).toBe("An account using this email address has already been registered. Please enter a valid password or request a new one.");
  });

  test("valiidate account creation with all valid details", async () => {
    myAccountPage.navigateToAccountPage();
    myAccountPage.fillFormWithDetails("valid");
    myAccountPage.clickOnRegisterButton();
    expect(myAccountPage.signOutButton.isDisplayed()).toBe(true); 
  });

  test("valiidate account creation with only mandatory fields", async () => {
    myAccountPage.navigateToAccountPage();
    myAccountPage.fillFormWithDetails("validmandatory");
    myAccountPage.clickOnRegisterButton();
    expect(myAccountPage.signOutButton.isDisplayed()).toBe(true);

  });

  test("valiidate error messages for each input filed for invalid input data on my account form", async () => {
   
   expect(myAccountPage.validateInputFieldsWithInvalidData(InvalidData, "firstName")).toBe(true);
   expect(myAccountPage.validateInputFieldsWithInvalidData(InvalidData, "lastName")).toBe(true);
   expect(myAccountPage.validateInputFieldsWithInvalidData(InvalidData, "email")).toBe(true);
   expect(myAccountPage.validateInputFieldsWithInvalidData(InvalidData, "address")).toBe(true);
   
   
  });


});

