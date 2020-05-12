# stmdl-converter

> This package will be used to convert a mathematics units

## Contact me

If you have any questions do not hesitate to join me on my [`discord server`](https://discord.gg/ES52WDg)

## API

 * <code>convertM<b>.kgToLbs()</b></code>
 * <code>convertM<b>.lbsToKg()</b></code>
 * <code>convertS<b>.kmhToMph()</b></code>
 * <code>convertS<b>.mphToKmh()</b></code>
 * <code>convertT<b>.msToS()</b></code>
 * <code>convertT<b>.msToMin()</b></code>
 * <code>convertT<b>.msToHour()</b></code>
 * <code>convertT<b>.minToMs()</b></code>
 * <code>convertT<b>.minToS()</b></code>
 * <code>convertT<b>.minToHour()</b></code>
 * <code>convertT<b>.hourToMs()</b></code>
 * <code>convertT<b>.hourToS()</b></code>
 * <code>convertT<b>.hourToMin()</b></code>
 * <code>convertL<b>.mmToCm()</b></code>
 * <code>convertL<b>.mmToM()</b></code>
 * <code>convertL<b>.mmToKm()</b></code>
 * <code>convertL<b>.cmToMm()</b></code>
 * <code>convertL<b>.cmToM()</b></code>
 * <code>convertL<b>.cmToKm()</b></code>
 * <code>convertL<b>.dmToCm()</b></code>
 * <code>convertL<b>.dmToMm()</b></code>
 * <code>convertL<b>.dmToM()</b></code>
 * <code>convertL<b>.dmToKm()</b></code>
 * <code>convertL<b>.mToMm()</b></code>
 * <code>convertL<b>.mToCm()</b></code>
 * <code>convertL<b>.mToKm()</b></code>
 * <code>convertL<b>.kmToMm()</b></code>
 * <code>convertL<b>.kmToCm()</b></code>
 * <code>convertL<b>.kmToM()</b></code>
 * <code>convertD<b>.farToCelsius()</b></code>
 * <code>convertD<b>.celToFarhenheit()</b></code>

## Usage (Exemple)

```js
const app = require('stmdl-converter');
const response = app.convertL.kmToCm;

/**
* Now, let's use our function
*/

let value = response(50);
console.log(value) /* () => 5e+6 *** 5000000 */

/**
* You can use the function directly with a number or use it for another function
*/

const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "!";

bot.on('message', message => { 
    if(message.content.includes(prefix + 'enter this value')) {

        let messageArray = message.content.split(' ');
        let args = messageArray.slice(1);
        let answer = response(args.join(' '));

console.log(answer); /*() => * This will depend on what you put in your discord message */ 

    }
});
```
# New version : 1.4.13

> Add of the degrees converter

## Usage (Exemple)

```js
const { convertD } = require('stmdl-converter');
let x = 20;
let y = -12;
const response  = convertD.farToCelsius(x);

console.log(response); /* () => -7°C */

let response2 = convertD.celToFarhenheit(y);

console.log(response2); /* () => 10°F
```

# New version 1.5.17

> Update in the length converter (add decimeters)

# Exemple => 

```js
const { convertL } = require ('stmdl-converter');
console.log (convertL.dmToMm (50)) /* => 5000 *** */
```

## MIT License

Copyright (c) 2019 wazabix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE."# stmdl-converter" 
