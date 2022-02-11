import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6LsAAOSwI8VfcL4W/s-l225.webp","title":"New Listingxbox one S 1TB","price":"150.49","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1p8AAOSw-wJfX4p4/s-l225.webp","title":"ORIGINAL XBOX BUNDLE CONSOLE 2 CONTROLLERS AND 12 GAMES ","price":"52.09","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FjsAAOSw-qlfcWah/s-l225.webp","title":"New ListingMicrosoft Xbox One S 1TB White Console | New in Box","price":"250.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sEoAAOSwephdSF7x/s-l225.webp","title":"XBOX CLASSIC CONSOLE FIRST MODEL ","price":"127.05","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TpMAAOSwWQdfVnSw/s-l225.webp","title":"Microsoft Original Xbox Console Controller Cords Games System Halo Lot Video","price":"99.99","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/vpoAAOSwWplfagq4/s-l225.webp","title":"Microsoft Xbox Console - [Series X] - [New] - [CONFIRMED PRE-ORDER from GAME] ✅","price":"698.68","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CZgAAOSwVClfY1oQ/s-l225.webp","title":"Game Mafia 3 Xbox One Game Xbox Game Gaming multilingual Italian","price":"46.46","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PzYAAOSw7tJfcEiB/s-l225.webp","title":"New ListingMicrosoft CYV00321 XBox One X 1TB Video Game Console with 5 Games - Blac","price":"150.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Y2cAAOSwBXRfZ1n5/s-l225.webp","title":"Xbox 360 250gb Bundle With 24 Games ","price":"88.92","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NBcAAOSwkeFelGS1/s-l225.webp","title":"Xbox Halo + MIDTOWN MADNESS 3 Limited Edition Bundle and Controller in Original Box","price":"138.27","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/l4IAAOSwkf1fZG~H/s-l225.webp","title":"Microsoft Xbox One | Standard | S | X | 500GB 1 TB + Original Controller + Game","price":"277.69","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ci8AAOSw2S1fbzw-/s-l225.webp","title":"Microsoft Xbox One x 1TB Console","price":"184.74","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JckAAOSwDYFfadw4/s-l225.webp","title":"Microsoft Xbox Series x 1 TB SSD","price":"812.17","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sEAAAOSwiRNfcatf/s-l225.webp","title":"XBOX ONE X 1TB Console Bundle 🎮 ✅FULLY WORKING & FREE DELIVERY✅","price":"241.37","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PqAAAOSwoJhd2Wua/s-l225.webp","title":"MICROSOFT  XBOX ONE CONSOLE + CONTROLLER  500GB BLACK Same Day Dispatch Free","price":"254.08","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JfIAAOSwul1e2TDz/s-l225.webp","title":"Xbox 360 Elite Console Bundle With Box Wireless Controller HDMI 120GB JASPER","price":"139.74","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XgAAAOSwEhld2bOY/s-l225.webp","title":"Microsoft Xbox 360 Slim - 250Gb Black Console (PAL) Same Day Dispatch Fast Del*","price":"127.03","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/l1QAAOSweohfcRa8/s-l225.webp","title":"New ListingMicrosoft Xbox Original Console Black With Cables And Controller *MOD","price":"82.58","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wrwAAOSw3vlfDdKf/s-l225.webp","title":"Original Xbox Console Japan NTSC Black Boxed w/ 1 Controller and Cables","price":"190.57","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/W7MAAOSwu~5fVJ3H/s-l225.webp","title":"Xbox one s Minecraft Limited Edition","price":"174.29","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sjwAAOSwCVReeMu1/s-l225.webp","title":"Microsoft Xbox One X console - 1TB-Black + Original Controller 4K UltraHD","price":"278.80","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hGgAAOSwBMJfbOqD/s-l225.webp","title":"XBOX SERIES S *PRE-ORDER CONFIRMED*","price":"450.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rFoAAOSwx~dfWKoh/s-l225.webp","title":"Microsoft Xbox Video Game Console with JoyTech TFT Portable Screen PAL TESTED","price":"127.03","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rywAAOSwK-NfIUzD/s-l225.webp","title":"Spare microsoft xbox one 500gb model 1540 working perfectly, without cables","price":"92.84","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GJwAAOSwKHxfaMzi/s-l225.webp","title":"BLACK XBOX 360 SLIM 250GB BUNDLE CONSOLE 2 CONTROLLERS KINECT BAR AND 14 GAMES ","price":"40.65","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9tEAAOSwRQlXeZHB/s-l225.webp","title":"Xbox One 500GB Console with Gears of War: Ultimate Edition Bundle","price":"197.76","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/twAAAOSwroxfZK6O/s-l225.webp","title":"Microsoft Xbox 360 250GB Console Bundle - 20 Games - Controller - C24","price":"126.98","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CzQAAOSwKbRfVtKN/s-l225.webp","title":"Microsoft Xbox Green Halo Special Edition Console System New Sealed","price":"2,000.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8mUAAOSwOsZfamU1/s-l225.webp","title":"Original Microsoft Xbox Black Console Complete In Box","price":"87.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/krsAAOSwaJFehf0G/s-l225.webp","title":"Boxed Microsoft Xbox Console with Games and Accessories!","price":"114.33","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z0gAAOSwEeRfcN3d/s-l225.webp","title":"New ListingOriginal Microsoft XBOX ONE games console - 500gb -White - halo 5 borderlands ","price":"203.26","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fCAAAOSwbVNfamly/s-l225.webp","title":"XBOX SERIES S *PRE-ORDER CONFIRMED*","price":"425.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UsEAAOSwLSBfabL6/s-l225.webp","title":"Xbox Series S Console Digital Edition","price":"463.60","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PPcAAOSwWQdfbf4P/s-l225.webp","title":"ORIGINAL XBOX W/ Box + Wires + Controller MICROSOFT","price":"9.99","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/deIAAOSwsblfaMtG/s-l225.webp","title":"Microsoft Xbox 360 Console Bundle with 1 Controller + 1 Game","price":"254.09","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QK4AAOSwmCpfbzsr/s-l225.webp","title":"Xbox 360 Slim 250 GB without","price":"325.20","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/28oAAOSw6aRfQlJ3/s-l225.webp","title":"Original Xbox Console Boxed With Controller 7 Games And All Leads - Working","price":"139.74","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/e8QAAOSwKyxfaROW/s-l225.webp","title":"Xbox One Console, 500Gb HD, Controller, Power Supply, \"Day One Edition\"","price":"52.09","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/79gAAOSwYSZfNZK9/s-l225.webp","title":"Microsoft Xbox 360 S HALO 4 Limited Edition Grey Games Console Collectable","price":"231.22","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/A~0AAOSwyKta1c~B/s-l225.webp","title":"Xbox 360 Console + Controller + Games/Large Microsoft Xbox 360 Set","price":"302.08","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ONEAAOSwLOlfbiee/s-l225.webp","title":"Microsoft Xbox ONE 500GB Black Console with 1 Controller and 8 Games","price":"188.03","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t44AAOSwiydfb2cT/s-l225.webp","title":"Microsoft Xbox S Digital Console","price":"368.43","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bWsAAOSwxj1fa0kS/s-l225.webp","title":"Original XBOX 128 RAM Upgraded OG Retro Arcade Custom Loaded 2tb","price":"399.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hCoAAOSw25dfGHOB/s-l225.webp","title":"Xbox one + 2 Games/Games.","price":"127.81","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LckAAOSwWelfa26B/s-l225.webp","title":"Xbox one console 365GB With Leads","price":"76.23","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XaoAAOSwSWxeltPx/s-l225.webp","title":"XBOX 360 E Slim Console 500GB Bundle + 5 Games + 1 Controller ","price":"95.22","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7SEAAOSwRylfX3p~/s-l225.webp","title":"Xbox 360 250gb Slim console with Kinect, Games Bundle and Controller.  Boxed.","price":"99.73","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DnAAAOSw29Zd1289/s-l225.webp","title":"Xbox Wireless Controller – DPM X019 Exclusive 1/1000 Rare Brand New and Sealed","price":"254.08","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6BoAAOSwgadcTTG5/s-l225.webp","title":"Xbox 360 Elite 120gb HDD\" (microsoft) + games (used)","price":"174.17","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1U8AAOSwTmVfR1wm/s-l225.webp","title":"Xbox with Controller ","price":"30.00","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FWkAAOSwn9VfcI45/s-l225.webp","title":"New ListingXbox one s 1tb console .2 remotes. 3 months 14 days GAMEPASS live. sealed.","price":"290.48","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wuIAAOSwxrJeaQal/s-l225.webp","title":"Microsoft Xbox One X 1TB Games Console in Black PRE-OWNED","price":"290.93","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wSsAAOSwGUNfWnvD/s-l225.webp","title":"Xbox Original Console & 32 Games Bundle 2 Controllers & 1 Remote See Description","price":"106.71","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xCMAAOSwxx5fa1xV/s-l225.webp","title":"Original Xbox Console 1 Controller 9 Games","price":"31.70","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/v1IAAOSwOmdfVl5y/s-l225.webp","title":"Xbox 360 Slim E 500GB Console 5 FREE Games Controller Bundle Tested Formatted","price":"88.92","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0bwAAOSwTDVfcHml/s-l225.webp","title":"New ListingXbox One S Minecraft Limited Edition Bundle 1TB - Read description","price":"355.73","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xHYAAOSwnRRfEiXK/s-l225.webp","title":"Microsoft Xbox One Console 1TB Black with Controller from Dealer","price":"196.91","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/I2kAAOSwuShfbTWz/s-l225.webp","title":"Xbox S series","price":"381.12","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/MrwAAOSwkm1fbOjk/s-l225.webp","title":"New ListingXBOX Microsoft SERIES X - Confirmed Best Buy Pre-Order - FREE EXPEDITED SHIPPING","price":"1,099.99","category":"xbox"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CzAAAOSwI-5fERlf/s-l225.webp","title":"Microsoft Xbox Original Console, 2 Controllers, All Cables + 30 Games working","price":"219.00","category":"xbox"}];

  constructor() { }

  getItems() {
    return this.items.slice();
  }
  
  getItem(i) {
    return this.items[i];
  }

  editItem(i, item) {
    this.items[i] = item;
  }
}