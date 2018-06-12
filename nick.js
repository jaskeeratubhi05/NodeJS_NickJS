const Nick = require("D:/slimerTest/node_modules/nickjs")
const path = "C:/image.jpg"
const nick = new Nick()

async function searchGoogle () {
  try {
	   const tab = await nick.newTab()
       await tab.open("http://www.google.lk")
	   await tab.sendKeys('input[name="q"]', 'Chrome')
	   await tab.click('[name="btnK"]')
	   await tab.waitUntilVisible('#tads > ol > li > ul > li:nth-child(1) > h3 > a', 5000)
	   await tab.click('#tads > ol > li > ul > li:nth-child(1) > h3 > a')
	   await tab.wait(2000)
	  	 await tab.screenshot(path)
	     console.log("Screenshot saved at", path)
		 
	  
	    } catch (err) {
    console.log('ERROR!', err)
  }
}
searchGoogle()