# dto-input-ts

DTO-Input is a TypeScript helper library for reading GPIO pins from the device tree utilizing the [device tree overlay](https://www.raspberrypi.org/documentation/configuration/device-tree.md) from the linux kernel. Using device tree overlays should enable you using this library on every single board computer. 

In my sample implementation I use only a button and a rotary encoder.

## State of the project
Currently the library is still under development but already read the data, filters unrelevant data and provides the red data in an array. I still need to implement some kind of event or other interface for interacting with with this library.

Missing:
- Smaple DTS files for compiling an overlay
- Install Intructions
- Testing Instructions
- Events or other interface for the library
- Generel developer desription for the library
- I should probably write some automated software tests
- Complete the README

## Compiling sample overlays

tbd

## Installing & testing device tree overlays
tbd

## Installing library depencies

In the library folder run the following command for installing the depencies.

'npm install --save @types/node'

## Links
If you need help understanding device tree overlay visit the following links.

This project was inspired by [fivdi's gpio-button project](https://github.com/fivdi/gpio-button). This is not a fork of the fivdi's project. I wanted to learn JavaSrcipt but decided to use TypeScript due to I did not like JS's approach of beein not type safe. Also as a professional developer I wanted to you a more ES6 like approach. But I took a lot of knowledge out of fivdi's project and would like to thank him for that.

tbd
-Kernel links
-Kernel data structure
