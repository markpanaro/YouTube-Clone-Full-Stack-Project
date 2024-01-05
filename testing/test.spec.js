const {By, Builder, Capabilities, WebDriver} = require('selenium-webdriver');
const assert = require("assert");

// WebDriver intended to test navigation and core features
(async function firstTest() {
  
  try {

    // Need to use cached Chrome login information
    // Utilized Selenium documentation and GitHub comments
    let userProfilePath = "/Users/markpanaro/Library/Caches/Google/Chrome/Default/Cache/Cache_Data";
    let chromeCapabilities = Capabilities.chrome();

    // Setting chrome options
    chromeCapabilities.set("goog:chromeOptions", {
      args: [
          "--lang=en",
          `user-data-dir=${userProfilePath}`
      ]
    });

    driver = await new Builder()
                .forBrowser("chrome")
                .withCapabilities(chromeCapabilities)
                .build();


    // Navigate to page
    await driver.get('https://yt-web-client-mixtcxfhyq-uc.a.run.app');
  
    let title = await driver.getTitle();
    console.log(title);
    assert.equal("Youtube", title);
  
    await driver.manage().setTimeouts({implicit: 500});


    // Watch video
    let video = await driver.findElement(By.className('page_thumbnail__gKHvO'));
    await video.click();

    // Return
    let logo = await driver.findElement(By.css("img[src='/youtube-logo.svg']"));
    await logo.click();

    // Sign-in
    let signInButton = await driver.findElement(By.className('sign-in_signin__9Cnrs'));
    await signInButton.click();

    // Press upload button
    let uploadButton = await driver.findElement(By.className('upload_uploadButton__z_TjI'));
    await uploadButton.click();

    // Sign in using Selenium (blocked by Google)
    //let textBox = await driver.findElement(By.name('identifier'));
    //await textBox.sendKeys('Selenium');
    //driver.findElement(By.id("email")).sendKeys("gmail");

  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}())